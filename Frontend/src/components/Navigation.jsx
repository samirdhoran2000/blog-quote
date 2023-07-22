import { useState } from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import NAVIGATION from '../Constant/navigation';

const Navigation = () => {
  const [nav, setNav] = useState("home");

  const onSelectNav = (element) => {
    console.log(element);

    setNav(element.name);
    console.log(nav);
  };
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
      </ul>
    </div>
  );
};

export default Navigation;
