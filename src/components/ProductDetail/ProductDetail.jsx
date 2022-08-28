import { ItemCounter } from "../ItemCounter/ItemCounter";
import {Link} from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import styles from "./ProductDetail.module.css";
export const ProductDetail = (props) => {
    const { name, description, price, img, category,id,counterOn} = props
    let linkTo = `/Item/${id}`
    const size = styles.addButton
    
    return (
        <div className={"flex flex-row py-5 px-5 w-full drop-shadow-2xl bg-slate-50 mb-20"}>
                <div className={styles.imgProduct}>
                    <Link to={linkTo}><img src={img} alt="" width="100" height="100"/></Link>
                </div>
                <div className={"flex flex-col items-stretch pl-5 w-full"}>
                    <ItemCounter id={id} price={price} counterOn={counterOn}/>
                    <h1 className={"text-4xl"}>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                    <Link to={linkTo}><h1 className={"text-4xl py-1"}>{name}</h1></Link>
                    <Link to={linkTo}><p  className={"text-xl line-clamp-3"}>{description}</p></Link>
                    <AddToCart id={id} size={size}/>
                </div>
                
        </div>
    )
}
