import { ProductDetail } from "../../components/ProductDetail/ProductDetail"
import {useParams} from "react-router-dom"
import {useContext} from "react"
import { GlobalContext } from "../../App"
export const Item = () => {
    const {itemId} = useParams()
    const [items, increase, decrease,state, itemsInCart, setItemsInCart] = useContext(GlobalContext)

    const itemDetailed = items.filter(item => item.id === itemId)
    return (
        <div>
            {itemDetailed.map(({id, name, description,price, img, category }) => 
                        <ProductDetail name={name} id={id} description={description} 
                        price={price} category={category}img={img} key={id}  />
                        )}
        </div>
    )
}