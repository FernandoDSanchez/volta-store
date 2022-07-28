import { ItemCounter } from "../ItemCounter/ItemCounter";
import {Link} from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import styles from "./ProductDetail.module.css";
export const ProductDetail = (props) => {
    const { name, description, price, img, category,id,counterOn} = props
    let linkTo = `/Item/${id}`
    const size = styles.addButton
    
    return (
        <div className={styles.productCard}>
                <div className={styles.imgProduct}>
                    <Link to={linkTo}><img src={img} alt="" width="100" height="100"/></Link>
                </div>
                <div className={styles.productInfo}>
                    <Link to={linkTo}><h1>{name}</h1></Link>
                    <h3>{category}</h3>
                    <h1>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                    <Link to={linkTo}><p>{description}</p></Link>
                    <ItemCounter id={id} price={price} counterOn={counterOn}/>
                    <AddToCart id={id} size={size}/>
                </div>
        </div>
    )
}
