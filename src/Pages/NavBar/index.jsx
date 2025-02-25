import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
return(
    <>
        <nav className='Navbar'>
        <ul>
          <li>
            <NavLink  to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/account"}>Account</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        
        </ul>
      </nav>
    </>
)
}
export default NavBar