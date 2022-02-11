import {GlobalContext} from "../../App"
import {useContext, useState, useEffect} from "react"
import styles from "./FormCheckOut.module.css"
import { Wompi } from "../Wompi/Wompi"

export const FormCheckOut = () => {
    const [items, increase, decrease,state, itemsInCart, setItemsInCart,sumTotal] = useContext(GlobalContext)
    const [cartList, setCartList] = useState({cart:[]})
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    useEffect(() => {
        setCartList({cart: state.cart.map(item => items.filter(product => product.id === item.id))})
        setItemsInCart(state.cart.length)
    },[state])

    const messageGenerator = () => {
        let txt = cartList.cart.map(item => item.map(item => item.name + " x " + state.cart.filter(product => product.id === item.id).map(e => e.qty)));
        txt = txt.toString().split(",").join("%0a");
        txt = "Hola soy "+ name + "%0aHe comprado:%0a" + txt + "%0aDireccion: " + address + "%0aTelefono: " + phone + "%0aTotal: " + sumTotal + "Pesos";
        txt = txt.split(" ").join("%20")
        return txt
    }
    let message = messageGenerator()
    const whatsappUrl =`https://api.whatsapp.com/send?phone=+573197511679&text=${message}`
    return (
        <div className={styles.formContainer}>
            <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Ingrese su Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <input 
            type="text"
            id="address"
            name="user_text"
            placeholder="Ingrese su Direccón"
            value={address}
            onChange={(e) => setAddress(e.target.value)}/>
            <input
            type="text"
            id="address"
            name="user_text"
            placeholder="Ingrese su Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>

            <div className={styles.totals}>
                <h3>Subtotal</h3>
                <h3>Iva</h3>
                <h3>Total</h3>
            </div>
            <a href={whatsappUrl}><button className={styles.payButton}>Pagar con Wompi</button></a>
            
        </div>
    )
}