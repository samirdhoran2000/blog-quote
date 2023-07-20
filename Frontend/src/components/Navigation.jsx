import { useState } from "react";
import "./navigation.css";
const NAVIGATION = ["home", "explore", "contact us", "about us"];
const Navigation = () => {

    const [nav, setNav] = useState('home');

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
              <li
                key={element}
                onClick={() => {
                  onSelectNav(element);
                }}
                className="capitalize"
                style={{
                    backgroundColor: nav === element ? 'rgb(173, 40, 40)' : 'rgb(92, 15, 15)' ,
                    border: nav === element ? '1px solid white':'none' 
                }}
              >
                {element}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
