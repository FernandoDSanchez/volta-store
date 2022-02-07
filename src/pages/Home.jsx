import { CartButton } from "../components/CartButton"
import { Link } from "react-router-dom"
import  styles  from "./Home.module.css"

export const Home = () => {
    return(
        <div className={styles.home}>
            <Link to="/CheckOut" ><CartButton/></Link>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div>
                <div>Kit Generador Volta Box</div>
                <p>price</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}