import styles from "./FormCheckOut.module.css"
import { CheckoutInputs } from "../CheckoutInputs/CheckoutInputs"
export const FormCheckOut = ({isBilling, setIsBilling}) => {
    return (
        <div className={"w-3/4 bg-stone-800 min-h-max text-white rounded-3xl mt-6"}>
            <CheckoutInputs isBilling={isBilling} setIsBilling={setIsBilling}/>
        </div>
    )
}