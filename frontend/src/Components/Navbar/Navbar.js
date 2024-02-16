import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { HiOutlinePhone } from "react-icons/hi2";
import { ImExit } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { FaChevronCircleRight } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav__menu__visible")
    e.target.classList.toggle("open");
  };


  return (
    <div>
      <div className="navbar__main">
        <p className="navbar__align">
          <HiOutlinePhone size={14} style={{ paddingRight: "10px" }} /> +7 (777)
          777-77-77{" "}
          <span style={{ paddingRight: "10px", paddingLeft: "10px" }}>|</span>{" "}
          Работаем 7 дней в неделю
          <span style={{ paddingRight: "10px", paddingLeft: "10px" }}>|</span>
          9:00 — 18:00
        </p>
        {localStorage.getItem("auth__token") ? (
          <div
            className="navbar__align"
            onClick={() => {
              localStorage.removeItem("auth__token");
              window.location.replace("/");
            }}
          >
            {" "}
            <ImExit size={14} style={{ paddingRight: "10px" }} /> Выход
          </div>
        ) : (
          <Link style={{ textDecoration: "none" }} to="login">
            <div className="navbar__align">
              <ImExit size={14} style={{ paddingRight: "10px" }} /> Войти{" "}
              <span style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                /
              </span>{" "}
              Регистрация
            </div>
          </Link>
        )}
      </div>
      <div className="navbar">
        <div className="nav__logo">
          <Link
            onClick={() => {
              setMenu("shop");
            }}
            className="nav__logo__link"
            to="/"
          >
            O'CLOCK
          </Link>{" "}
        </div>
        <FaChevronCircleRight
          size={30}
          className="nav__dropdown"
          onClick={dropdownToggle}
        />
        <ul ref={menuRef} className="nav__menu">
          <li>
            <Link
              onClick={() => {
                setMenu("shop");
              }}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                color: "var(--gray, #969696)",
                fontFamily: "PT Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
              to="/"
            >
              <MdHome size={24} className="home" />
              Главная
            </Link>{" "}
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("classics");
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "var(--gray, #969696)",
                fontFamily: "PT Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
              to="/classics"
            >
              Классика
            </Link>
            {menu === "classics" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("sport");
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "var(--gray, #969696)",
                fontFamily: "PT Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
              to="/sport"
            >
              Спорт
            </Link>
            {menu === "sport" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("casual");
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "var(--gray, #969696)",
                fontFamily: "PT Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
              to="/casual"
            >
              Повседневные
            </Link>
            {menu === "casual" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav__login__cart">
          <Link style={{ textDecoration: "none" }} to="cart">
            <IoCartOutline fontSize={26} style={{ color: "white" }} />
          </Link>
          <div className="nav__cart__count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
