import { useState } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
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
            <li
              key={element.name}
              onClick={() => {
                onSelectNav(element);
              }}
              className="capitalize"
              style={{
                backgroundColor:
                  nav === element.name ? "rgb(173, 40, 40)" : "rgb(92, 15, 15)",
                border: nav === element.name ? "1px solid white" : "none",
              }}
            >
              <Link to={`${element.to}`}>
              {element.name}
               
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
