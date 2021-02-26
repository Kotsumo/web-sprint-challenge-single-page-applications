import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required, please fill out')
        .min(3, 'Name must be 3 characters long'),
    cheese: yup.boolean().oneOf([true, false]),
    pepperoni: yup.boolean().oneOf([true, false]),
    supreme: yup.boolean().oneOf([true, false]),
    hawaiian: yup.boolean().oneOf([true, false]),
    size: yup.string()
        .oneOf(['SMALL', 'MEDIUM', 'LARGE', 'XL'], 'you must select a size'),
    specIns: yup.string()
        .trim()
        .min(0)
})

export default formSchema