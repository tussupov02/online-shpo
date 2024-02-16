import React, { useState } from "react";
import "./Chat.css";
import { IoChatbubbles } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { useEffect } from "react";

function Chat() {
  const [chat, setChat] = useState(false);
  const [message, setMessage] = useState(false);
  const [inputName, setInputName] = useState("");
  const [sendMessage, setSendMessage] = useState([]);

  const send = () => {
    setSendMessage([...sendMessage, { send: inputName }]);
    setInputName("");
  };

  const close = () => {
    setChat(false);
  };

  useEffect(()=>{
    setTimeout(() => {
      setChat(true);
      setTimeout(() => {
        setMessage(true);
      }, 1000);
    }, 3000);
  },[])

  const open = () => {
    setChat(true);
    setTimeout(() => {
      setMessage(true);
    }, 1000);
  };
  return (
    <div>
      {chat ? (
        <div className="chat">
          <div className="headerChat">
            <p>Онлайн консультация</p>
            <IoCloseCircle
              className="close"
              onClick={close}
              size={32}
              color="white"
            />
          </div>
          {message ? (
            <div className="message">Добрый день, чем могу вам помочь?</div>
          ) : (
            ""
          )}
          <div className="sendBox">
            {sendMessage.map((mess) => {
              return (
                <div className="sendMess">
                  <p>{mess.send}</p>
                </div>
              );
            })}
          </div>

          <div className="inputText">
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <div className="inputButton">
              <IoSend
                color="rgba(0, 0, 0, 1)"
                size={20}
                className="inputButtonIcon"
                onClick={send}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="openChat" onClick={open}>
          <IoChatbubbles size={32} />
        </div>
      )}
    </div>
  );
}

export default Chat;
