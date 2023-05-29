import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavBar() {
  return (
    <div>

      <header>
        <nav>
          <a href="#" class="logo">Kargo</a>
          <ul>
            <Link to=''>
              <li><a href="">Home</a></li>
            </Link>

            <Link to=''>
              <li><a href="#">Shop</a></li>
            </Link>

            <Link to='/about'>
              <li><a href="#">About</a></li>
            </Link>
            <Link to="contact">
              <li><a href="">Contact</a></li>
            </Link>

            <Link to="/form">
              <li><a href="">Regester</a></li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default NavBar;





