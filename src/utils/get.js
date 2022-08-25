const PRODUCT_URL = "https://voltabackend.herokuapp.com/api/product"
export const get = async () => {
    let response = await fetch(PRODUCT_URL)
    let data = await response.json()
    return data
}




