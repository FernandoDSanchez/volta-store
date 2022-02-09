import { ProductList } from "../../components/ProductList/ProductList"
import { NavBar } from "../../components/NavBar/NavBar"
export const Category= () => {
    let navStyle = true
    return (
        <>
            <NavBar navStyle={navStyle}/>
            <ProductList/>
        </>
    )
}