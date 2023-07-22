import { useState } from 'react';
import './form.css';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLogin(e){
    e.preventDefault();
    console.log({email,password});
  }
  return (
    <div className="outer-main-container-form">
      <form action="" method="POST">
        <div className="inner-main-container-form">
          {/* <div> */}
            <div className="name">
              <input
                className="focused-input "
                style={{
                  width: "100%",
                }}
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              />
            </div>
          {/* </div>      */}
        
        {/* ----------------------------------- */}
          <div>
            <div className="name">
              <input
                className="focused-input "
                style={{
                  width: "100%",
                }}
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                
              />
            </div>
          </div>     
          
          {/* ..................................................... */}
          <div>
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  onLogin(e);
                }}
                className=" "
                type="submit"
                style={{
                  padding: "4px",
                  backgroundColor: "red",
                  borderRadius: "10px",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login