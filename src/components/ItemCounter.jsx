import {GlobalContext} from "../App"
import {useContext} from "react"

export const ItemCounter = (props) => {
    const {id} = props
    const [items,increase,decrease,state] = useContext(GlobalContext)
    return(
        <div>
            <button onClick={()=> increase(id)}>mas</button>
            <p>0</p>
            <button onClick={()=> decrease(id)}>menos</button>
        </div>
    )
}