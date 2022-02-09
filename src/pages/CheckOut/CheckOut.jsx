import {FormCheckOut} from "../../components/FormCheckOut/FormCheckOut"
import { CartList } from "../../components/CartList/CartList"
import { NavBar } from "../../components/NavBar/NavBar"

export const CheckOut = () => {
    
    return (
        <div>
            <NavBar/>
            <FormCheckOut/>
            <CartList/>
        </div>
    )
}