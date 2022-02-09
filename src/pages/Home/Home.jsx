import { CartButton } from "../../components/NavBar/CartButton"
import { Link } from "react-router-dom"
import  styles  from "./Home.module.css"
import { NavBar } from "../../components/NavBar/NavBar"

export const Home = () => {
    return(
        <div className={styles.home}>
            <div>
                <NavBar/>
            </div>
            <div>
                <div><img src={require(`../../assets/img/volta-box.png`)} alt="Equipo Volta" /></div>
                <div>
                    <div>Kit Generador Volta Box</div>
                    <p>price</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}