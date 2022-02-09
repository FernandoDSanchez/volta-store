import {FormCheckOut} from "../../components/FormCheckOut"
import { CartList } from "../../components/CartList"
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