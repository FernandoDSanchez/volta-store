import  styles  from "./Home.module.css"
import { NavBar } from "../../components/NavBar/NavBar"
import { AddToCart } from "../../components/AddToCart/AddToCart"
import { VoltaBox } from "../../assets/img/VoltaBox"

export const Home = () => {
    const size = styles.addButton
    return(
        <div className={styles.home}>
            <div>
                <NavBar/>
            </div>
            <div className={styles.homeContainer}>
                <div className={styles.imgContainer}><img src={require(`../../assets/img/volta-box.png`)} alt="Equipo Volta"/></div>
                <div className={styles.itemHome}>
                    <VoltaBox className={styles.voltaBox}/>
                    <div><p>Kit Generador Volta Box</p></div>
                    <p>$370.000</p>
                    <AddToCart id={"4"} size={size}/>
                </div>
            </div>
        </div>
    )
}