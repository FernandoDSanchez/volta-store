import { Formik, Form, Field } from 'formik';
import { UserSchema } from "../../utils/CheckoutSchemas"
import { firebaseMethods } from "../../utils/firebase"

export const UserInputs = () => {

    const connection = new firebaseMethods();

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
        }}
        validationSchema={UserSchema}
        onSubmit={async (values) => {
            console.log(values)
        await connection.charge(values)
            .then((res) => {
                console.log(res)
            })
        console.log(values);
        }}
    >
    {({ errors, touched }) => (
        <Form>
            <label htmlFor="doc_type">Tipo de documento{errors.doc_type && touched.doc_type ? (
                <div>{errors.doc_type}</div>
            ) : null}</label>
            <Field name="doc_type" />
            
            <label htmlFor="doc_number">Documento{errors.doc_number && touched.doc_number ? (
                <div>{errors.doc_number}</div>
            ) : null}</label>
            <Field name="doc_number" />
            
            <label htmlFor="name">Nombre{errors.name && touched.name ? (
                <div>{errors.name}</div>
            ) : null}</label>
            <Field name="name" />
            
            <label htmlFor="last_name">Apellido{errors.last_name && touched.last_name ? (
                <div>{errors.last_name}</div>
            ) : null}</label>
            <Field name="last_name" />
            
            <label htmlFor="email">Email{errors.email && touched.email ? <div>{errors.email}</div> : null}</label>
            <Field name="email" type="email" />
            
            <label htmlFor="cell_phone">Telefono Celular</label>
            <Field name="cell_phone" />
            {errors.cell_phone && touched.cell_phone ? (
                <div>{errors.cell_phone}</div>
            ) : null}
            <label htmlFor="city">Ciudad</label>
            <Field name="city" />
            {errors.city && touched.city ? (
                <div>{errors.city}</div>
            ) : null}
            <label htmlFor="address">Direccion</label>
            <Field name="address" />
            {errors.address && touched.address ? (
                <div>{errors.address}</div>
            ) : null}
            <button type="submit">Submit</button>
        </Form>
    )}
    </Formik>)
}