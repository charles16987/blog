import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <Link to="/">
            <h1>Issue Board</h1>
          </Link>

          <div className='navlist'>
            <Link to="/">
              <li>Home page</li>
            </Link>

            <Link to="/Issueboard">
              <li>Creat Issue Board</li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav
