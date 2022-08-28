import { Formik, Form, Field } from 'formik';
import { UserSchema } from "../../utils/CheckoutSchemas"
import { firebaseMethods } from "../../utils/firebase"
import { useContext,useEffect,useState } from 'react';
import {GlobalContext} from "../../App";
import axios from 'axios';
import {Spinner} from "../../assets/img/Spinner"
export const UserInputs = ({setIsUser, cardToken, setIsBilling}) => {
    const [items, , ,state, , ,sumTotal] = useContext(GlobalContext)
    const connection = new firebaseMethods();
    const [chargingPayment, setChargingPayment] = useState(false);
    const [cartList, setCartList] = useState({})
    const [ip, setIP] = useState('');
    const [paymentError, setPaymentError] = useState(" ")
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  const getTypes = async () => {
    return await connection.getTypeDocuments()
    .then(data => {
        console.log(data)
        return data})
  }

  
  const updateCart = () => {let filterProduct = state.cart.map((item) => items.filter((product) => product._id === item._id))
    filterProduct.forEach((product) =>{
        console.log(state.cart.filter((i) => i._id === product[0]._id)[0].qty)
        product[0].qty = state.cart.filter((i) => i._id === product[0]._id)[0].qty})
    ;
    console.log(filterProduct);
    return filterProduct
}
  useEffect(() => {
    setCartList(updateCart());

     // eslint-disable-next-line react-hooks/exhaustive-deps
},[state])
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()
    //passing getTypes method to the lifecycle method
    getTypes();
  }, [])

    return (<Formik
        initialValues={{
        doc_type: '',
        doc_number: '',
        name: '',
        last_name: '',
        email: '',
        cell_phone: '',
        city: '',
        address: '',
        currency: 'COP',
        ip: ip,
        }}
        validationSchema={UserSchema}
        onSubmit={async (values) => {
            setChargingPayment(true)
            values.token_card = cardToken;
            values.default = true;
        try {await connection.createCustomer(values)
            .then((res) => {
                if (res.data.status) {values.value = sumTotal;
                values.customer_id = res.data.data.customerId;
                try {connection.createCharge(values)
                .then((res) => {
                    if (res.data.status){const paymentDetails = res.data
                    connection.addOrder(cartList, paymentDetails)
                    console.log(paymentDetails);
                    setIsUser(false);
                    setIsBilling(true);
                    setChargingPayment(false)} else {throw new Error("El pago no ha sido procesado comunicate con tu banco")}
                })} catch (err) {
                    setChargingPayment(false)
                    setPaymentError(err)}} else {
                    throw new Error("Hay un problema con el pago intentalo mas tarde")
                }
            })} catch (err) {
                setChargingPayment(false)
                setPaymentError(err)
                console.log(err)
            }
        }}
    >
    {({ errors, touched }) => (
        <div>
            <Form className="h-full flex flex-col justify-between py-10 px-10 text-4xl">
            {paymentError.length>0?<h1>{paymentError}</h1>: null}
            <h1>Datos de Facturación</h1>
                <div className="flex flex-col justify-start mb-10" >
                    <label className="text-2xl" htmlFor="doc_type">Tipo de documento {errors.doc_type && touched.doc_type ? (
                        <span className="text-rose-600">{errors.doc_type}</span>
                    ) : null}</label>
                    <Field name="doc_type" className="text-3xl text-black rounded-2xl px-5 py-5 w-96  "/>
                </div>
                <div className="flex flex-col justify-start mb-10">
                    <label className="text-2xl" htmlFor="doc_number">Documento {errors.doc_number && touched.doc_number ? (
                        <span className="text-rose-600">{errors.doc_number}</span>
                    ) : null}</label>
                    <Field name="doc_number" className="text-3xl text-black rounded-2xl px-5 py-5 w-96  "/>
                </div>

                <div className="flex flex-col justify-start mb-10">
                    <label className="text-2xl" htmlFor="name">Nombre {errors.name && touched.name ? (
                        <span className="text-rose-600">{errors.name}</span>
                    ) : null}</label>
                    <Field name="name" className="text-3xl text-black rounded-2xl px-5 py-5 w-96  "/>
                </div>

                <div className="flex flex-col justify-start mb-10">
                    <label className="text-2xl" htmlFor="last_name">Apellido {errors.last_name && touched.last_name ? (
                        <span className="text-rose-600">{errors.last_name}</span>
                    ) : null}</label>
                    <Field name="last_name" className="text-3xl text-black rounded-2xl px-5 py-5 w-96  "/>
                </div>

                <div className="flex flex-col justify-start mb-10">
                    <label className="text-2xl" htmlFor="email">Email {errors.email && touched.email ? <span className="text-rose-600">{errors.email}</span> : null}</label>
                    <Field name="email" type="email" className="text-3xl text-black rounded-2xl px-5 py-5 w-96  "/>
                </div>

                <div className="flex flex-col justify-start mb-10">
                    <label className="text-2xl" htmlFor="cell_phone">Telefono Celular {errors.cell_phone && touched.cell_phone ? (
                        <span className="text-rose-600">{errors.cell_phone}</span>
                    ) : null}</label>
                    <Field name="cell_phone" className="text-3xl text-black rounded-2xl px-5 py-5 w-96  "/>
                </div>
                
                <div className="flex flex-col justify-start mb-10">
                    <label className="text-2xl" htmlFor="city">{errors.city && touched.city ? (
                        <span className="text-rose-600">{errors.city}</span>
                    ) : null}Ciudad</label>
                    <Field name="city" className="text-3xl text-black rounded-2xl px-5 py-5 w-96  "/>
                </div>
                
                <div className="flex flex-col justify-start mb-10">
                    <label className="text-2xl" htmlFor="address">{errors.address && touched.address ? (
                        <span className="text-rose-600">{errors.address}</span>
                    ) : null}Direccion</label>
                    <Field name="address" className="text-3xl text-black rounded-2xl px-5 py-5 w-96  "/>
                </div>
                
                <button className={"bg-green-500 btn-blue:hover  py-5 rounded-2xl mt-10"} type="submit">{chargingPayment ? <><Spinner /><span className="text-4xl">Procesando</span></> : <span className="text-4xl">Pagar</span>}</button>
            </Form>
        </div>
    )}
    </Formik>)
}