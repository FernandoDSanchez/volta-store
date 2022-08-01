import {GlobalContext} from "../../App"
import {useContext, useState, useEffect} from "react"
import styles from "./FormCheckOut.module.css"
import { firebaseMethods } from "../../utils/firebase"
import { CheckoutInputs } from "../CheckoutInputs/CheckoutInputs"
export const FormCheckOut = () => {
    const [items, increase, decrease,state, itemsInCart, setItemsInCart,sumTotal] = useContext(GlobalContext)
    const [cartList, setCartList] = useState({cart:[]})
    const [order , setOrder] = useState({cart: state.cart, total: sumTotal})
    const connection = new firebaseMethods()
    
    const creditInfo = {
        "value":"1000", //Obligatorio
        "doc_type":"CC", //Obligatorio
        "doc_number":"1233693829", //Obligatorio
        "name":"Fernando", //Obligatorio
        "last_name":"Sanchez", //Obligatorio
        "email":"fernandodendara@gmail.com", //Obligatorio
        "cell_phone":"3010000001", //Obligatorio
        "phone":"3005234321", //Obligatorio
        "card[number]": "5306917248598307",
        "card[exp_year]": "2025",
        "card[exp_month]": "12",
        "card[cvc]": "361",
        "currency": "COP",
    };
    const handleChange = (e) => {
        e.preventDefault()
        setOrder({...order, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(order)
        await connection.charge(creditInfo)
        .then((res) => {
            console.log(res)
        })
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
            <CheckoutInputs/>
        </div>
    )
}