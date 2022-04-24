import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link, Route, Router } from 'react-router-dom'
import { signIn } from '../firebase'

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() =>{
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email,pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, pwd)
      setSuccess(true);
    } catch (e) {
      alert(e)
    }
    setEmail('');
    setPwd('');
    
  }

  return (
    <>
    {success ? (
      <div className="loginBody">
        <h1>Success!</h1>
        <p>
          You are now logged in! {<br/>}
        </p>
      </div>
    ) : (
    <div>
      <div className="loginBody">
        <p ref = {errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1 className='loginHeader'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email" id='userLabel'>Email</label>
            <br/>
            <input 
              type="text" 
              id="email" 
              ref = {emailRef} 
              autoComplete = "off" 
              onChange = {((e)=> setEmail(e.target.value))} 
              value={email}
              required
              />
          </div>
          <div className="pwd">
            <label htmlFor="password">Password</label>
            <br/>
            <input 
              type="password" 
              id="password" 
              autoComplete = "off" 
              onChange = {((e)=> setPwd(e.target.value))} 
              value={pwd}
              required
              />
         </div>
         <button type="submit" id='signIn'>Sign In</button>
        </form>
        <p className='needAcc'>
          Need an Account? <br/>
          <span className="line">
            <Link to="/Register" id='signUpLink'>Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
    )} </>
  )
}

export default Login