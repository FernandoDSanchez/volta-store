import * as Yup from 'yup';
import "yup-phone";



export const UserSchema = Yup.object().shape({
    doc_type: Yup.string()
        .required('*'),
    doc_number: Yup.number()
        .required('*'),
    name: Yup.string()
        .required('*'),
    last_name: Yup.string()
        .required('*'),
    email: Yup.string()
    .email('Invalid email').required('*'),
    cell_phone: Yup.string()
    .phone("CO").required('*'),
    city: Yup.string()
        .required('*'),
    address: Yup.string()
        .required('*'),
});



export const CCSchema = Yup.object().shape({
    card_number: Yup.string()
        .required('*'),
    card_exp_year: Yup.number()
        .required('*'),
    card_exp_month: Yup.number()
        .required('*'),
    card_cvc: Yup.number()
        .required('*'),
});
