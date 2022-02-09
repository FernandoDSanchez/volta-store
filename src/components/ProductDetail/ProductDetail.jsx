import { ItemCounter } from "../ItemCounter/ItemCounter";
import {Link} from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import styles from "./ProductDetail.module.css";
export const ProductDetail = (props) => {
    
    const { name, description, price, img, category,id} = props
    let linkTo = `/Item/${id}`
    const size = styles.addButton
    return (
        <div>
            <Link to={linkTo}>
                <img src={require(`../../assets/img/${img}.png`)} alt="" width="100" height="100"/>
                <h1>{name}</h1>
                <h3>{category}</h3>
                <h2>{price}</h2>
                <p>{description}</p>
            </Link>
            <ItemCounter id={id} price={price}/>
            <AddToCart id={id} size={size}/>
        </div>
    )
}
