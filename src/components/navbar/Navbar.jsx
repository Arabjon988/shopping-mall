import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

// import navbar.css file
import "./navbar.css";

import { VscColorMode } from "react-icons/vsc";
import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(Context);

  const handleDark = () => setDarkMode(!darkMode);
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_main">
          <div className="nav_logo">
           <Link to='/' > <h1 className="nav_logo_text">Venturis</h1></Link>
          </div>
          <div className="nav_links">
            <Link to="/">
              <span> Home</span>{" "}
            </Link>
            <Link to="/about">
              <span> About</span>{" "}
            </Link>
            <Link to="/products">
              <span> Products</span>{" "}
            </Link>
            <Link to="/contact">
              <span> Contact</span>{" "}
            </Link>
          </div>
          <div className="nav_btns">
            <Link to="/login" className="nav_auth_btn">
              <IoLogIn className="nav_btn_icon" />
              <button>Login</button>
            </Link>
            <Link to="/signUp" className="nav_auth_btn">
              <FaUserPlus className="nav_btn_icon" />
              <button>SignUp</button>
            </Link>
            <Link to="/cart" className="nav_auth_btn">
              <FiShoppingCart className="nav_btn_icon" />
              <button>Bag</button>
            </Link>
            <div className="nav_mode">
              <VscColorMode onClick={handleDark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
