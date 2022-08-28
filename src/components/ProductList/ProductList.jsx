import {useContext} from 'react'
import {ProductDetail} from "../ProductDetail/ProductDetail"
import {GlobalContext} from "../../App"
import { useParams,Link } from 'react-router-dom'
import styles from "./ProductList.module.css"

export const ProductList = ({counterOn}) => { 
    const [items] = useContext(GlobalContext)
    let {category} = useParams();
    let categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
    const filtered = items.filter(item => item.category === category)
            return (
                    <div className={"w-full max-w-screen-xl"}>
                        <div className={styles.categoryTitle}>
                            <h1>{categoryTitle}</h1>
                        </div>
                            <div className={"px-1 py-1 flex md:flex-row flex-col"}>
                                <div className={"pl-2 py-1 flex flex-wrap md:flex-nowrap md:flex-col"}>
                                    <Link to="/Category/baterias" >
                                    <li className={"text-4xl hover:opacity-60 py-10 pr-5"}>Baterias </li>
                                    </Link>
                                    <Link to="/Category/kits" className={"text-xl"}>
                                    <li className={"text-4xl hover:opacity-60 py-10 pr-5"} >Kits </li>
                                    </Link>
                                    <Link to="/Category/paneles" className={"text-xl"}>
                                    <li className={"text-4xl hover:opacity-60 py-10 pr-5"}>Paneles </li>
                                    </Link>
                                    <Link to="/Category/controladores" className={"text-xl"}>
                                    <li className={"text-4xl hover:opacity-60 py-10 pr-5"}>Controladores </li>
                                    </Link>
                                    <Link to="/Category/inversores" className={"text-xl"}>
                                    <li className={"text-4xl hover:opacity-60 py-10 pr-5"}>Inversores </li>
                                    </Link>
                                    <Link to="/Category/accesorios" className={"text-xl"}>
                                    <li className={"text-4xl hover:opacity-60 py-10 pr-5"}>Accesorios </li>
                                    </Link>
                                    <Link to="/Category/luminarias" className={"text-xl"}>
                                    <li className={"text-4xl hover:opacity-60 py-10 pr-5"}>Luminarias </li>
                                    </Link>
                            </div>
                            <div className={"py-10 px-20"}>
                                <div className={styles.products}>
                                    {filtered.map(({_id, name, description,price, image, category }) =>
                                    <ProductDetail name={name} id={_id} description={description}
                                    price={price} category={category}img={image} key={_id}  counterOn={counterOn}/>
                                    )}
                                </div>
                            </div>
                        </div> 
                        
                    </div>
                )
}