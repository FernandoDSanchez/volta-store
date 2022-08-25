import styles from "./FormCheckOut.module.css"
import { CheckoutInputs } from "../CheckoutInputs/CheckoutInputs"
export const FormCheckOut = ({isBilling, setIsBilling}) => {
    return (
        <div className={styles.formContainer}>
            <CheckoutInputs isBilling={isBilling} setIsBilling={setIsBilling}/>
        </div>
    )
}