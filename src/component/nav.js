import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
       
        <li>
          <Link to="/profile">Profile </Link>
        </li>
        <li>
          <Link to="/">Products </Link>
        </li>
        <li>
          <Link to="/productAdd">Add Products </Link>
        </li>
        <li>
          <Link to="/productUpdate">Update Products </Link>
        </li>
        <li>
          <Link to="/logout">Logout </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
