import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link, Route, Router } from 'react-router-dom';
const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() =>{
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user,pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUser('');
    setPwd('');
    setSuccess(true)
  }

  return (
    <div>
      <div className="loginBody">
        <p ref = {errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1 className='loginHeader'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="user">
            <label htmlFor="username" id='userLabel'>Username</label>
            <br/>
            <input 
              type="text" 
              id="username" 
              ref = {userRef} 
              autoComplete = "off" 
              onChange = {((e)=> setUser(e.target.value))} 
              value={user}
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
  )
}

export default Login