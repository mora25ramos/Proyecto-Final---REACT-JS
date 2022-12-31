import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Cart from "../Cart/Cart";
import { AppBar } from "@mui/material";
import "./Navbar.css";

const NavBar = ({ menus, categorias }) => {
  return (
    <AppBar position="static" className="navbar">
      
      {
        menus.map((menu)=>{
          return <Link className='navbar__menu' 
            to={menu.href} >{menu.name}</Link>
          })
      }
      <div>
        { 
          categorias.map((categoria)=>{
          return <Link to={`/category/${categoria.id}`} className='navbar__category-link'>{categoria.name}</Link>
          })
        }
      </div>
      <Cart />
    </AppBar>
  );
};

export default NavBar;