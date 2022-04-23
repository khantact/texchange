import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { signUp } from "../firebase";

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /\w+@\w+\.edu/;

const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // To-DO
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    // console.log(result);
    // console.log(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result)
    // console.log(pwd)
    setValidPwd(result)
    const match = pwd == matchPwd;
    setValidMatch(match);
  }, [pwd,matchPwd])

  useEffect(() =>{
    const result = EMAIL_REGEX.test(email);
    console.log(result)
    console.log(email)
    console.log(typeof email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    setErrMsg('');
  }, [user,email,pwd,matchPwd])

  const handleSubmit = async (e) => {
      e.preventDefault();
      const v1 = USER_REGEX.test(user);
      const v2 = PWD_REGEX.test(pwd);
      const v3 = EMAIL_REGEX.test(email);
      if (!v1 || !v2 || !v3){
          setErrMsg("Invalid Entry");
          return;
      }
      await signUp(email,pwd);
      
  }

  return (
    <div className="registerBody">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live = "assertive">{errMsg}</p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <span className = {validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className = {validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon= {faTimes}/>
          </span>
        </label>
        <br/>
        <input 
          type="text" 
          id="username"
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setUser(e.target.value)}
          required
          aria-invalid = {validName ? "false" : "true"}
          aria-describedby = "uidnote"
          onFocus = {() => setUserFocus(true)}
          onBlur = {() => setUserFocus(false)}
          />
          <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters. <br/>
            Must begin with a letter. <br/>
            Letters, numbers, underscores, hyphens allowed.
          </p>


        <br/>
        <label htmlFor="email">
          Email
          <span className = {validEmail ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>

          <span className = {!validEmail ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>

        </label>
        <br/>
        <input 
          type="text" 
          id="email"
          ref={emailRef}
          autoComplete = "off"
          onChange = {(e) => setEmail(e.target.value)}
          required
          aria-invalid = {validEmail ? "false" : "true"}
          aria-describedby = "emailnote"
          onFocus = {() => setMailFocus(true)}
          onBlur = {() => setMailFocus(false)}
        />
        <p id="emailnote" className={mailFocus && email && !validEmail ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Email must end in .edu
        </p>
        <br/>
          <label htmlFor="password">
          Password
          <span className = {validPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className = {validPwd || !pwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon= {faTimes}/>
          </span>
        </label>
        <br/>
        
        <input 
          type="password" 
          id="password"
          onChange = {(e) => setPwd(e.target.value)}
          required
          aria-invalid = {validPwd ? "false" : "true"}
          aria-describedby = "pwdnote"
          onFocus = {() => setPwdFocus(true)}
          onBlur = {() => setPwdFocus(false)}
        /> 
        <br/>
        <label htmlFor="confirm_pwd">
            Confirm Password:
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
        </label>
        <br/>
        <input 
          type="password" 
          id="confirm_pwd"
          onChange = {(e) => setMatchPwd(e.target.value)}
          required
          aria-invalid = {validMatch ? "false" : "true"}
          aria-describedby = "confirmnote"
          onFocus = {() => setMatchFocus(true)}
          onBlur = {() => setMatchFocus(false)}
        />
          <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon= {faInfoCircle} />
            Passwords must match
          </p>
        <br/>
        <button disabled = {!validName || !validPwd || !validMatch ? true : false} onClick={handleSubmit}>
            Sign Up
        </button>
      </form>
      <p id="alreadyReg">
          Already Registered?<br />
          <Link to="/Login">Log In</Link>
      </p>
    </div>
  )
}

export default Register