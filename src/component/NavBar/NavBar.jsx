import CartWidget from "../CartWidget";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">        
          <h2>Tienda</h2>        
      </Link>
      <div className="link-container"> 
        <ul>
          <NavLink to="/category/Componente" className={({isActive})=>isActive? "link-activo" : "link"}>Componentes</NavLink>
          <NavLink to="/category/Hook" className={({isActive})=>isActive? "link-activo" : "link"}>Hooks</NavLink>
          <CartWidget />
        </ul>
      
      </div>
    </nav>
  );
};

export default Navbar;