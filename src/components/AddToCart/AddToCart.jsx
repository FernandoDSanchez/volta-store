import { useContext } from "react"
import {GlobalContext} from "../../App"
// background-color: #FFBE53;
//     width: 149px;
//     height: 33px;
//     border-style: none;
//     font-size: 1.2rem;

export const AddToCart = (props) => {
    const {id, size} = props
    const [, increase, , , , ,] = useContext(GlobalContext)
    return (
        <button className={"bg-[#FFBE53] w-[149px] h-[33px] text-xl self-end"}onClick={()=> increase(id)}>Agregar al carrito</button>
    )
}