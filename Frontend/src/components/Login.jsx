import { useState } from 'react';
import './form.css';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../Store/testSlice.js'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch();

   const onLogin = async(e)=>{
    e.preventDefault();
     try {
       console.log({ email, password });
       
       const res = await fetch("http://127.0.0.1:3000/author/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        
      const result = await res.json(res);
      console.log(result.token);
      localStorage.setItem("authorId",result.authorId)
       localStorage.setItem("token", result.token);
       console.log(" login response ", result);
       if (res.status==200) {
        
         dispatch(login(true));
         navigate("/explore");
       }
    } catch (error) {
      console.log(error);
    }
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