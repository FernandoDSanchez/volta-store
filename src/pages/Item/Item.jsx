import { ItemAlone } from "../../components/ItemAlone/ItemAlone"
import {useParams} from "react-router-dom"
import {useContext} from "react"
import { GlobalContext } from "../../App"
import { NavBar } from "../../components/NavBar/NavBar"
export const Item = () => {
    const {itemId} = useParams()
    const [items] = useContext(GlobalContext);
    const itemDetailed = items.filter(item => item._id === itemId);
    let navStyle = true;
    let counterOn = false;
    return (
        <>
                <NavBar navStyle={navStyle}/>
                {itemDetailed.map(({_id, name, description,price, image, category }) =>
                            <ItemAlone name={name} id={_id} description={description}
                            price={price} category={category}img={image} key={_id}  counterOn={counterOn}/>
                            )}
            
        </>
    )
}