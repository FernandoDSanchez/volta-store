import { Menu } from "./Menu/Menu"
import { CartButton } from "./CartButton/CartButton"
import { Link } from "react-router-dom"

export const NavBar = (props) => {
    const {navStyle} = props
    return(
        <header className="bg-[#282741] flex justify-center ">
            <div className={"flex flex-row w-full justify-between max-w-screen-xl"}>
                <Menu navStyle={navStyle}/>
                <Link to="/CheckOut" ><CartButton navStyle={navStyle}/></Link>
            </div>
        </header>
    )
}