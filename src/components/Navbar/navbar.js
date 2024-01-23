import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <p className="my_shop" onClick={() => setShow(true)}>
          NUTIFY.com
        </p>
        <div className="cart">
          <ScrollLink to="footer" smooth={true} duration={500}>
            <i><FontAwesomeIcon icon={faPhone} /></i>
          </ScrollLink>
          <p>
            <Link to="/cart">
              <i><FontAwesomeIcon icon={faCartShopping} /></i>
            </Link>
          </p>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
