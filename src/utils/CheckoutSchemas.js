import * as Yup from 'yup';
import "yup-phone";
import valid from 'card-validator'; //import statement


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
    .email('Email invalido').required('*'),
    cell_phone: Yup.string()
    .phone("CO").required('*'),
    city: Yup.string()
        .required('*'),
    address: Yup.string()
        .required('*'),
});



export const CCSchema = Yup.object().shape({
    card_number: Yup.string()
        .trim('No puede contener espacios')
        .test('test-number', // this is used internally by yup
        '* El numero de tarjeta es invalido', //validation message
        value => valid.number(value).isPotentiallyValid) // return true false based on validation
        .required('*'),
    card_exp: Yup.string()
        .test('test-number', // this is used internally by yup
        '* Fecha invalida', //validation message
        value => valid.expirationDate(value).isPotentiallyValid)
        .required('*'),
    card_cvc: Yup.string().max(4)
        .test( // this is used internally by yup
        '* CVV invalido', //validation message
        value => valid.cvv(value,4).isPotentiallyValid)
        .required('*'),
});
