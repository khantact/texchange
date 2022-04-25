import React from 'react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, fdb } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const Navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userinfo = await signInWithEmailAndPassword(auth,email,pwd);
      await updateDoc(doc(fdb, 'users', userinfo.user.uid),{
        isOnline: true,
      })
      setSuccess(true);
    } catch (e) {
      alert(e)
    }

    
  }
  
  return (
    success ? (

      <div className="loginBody">
        <p>Success! Logging you in now</p>
        {Navigate('/')}
      </div>
    ) : 
    (
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
         <button id='signIn'>Sign In</button>
        </form>
        <p className='needAcc'>
          Need an Account? <br/>
          <span className="line">
            <Link to="/Register" id='signUpLink'>Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  ))
}

export default Login