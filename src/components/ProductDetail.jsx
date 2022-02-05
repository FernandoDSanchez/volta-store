import { ItemCounter } from "./ItemCounter";

export const ProductDetail = (props) => {
    
    const { name, description, price, img, category,id} = props
    return ( 
        <div>
            {/* <img src={require(`../assets/img/${img}.png`)} alt="" width="100" height="100"/> */}
            <h1>{name}</h1>
            <h3>{category}</h3>
            <h2>{price}</h2>
            <p>{description}</p>
            <ItemCounter id={id}/>
            <button>Agregar al carrito</button>
        </div>
    )
}
