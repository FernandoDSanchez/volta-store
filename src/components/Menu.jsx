import { Link } from "react-router-dom"
export const Menu = () => {
    return (
        <div>
            <button></button>
            <Link to="/">
                    <div>
                        <img src={require(`../assets/img/logo.svg`)} alt="Logo Volta" />
                    </div>
            </Link>
            <ul>
                <Link to="/Category/baterias">
                    <li>Baterias</li>
                </Link>
                <Link to="/Category/kits">
                    <li>Kits</li>
                </Link>
                <Link to="/Category/paneles">
                    <li>Paneles</li>
                </Link>
                <li>Contacto
                    <div>
                        <h3>correo@gmai.com</h3>
                        <h3>Tlf 000000000</h3>
                        <h3>Whatsapp</h3>
                    </div>
                </li>
            </ul>
        </div>
    )
}