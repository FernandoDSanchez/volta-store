import {useContext} from 'react'
import {ProductDetail} from "./ProductDetail"
import {GlobalContext} from "../App"

export const ProductList = () => { 
    const [items,increase,decrease,state] = useContext(GlobalContext)

        return (
                    <div>
                        {items.map(({id, name, description,price, img, category }) => 
                        <ProductDetail name={name} id={id} description={description} 
                        price={price} category={category}img={img} key={id} />
                        )}
                    </div>
                )
    
}