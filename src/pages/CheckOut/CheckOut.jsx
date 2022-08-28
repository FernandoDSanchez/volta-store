import {FormCheckOut} from "../../components/FormCheckOut/FormCheckOut"
import { CartList } from "../../components/CartList/CartList"
import { NavBar } from "../../components/NavBar/NavBar"
import styles from "./CheckOut.module.css"
import { Successful } from "../../components/CheckoutInputs/Successful"
import { useState } from "react"
import {CartEmpty} from "./CartEmpty"
export const CheckOut = ({cartEmpty}) => {
    let navStyle = false
    let counterOn = true
    const [isBilling, setIsBilling] = useState(false);
    return (
        
        <>
            { isBilling ? <Successful /> : 
            <div className={"w-full h-full flex flex-col justify-between"}>
                <NavBar navStyle={navStyle} className={"flex-none"}/>
            
                <main className={"flex-1 flex justify-center w-full"}>

                        {cartEmpty > 0?
                        <div className={"flex flex-col w-full max-w-screen-xl h-full justify-start md:justify-between md:flex-row"}>
                            <div className={"md:w-1/2 w-full py-10 px-10"}>
                                <h1 className={"text-6xl"}>Tus Compras:</h1>
                                <CartList counterOn={counterOn} />
                            </div>
                            <div className={"md:w-1/2 w-full flex justify-center items-start"}><FormCheckOut isBilling={isBilling} setIsBilling={setIsBilling} /></div>
                        </div>:<CartEmpty/>}
                </main>
                <footer className={"flex-none"}>Pago seguro</footer>
            </div>}
        </>
    )
}