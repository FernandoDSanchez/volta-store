import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { Logo } from "../../../assets/img/Logo"
import { MenuIcon } from "../../../assets/img/MenuIcon"
import styles from "./Menu.module.css"
export const Menu = (props) => {
    let {navStyle} = props
    const [showMenu, setShowMenu] = useState(false)
    const [iconsColor, setIconsColor] = useState("FFF7EB")
    const [iconsMenu, setIconsMenu] = useState("FFF7EB")
    const dark = "#282741"
    const light = "#FFF7EB"
    const open = styles.iconsContainer
    const close = styles.iconsContainerClose
    let menu
    useEffect(() => {
        showMenu?setIconsColor(dark):setIconsColor(light)
    },[showMenu])
    useEffect(() => {
        showMenu?setIconsMenu(open):setIconsMenu(close)
    },[showMenu])
    if (showMenu){
        menu = 
        <div className={styles.menuContainer}>
            <ul className={styles.menuList}>
                <Link to="/Category/baterias">
                    <li className={styles.listHover}>Baterias</li>
                </Link>
                <Link to="/Category/kits">
                    <li className={styles.listHover}>Kits</li>
                </Link>
                <Link to="/Category/paneles">
                    <li className={styles.listHover}>Paneles</li>
                </Link>
                <li>Contacto:
                    <div className={styles.contactContainer}>
                        <h3>voltacolombia@gmail.com</h3>
                        <h3>Tlf +57-3197511679</h3>
                    </div>
                </li>
            </ul>
        </div>}
    return (  
        <div className={iconsMenu}>
            <div>
                <div className={styles.menuButton}><button onClick={()=> setShowMenu(!showMenu)}><MenuIcon className={styles.burgerIcon}navStyle={navStyle}/></button></div>
                {menu}
            </div>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <Logo iconsColor={iconsColor} navStyle={navStyle}/>
                </Link>
            </div>
        </div>
    )
}