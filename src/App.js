import React, { useState, useEffect } from "react";
import axios from 'axios'
import * as yup from 'yup'


import './Form'
import Form from "./Form";
import formSchema from './formSchema'
import Order from "./Order";

const initialFormValues = {
  name: '',
  specIns: '',
  cheese: false,
  pepperoni: false,
  supreme: false,
  hawaiian: false,
}

const initialFormErrors = {
  name: '',
  specIns: '',
}

const initialOrders = []
const initialDisabled = true;


const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrder = () => {}

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrders([res.data, ...orders])
    })
    .catch(err => {
      console.log(err);
    })
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      specIns: formValues.specIns.trim(),

      cheese: ['cheese'].filter(cheese => formValues[cheese]),
      pepperoni: ['pepperoni'].filter(pepperoni => formValues[pepperoni]),
      supreme: ['supreme'].filter(supreme => formValues[supreme]),
      hawaiian: ['hawaiian'].filter(hawaiian => formValues[hawaiian])
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    getOrder()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <h1>Lambda Eats</h1>
      <p>Can't code on an empty stomach</p>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        orders.map(orders => {
          return (
            <Order key={orders.id} details={orders}/>
          )
        })
      }
    </div>
  );
};


export default App;
