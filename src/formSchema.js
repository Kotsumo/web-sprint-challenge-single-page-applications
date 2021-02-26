import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required, please fill out')
        .min(3, 'Name must be 3 characters long'),
})

export default formSchema