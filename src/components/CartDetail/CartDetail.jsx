import { ItemCounter } from "../ItemCounter/ItemCounter";
import {Link} from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import styles from "./CartDetail.module.css";
export const CartDetail = (props) => {
    const { name, description, price, img, category,id,counterOn} = props
    let linkTo = `/Item/${id}`
    const size = styles.addButton
    
    return (
        <div className={styles.productCard}>
                <div className={styles.imgProduct}>
                    <Link to={linkTo}><img src={require(`../../assets/img/${img}.png`)} alt="" width="100" height="100"/></Link>
                </div>
                <div className={styles.productInfo}>
                    <div>
                        <Link to={linkTo}><h1>{name}</h1></Link>
                    </div>
                    <Link to={linkTo}><p>{description}</p></Link>
                    <ItemCounter id={id} price={price} counterOn={counterOn}/>
                </div>
        </div>
    )
}