import {useContext} from 'react'
import {ProductDetail} from "./ProductDetail"
import {GlobalContext} from "../App"
import { useParams } from 'react-router-dom'

export const ProductList = () => { 
    const [items,increase,decrease,state] = useContext(GlobalContext)
    let {category} = useParams();
    const filtered = items.filter(item => item.category === category)
            return (
                    <div>
                        {filtered.map(({id, name, description,price, img, category }) => 
                        <ProductDetail name={name} id={id} description={description} 
                        price={price} category={category}img={img} key={id}  />
                        )}
                    </div>
                )
}