import './header.css';
import Navigation from './Navigation'
import { BiSearchAlt2 } from "react-icons/bi";
import {IconContext} from 'react-icons'

const Header = () => {
  return (
    <div className="main-header-container">
      <div className="brand-name-logo">Blog</div>
      <div className="navigation-bar"><Navigation/></div>
      <div className="search-box">
        <div>
          <div className="inside-search">
            <IconContext.Provider
              value={{
                className: "search-icon",
                color: "black",
                style: {
                  height: "40px",
                  width: "40px",
                },
              }}
            >
              <BiSearchAlt2 />
            </IconContext.Provider>
            <input type="text" id="search-box" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header