import { Formik, Form, Field } from 'formik';
import { CCSchema } from "../../utils/CheckoutSchemas";
import { firebaseMethods } from "../../utils/firebase";
import {useState} from "react";
import {Spinner} from "../../assets/img/Spinner"
import valid from 'card-validator';
export const CCInputs = ({setIsCC, setIsUser, cardToken,setCardToken}) => { 
    const connection = new firebaseMethods();
    const [chargingPayment, setChargingPayment] = useState(false);
    let cardType = (cardValue) => {
        try {if (valid.number(cardValue)){
            return valid.number(cardValue).card.type
        } else { return " ";}} catch  {return " ";}}
        
    
    return (
    <Formik
        initialValues={{
        card_number: " ",
        card_exp_year: '',
        card_exp_month: '',
        card_cvc: '',
        }}
        validationSchema={CCSchema}
        onSubmit={async (values) => {
            setChargingPayment(true)
            const ccValues = {
                "card[number]": values.card_number,
                "card[exp_year]": values.card_exp_year,
                "card[exp_month]": values.card_exp_month,
                "card[cvc]": values.card_cvc,
            }
        await connection.createToken(ccValues)
        .then((res) => {
            setCardToken(res.data.id)
            setIsCC(false);
            setIsUser(true);
            console.log(res.data);
            setChargingPayment(false)
        });
        }}
    >
    {({ errors, touched, values }) => (
        <Form>
            <h2>Card Company: {cardType(values.card_number)}</h2>
            <label htmlFor="card_number">Numero de tarjeta{errors.card_number && touched.card_number ? (
                <div>{errors.card_number}</div>
            ) : null}</label>
            <Field name="card_number" />
            
            <label htmlFor="card_exp_year">Año de expiracion{errors.card_exp_year && touched.card_exp_year ? (
                <div>{errors.card_exp_year}</div>
            ) : null}</label>
            <Field name="card_exp_year" />

            <label htmlFor="card_exp_month">Mes de expiracion{errors.card_exp_month && touched.card_exp_month ? (
                <div>{errors.card_exp_month}</div>
            ) : null}</label>
            <Field name="card_exp_month" />

            <label htmlFor="card_cvc">CVC{errors.card_cvc && touched.card_cvc ? (
                <div>{errors.card_cvc}</div>
            ) : null}</label>
            <Field name="card_cvc" />
            <button className={"btn btn-blue btn-blue:hover"} type="submit">{chargingPayment?<><Spinner /><span>Procesando</span></>:null}Pagar</button>
        </Form>
    )}
    </Formik>)
}