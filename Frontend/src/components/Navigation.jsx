import { useState } from "react";
import "./navigation.css";
const NAVIGATION = ["home", "explore", "contact us", "about us"];
const Navigation = () => {

    const [nav, setNav] = useState('');

    const onSelectNav = (element) => {
        console.log(element);

      setNav(element);
      console.log(nav);
    };
  return (
    <div>
      <ul className="navbar">
        {NAVIGATION.map((element) => {
            return (
              <li key={element} onClick={() => {onSelectNav(element);}} className="capitalize">
                {element}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
