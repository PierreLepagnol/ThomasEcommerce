import {Link} from "react-router-dom";
import React from 'react'

export default function NavBar() {
    return (
        <nav>
          <ul  className="center">
            <li>
              <Link to="/">La Carte</Link>
            </li>
            <li>
              <Link to="/contact">Le Concept</Link>
            </li>
          </ul>
        </nav>
    )
}