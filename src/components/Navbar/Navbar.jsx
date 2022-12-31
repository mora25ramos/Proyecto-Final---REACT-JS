import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { AppBar } from "@mui/material";
import "./Navbar.css";

const NavBar = ({ menus, categorias }) => {
  return (
    <AppBar position="static" className="header.navbar">
      <div>
        {menus.map((menu) => {
          return (
            <Link className="navbar__menu" to={menu.href}>
              {menu.name}
            </Link>
          );
        })}
        </div>
      
      <div className="">
        {categorias.map((categoria) => {
          return (
            <Link
              to={`/category/${categoria.id}`}
              className="navbar__category-link">
              {categoria.name}
            </Link>
          );
        })}
      </div>
      <Cart />
    </AppBar>
  );
};

export default NavBar;