import {GlobalContext} from "../../App"
import {useContext, useState, useEffect} from "react"
import styles from "./FormCheckOut.module.css"
import { firebaseMethods } from "../../utils/firebase"

export const FormCheckOut = () => {
    const [items, increase, decrease,state, itemsInCart, setItemsInCart,sumTotal] = useContext(GlobalContext)
    const [cartList, setCartList] = useState({cart:[]})
    const [order , setOrder] = useState({cart: state.cart, total: sumTotal})
    const connection = new firebaseMethods()

    const handleChange = (e) => {
        e.preventDefault()
        setOrder({...order, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(order)
        await connection.addOrder(order)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        
    }
    useEffect(() => {
        setCartList({cart: state.cart.map(item => items.filter(product => product._id === item._id))})
        setItemsInCart(state.cart.length)
    },[state])

    const messageGenerator = () => {
        let txt = cartList.cart.map(item => item.map(item => item.name + " x " + state.cart.filter(product => product.id === item.id).map(e => e.qty)));
        txt = txt.toString().split(",").join("%0a");
        txt = "Hola soy "+ order.name + "%0aHe comprado:%0a" + txt + "%0aDireccion: " + order.address + "%0aTelefono: " + order.phone + "%0aTotal: " + sumTotal + "Pesos";
        txt = txt.split(" ").join("%20")
        return txt
    }
    let message = messageGenerator()
    const whatsappUrl =`https://api.whatsapp.com/send?phone=+573197511679&text=${message}`
    return (
        <div className={styles.formContainer}>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese su Nombre"
                value={order.name}
                onChange={(e) => handleChange(e)}/>
                <input
                type="text"
                id="address"
                name="address"
                placeholder="Ingrese su Direccón"
                value={order.address}
                onChange={(e) => handleChange(e)}/>
                <input
                type="text"
                id="address"
                name="phone"
                placeholder="Ingrese su Telefono"
                value={order.phone}
                onChange={(e) => handleChange(e)}/>
                <div className={styles.totals}>
                    <h3>Subtotal</h3>
                    <h3>Iva</h3>
                    <h3>Total</h3>
                </div>
                <button className={styles.payButton} type='submit' >Ordenar</button>
            </form>
            
        </div>
    )
}