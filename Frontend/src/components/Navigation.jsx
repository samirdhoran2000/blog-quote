import { useState } from "react";
import "./navigation.css";
import { NavLink,useNavigate } from "react-router-dom";
import NAVIGATION from '../Constant/navigation';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Store/testSlice";


const Navigation = () => {
  const [nav, setNav] = useState("home");
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const dispatch=useDispatch()
  const isLogin = useSelector((state) => {
    console.log("state is is ",state);
    return state.login
  });

  const onSelectNav = (element) => {
    console.log(element);

    setNav(element.name);
    console.log(nav);
  };

  const rederLoginLogout = () => {
    if (token && isLogin) {
      return (
        
        <NavLink>
          <li
            onClick={() => {
              localStorage.clear();
              navigate('/');
              dispatch(login(false))
            }}
            className="capitalize"
          >
            logout
          </li>
        </NavLink>
      );
      
    } else {
      return (
        <NavLink to={`/login`}>
          <li
            onClick={() => {
              onSelectNav({ name: "login", to: "/login" });
              navigate('/')
            }}
            className="capitalize"
          >
            login
          </li>
        </NavLink>
      );
    }
  }
  return (
    <div>
      <ul className="navbar">
        {NAVIGATION.map((element) => {
          return (
            <NavLink key={element.name} to={`${element.to}`}>
              <li
                key={element.name}
                onClick={() => {
                  onSelectNav(element);
                }}
                className="capitalize"
                
              >
                {element.name}
              </li>
            </NavLink>
          );
        })}
            {rederLoginLogout()}
      </ul>
    </div>
  );
};

export default Navigation;
