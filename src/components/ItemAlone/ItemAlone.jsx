import { ItemCounter } from "../ItemCounter/ItemCounter";
import {Link} from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import styles from "./ItemAlone.module.css";

export const ItemAlone = (props) => {
    const { name, description, price, img,id,counterOn} = props
    let linkTo = `/Item/${id}`
    const size = styles.addButton
    
    return (
        <div className="flex justify-center h-full">
            <div className={"flex md:flex-row flex-col h-full w-full px-10 max-w-screen-xl items-center"}>
            
                    <div className={"w-1/2 flex flex-col justify-center items-center flex-none py-10"}>
                        <img src={img} alt="" className="w-3/4"/>
                    </div>
                    <div className={"w-1/2 flex flex-col justify-start items-center flex-1"}>
                        <div className={""}>
                            <div className={styles.infoRow}>
                                <div className={styles.infoColumn}>
                                    <Link to={linkTo}><h1 className="text-6xl">{name}</h1></Link>
                                    <h1 className="text-8xl">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                                </div>
                                <div>
                                    <ItemCounter id={id} price={price} counterOn={counterOn}/>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <Link to={linkTo}><p className="text-4xl">{description}</p></Link>
                            </div>
                            <AddToCart id={id} size={size}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}
