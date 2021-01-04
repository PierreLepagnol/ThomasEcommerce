import {Link} from "react-router-dom";
import React from 'react'

export default function NavBar() {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">La Carte</Link>
            </li>
            <li>
              <Link to="/contact">Qui sommes nous ?</Link>
            </li>
          </ul>
        </nav>
    )
}