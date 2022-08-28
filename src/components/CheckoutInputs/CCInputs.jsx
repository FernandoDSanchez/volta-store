import { Formik, Form, Field } from 'formik';
import { CCSchema } from "../../utils/CheckoutSchemas";
import { firebaseMethods } from "../../utils/firebase";
import {useState} from "react";
import {Spinner} from "../../assets/img/Spinner"
import valid from 'card-validator';
export const CCInputs = ({setIsCC, setIsUser, cardToken,setCardToken}) => { 
    const connection = new firebaseMethods();
    const [chargingPayment, setChargingPayment] = useState(false);
    const [cardError, setCardError] = useState(false)
    let cardType = (cardValue) => {
        try {if (valid.number(cardValue)){
            return valid.number(cardValue).card.type
        } else { return " ";}} catch  {return " ";}}
        
    let month = (exp) => {
            try {if (valid.expirationDate(exp)){
                return valid.expirationDate(exp).month
            } else { return " ";}} catch  {return " ";}}
    let year = (exp) => {
        try {if (valid.expirationDate(exp)){
            return valid.expirationDate(exp).year
        } else { return " ";}} catch  {return " ";}}
    return (
    <Formik
        initialValues={{
        card_number: '',
        card_exp: '',
        card_cvc: '',
        }}
        validationSchema={CCSchema}
        onSubmit={async (values) => {
            setChargingPayment(true)
            const ccValues = {
                "card[number]": values.card_number,
                "card[exp_year]": year(values.card_exp),
                "card[exp_month]": month(values.card_exp),
                "card[cvc]": values.card_cvc,
            }
            console.log(ccValues)
        try {await connection.createToken(ccValues)
        .then((res) => {
            if (res.data.status){setCardToken(res.data.id)
            setIsCC(false);
            setIsUser(true);
            console.log(res.data);
            setChargingPayment(false)} else { 
                console.log(res.data);
                throw new Error("Ocurrio un erro comunicate con tu banco" )}
        });} catch (e) {
            setCardError(true)
            setChargingPayment(false)
            console.log(e);
        }
        }}
    >
    {({ errors, touched, values }) => (
        <Form className="h-full flex flex-col justify-between py-10 px-10 text-4xl">
            <h2 className="flex-none">Metodo de pago: {cardType(values.card_number)}</h2>
            <br></br>
            <p>{cardError?"No logramos agregar tu tarjet intenta con otra":null}</p>
            <div className="flex flex-col flex-1 h-full">
                <h2 className="text-4xl flex-none">Detalles de pago:</h2>
                
                <div className="flex flex-col flex-1 justify-between ">
                    <div className={"flex flex-col justify-start py-5"}>
                        <label htmlFor="card_number" className="text-3xl">Numero de tarjeta{errors.card_number && touched.card_number ? (
                            <p className="text-2xl"> {errors.card_number}</p>
                        ) : null}</label>
                        <Field name="card_number"  className="text-3xl text-black rounded-2xl px-5 py-5 w-96  " maxLength="19"/>
                    </div>
                    
                    <div className={"flex flex-col justify-start py-5"}>
                        <label htmlFor="card_exp" className="text-3xl">Fecha de expiración{errors.card_exp && touched.card_exp ? (
                            <p className="text-2xl"> {errors.card_exp}</p>
                        ) : null}</label>
                        <Field name="card_exp"  className="text-3xl text-black rounded-2xl px-5 py-5 w-40"  maxLength="6"/>
                    </div>
                    <div className={"flex flex-col justify-start py-5"}>
                        <label htmlFor="card_cvc" className="text-3xl">CVC{errors.card_cvc && touched.card_cvc ? (
                            <p className="text-2xl"> {errors.card_cvc}</p>
                        ) : null}</label>
                        <Field name="card_cvc"   className="text-3xl text-black rounded-2xl px-5 py-5 w-28" maxLength="4"/>
                        
                    </div>
                    <button className={"bg-green-500 btn-blue:hover text-3xl py-5 rounded-2xl"} type="submit">{chargingPayment?<><Spinner /><span>Procesando</span></>:"Pagar"}</button>
                </div>
            </div>
        </Form>
    )}
    </Formik>)
}