import { Menu } from "./Menu"
import { CartButton } from "./CartButton"
import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

export const NavBar = () => {
    return(
        <div>
            <Menu/>
            <Link to="/CheckOut" ><CartButton/></Link>
        </div>
    )
}