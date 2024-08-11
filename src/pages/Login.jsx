import '../dist/css/login.css';
import { useState } from 'react';

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input 
          id="tab-1" 
          type="radio" 
          name="tab" 
          className="sign-in" 
          checked={isSignIn} 
          onChange={() => setIsSignIn(true)} 
        />
        <label htmlFor="tab-1" className="tab">Sign In</label>
        
        <input 
          id="tab-2" 
          type="radio" 
          name="tab" 
          className="sign-up" 
          checked={!isSignIn} 
          onChange={() => setIsSignIn(false)} 
        />
        <label htmlFor="tab-2" className="tab">Sign Up</label>
        
        <div className="login-form">
          {isSignIn ? (
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          ) : (
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" />
              </div>
              <div className="group">
                <label htmlFor="repeat-pass" className="label">Repeat Password</label>
                <input id="repeat-pass" type="password" className="input" />
              </div>
              <div className="group">
                <label htmlFor="email" className="label">Email Address</label>
                <input id="email" type="text" className="input" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#tab-1" onClick={() => setIsSignIn(true)}>Already Member?</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
