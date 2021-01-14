import {Link} from "react-router-dom";
import React from 'react'

export default function NavBar() {
  
    return (
        <nav>
          <ul  className="center main-nav">
            <li>
              <Link to="/">Menu St Valentin</Link>
            </li>
            <li>
              <Link to="/traiteur-at-home"  >Prestation à domicile</Link>
            </li>
            <li>
              <Link to="/contact">Le Concept</Link>
            </li>
          </ul>
        </nav>
    )
}