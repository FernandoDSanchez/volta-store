import { Formik, Form, Field } from 'formik';
import { CCSchema } from "../../utils/CheckoutSchemas"
import { firebaseMethods } from "../../utils/firebase"

export const CCInputs = () => { 
    const connection = new firebaseMethods();

    return (
    <Formik
        initialValues={{
        card_number: '',
        card_exp_year: '',
        card_exp_month: '',
        card_cvc: '',
        }}
        validationSchema={CCSchema}
        onSubmit={async (values) => {
            const ccValues = {
                "card[number]": values.card_number,
                "card[exp_year]": values.card_exp_year,
                "card[exp_month]": values.card_exp_month,
                "card[cvc]": values.card_cvc,
            }
        console.log(ccValues)
        await connection.createToken(ccValues)
        .then((res) => {
            console.log(res)
        });
        }}
    >
    {({ errors, touched }) => (
        <Form>
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
            <button type="submit">Submit</button>
        </Form>
    )}
    </Formik>)
}