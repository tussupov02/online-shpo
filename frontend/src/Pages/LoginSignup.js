import React, { useEffect } from 'react'
import { useState } from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {

  const [state, setState]= useState('Login');
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  });
  const [check, setCheck]= useState(false)


  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
    console.log("Login func executed", formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData), 
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth__token', responseData.token);
      window.location.replace('/');
    }
    else{
      setCheck(true)
    }

  }
  const signup = async()=>{
    console.log("Signup func executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData), 
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth__token', responseData.token);
      window.location.replace('/');
    }
    else{
      setCheck(true)
    }
  }

  const entrance =()=>{
    if(state==="Login"){
      login()
    }else{
      if(formData.email.length>0 && formData.password>0 && formData.username>0){
        signup()
      }else{
        setCheck(true)
      }
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup__container">
        <h1>{state}</h1>
        <div className='loginsignup__fields'>
          {state==="Sign Up"? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Ваше имя'/>: <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='email address'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="text" placeholder='password'/>
        </div>
        <button onClick={()=>{entrance()}}>Продолжить</button>
        {state==="Sign Up"
        ? <p className="loginsignup__login"> Уже есть аккаунт? <span onClick={()=>{setState("Login");setCheck(false)}}>Нажать</span></p>
        :<p className="loginsignup__login"> Создать аккаунт? <span onClick={()=>{setState("Sign Up");setCheck(false)}}>Нажать</span></p>}
        {check?<div className='check'>Вы ввели не верные данные</div>:<></>}
      </div>
    </div>
  )
}

export default LoginSignup