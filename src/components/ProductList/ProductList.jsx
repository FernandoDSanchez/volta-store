import {useContext} from 'react'
import {ProductDetail} from "../ProductDetail/ProductDetail"
import {GlobalContext} from "../../App"
import { useParams,Link } from 'react-router-dom'
import styles from "./ProductList.module.css"

export const ProductList = ({counterOn}) => { 
    const [items, increase, decrease,state, itemsInCart, setItemsInCart] = useContext(GlobalContext)
    let {category} = useParams();
    let categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
    const filtered = items.filter(item => item.category === category)
            return (
                    <div>
                        <div className={styles.categoryTitle}>
                            <h1>{categoryTitle}</h1>
                        </div>
                        <div className={styles.listContainer}>
                            <div className={styles.listCategory}>
                                <Link to="/Category/baterias">
                                <li className={styles.listHover}>Baterias</li>
                                </Link>
                                <Link to="/Category/kits">
                                <li className={styles.listHover}>Kits</li>
                                </Link>
                                <Link to="/Category/paneles">
                                <li className={styles.listHover}>Paneles</li>
                                </Link>
                            </div>
                            <div className={styles.productsContainer}>
                                <div className={styles.products}>
                                    {filtered.map(({id, name, description,price, img, category }) =>
                                    <ProductDetail name={name} id={id} description={description}
                                    price={price} category={category}img={img} key={id}  counterOn={counterOn}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
}