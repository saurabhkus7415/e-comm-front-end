import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
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
          {auth ? 
            <Link onClick={Logout} to="/signup">
              Logout
            </Link>
           : 
            <Link to="/signup">Create Account </Link>
          }
        </li>
      </ul>
    </div>
  );
};
export default Nav;
