import navbarItems from "./navbarItems";
import "./navbar.css";
import icon1 from "../images/ellipse(1).png";
import icon2 from "../images/ellipse(2).png";
import icon3 from "../images/ellipse(3).png";
import { BsGlobe2 } from "react-icons/bs";

function Navbar(props) {
  return (
    <>
      <nav className='NavbarItems'>
        <div className='navbar-items-left'>
          <div className='parent-div'>
            <img src={icon1} className='blue-ellipse' alt='a blue ellipse' />
            <img
              src={icon3}
              className='light-yellow-ellipse'
              alt='a light yellow ellipse'
            />
            <img
              src={icon2}
              className='yellow-ellipse'
              alt='an yellow ellipse'
            />
          </div>
          <p>
            <span className='blue-text'>AKA</span>
            <span className='black-text'>.coin</span>
          </p>
        </div>
        <div className='navbar-items-right'>
          <div
            className='menu-icon'
            onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
          >
            <i
              className={props.isMenuOpen ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={props.isMenuOpen ? "nav-menu active" : "nav-menu"}>
            {navbarItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cname} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
