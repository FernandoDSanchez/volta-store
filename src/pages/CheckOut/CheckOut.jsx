import {FormCheckOut} from "../../components/FormCheckOut/FormCheckOut"
import { CartList } from "../../components/CartList/CartList"
import { NavBar } from "../../components/NavBar/NavBar"
import styles from "./CheckOut.module.css"
import { Successful } from "../../components/CheckoutInputs/Successful"
import { useState } from "react"

export const CheckOut = () => {
    let navStyle = false
    let counterOn = true
    const [isBilling, setIsBilling] = useState(false);
    return (
        
        <>
            { isBilling ? <Successful /> : <div className={styles.CheckOut}>
                <NavBar navStyle={navStyle}/>
            
                <div className={styles.checkContainer}>
                    <div>
                        <h1>Tus Compras</h1>
                        <CartList counterOn={counterOn}/>
                    </div>
                    <div className={styles.form}><FormCheckOut isBilling={isBilling} setIsBilling={setIsBilling} /></div>
                </div>
            </div>}
        </>
    )
}