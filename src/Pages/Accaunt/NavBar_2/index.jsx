import { NavLink } from "react-router-dom"
import './NavBar_2.css'
const NavBar_2 = () => {
return(
    <>
    
          <nav className='Navbar_2'>
        <ul>
          <li>
            <NavLink  to={"/account/profile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/account/settings"}>Settings</NavLink>
          </li>
          <li>
            <NavLink to={"/account/subscription"}>Subscription</NavLink>
          </li>
          <li>
            <NavLink to={"/account/orders"}>Orders</NavLink>
          </li>
        
        </ul>
      </nav>
    </>
)
}
export default NavBar_2