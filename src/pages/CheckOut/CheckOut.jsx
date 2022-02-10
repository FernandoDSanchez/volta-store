import {FormCheckOut} from "../../components/FormCheckOut/FormCheckOut"
import { CartList } from "../../components/CartList/CartList"
import { NavBar } from "../../components/NavBar/NavBar"
import styles from "./CheckOut.module.css"
export const CheckOut = () => {
    let navStyle = false
    let counterOn = true
    return (
        <div className={styles.CheckOut}>
            <NavBar navStyle={navStyle}/>
            
            <div className={styles.checkContainer}>
                <div>
                    <h1>Tus Compras</h1>
                    <CartList counterOn={counterOn}/>
                </div>
                <div className={styles.form}><FormCheckOut/></div>
            </div>
        </div>
    )
}