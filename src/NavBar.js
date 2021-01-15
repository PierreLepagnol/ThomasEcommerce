import {Link} from "react-router-dom";
import React from 'react'

export default function NavBar() {
  
    return (
        <nav>
          <ul className="center main-nav">
            <li>
              <Link to="/Menu">Menu St Valentin</Link>
            </li>
            {/* <li>
              <Link to="/traiteur-domicile">Prestation à domicile</Link>
            </li> */}
            <li>
              <Link to="/">Le Concept</Link>
            </li>
          </ul>
        </nav>
    )
}