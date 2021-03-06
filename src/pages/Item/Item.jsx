import { ItemAlone } from "../../components/ItemAlone/ItemAlone"
import {useParams} from "react-router-dom"
import {useContext} from "react"
import { GlobalContext } from "../../App"
import { NavBar } from "../../components/NavBar/NavBar"
export const Item = () => {
    const {itemId} = useParams()
    const [items, increase, decrease,state, itemsInCart, setItemsInCart] = useContext(GlobalContext);
    const itemDetailed = items.filter(item => item.id === itemId);
    let navStyle = true;
    let counterOn = false;
    return (
        <div>
            <div>
                <NavBar navStyle={navStyle}/>
                {itemDetailed.map(({id, name, description,price, img, category }) =>
                            <ItemAlone name={name} id={id} description={description}
                            price={price} category={category}img={img} key={id}  counterOn={counterOn}/>
                            )}
            </div>
        </div>
    )
}