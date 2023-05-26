import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavBar() {
    return (
        <div>
            <nav>
                <h1 className="Logo">Kargo</h1>
                <ul>
                    <Link to='/home'>
                      <li><a href="">Home</a></li>
                    </Link>
                    <Link to="contact">
                      <li><a  href="">Contact</a></li>
                    </Link>
                </ul>
                <Link to="/signup">
                  <li><a  href="">SignIn</a></li>
                </Link>
            </nav>
        </div>
    )
}
export default NavBar;





