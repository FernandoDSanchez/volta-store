import { Menu } from "./Menu/Menu"
import { CartButton } from "./CartButton/CartButton"
import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

export const NavBar = (props) => {
    const {navStyle} = props
    return(
        <div className={styles.navBarContainer}>
            <Menu navStyle={navStyle}/>
            <Link to="/CheckOut" ><CartButton navStyle={navStyle}/></Link>
        </div>
    )
}