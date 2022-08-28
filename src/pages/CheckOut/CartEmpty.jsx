import {Sad} from "../../assets/img/Sad"

export const CartEmpty = () => { 
    return(
        <div className="w-full h-full flex flex-col justify-center items-center ">
            <Sad />
            <h1 className="text-9xl">Tu carrito está vació </h1>
        </div>
)}