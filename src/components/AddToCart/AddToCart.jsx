import { useContext } from "react"
import {GlobalContext} from "../../App"


export const AddToCart = (props) => {
    const {id, size} = props
    const [items, increase, decrease,state, itemsInCart, setItemsInCart,sumTotal] = useContext(GlobalContext)
    return (
        <button className={size}onClick={()=> increase(id)}>Agregar al carrito</button>
    )
}