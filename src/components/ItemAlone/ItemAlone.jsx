import { ItemCounter } from "../ItemCounter/ItemCounter";
import {Link} from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import styles from "./ItemAlone.module.css";
import { Wompi } from "../Wompi/Wompi";
export const ItemAlone = (props) => {
    const { name, description, price, img, category,id,counterOn} = props
    let linkTo = `/Item/${id}`
    const size = styles.addButton
    
    return (
        <div className={styles.productCard}>
                <Wompi/>
                <div className={styles.imgProduct}>
                    <Link to={linkTo}><img src={img} alt="" width="100" height="100"/></Link>
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.infoContainer}>
                        <div className={styles.infoRow}>
                            <div className={styles.infoColumn}>
                                <Link to={linkTo}><h1>{name}</h1></Link>
                                <h1>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                                <AddToCart id={id} size={size}/>
                            </div>
                            <div>
                                <ItemCounter id={id} price={price} counterOn={counterOn}/>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <Link to={linkTo}><p>{description}</p></Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}
