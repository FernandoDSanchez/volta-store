import  styles  from "./Home.module.css"
import { NavBar } from "../../components/NavBar/NavBar"
import { AddToCart } from "../../components/AddToCart/AddToCart"
import { VoltaBox } from "../../assets/img/VoltaBox"

export const Home = () => {
    const size = styles.addButton
    let navStyle = false
    return(
        <div className={styles.home}>
            <div className={styles.navBar}>
                <NavBar navStyle={navStyle}/>
            </div>
            <div className={styles.homeContainer}>
                <div className={styles.imgContainer}><img src={require(`../../assets/img/volta-box.png`)} alt="Equipo Volta"/></div>
                <div className={styles.itemHome}>
                    <VoltaBox className={styles.voltaBox}/>
                    <div><p>Kit Generador Solar Volta Box</p></div>
                    <p>$475.000</p>
                    <AddToCart id={"sMzEYsc6GneFFVJ5wR73"} size={size}/>
                </div>
            </div>
        </div>
    )
}