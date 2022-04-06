import navbarItems from "./navbarItems";
import "./navbar.css";

function Navbar(props) {
  return (
    <>
      <nav className='NavbarItems'>
        <div className='navbar-items-left'>
          <p>AKA COIN</p>
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
