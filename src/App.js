/* Imports */
import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

import Form from "./Form";
import formSchema from './formSchema'
import Order from "./Order";
/* Imports */


const initialOrders = []
const initialDisabled = true;

const initialFormValues = {
  name: '',
  size: '',
  specIns: '',
  topping: '',
  // cheese: false,
  // pepperoni: false,
  // supreme: false,
  // hawaiian: false,
}

const initialFormErrors = {
  name: '',
  size: '',
  specIns: '',
  topping: '',
}

// Page swapping
function Home(props) {
  const { push } = props.history;
  return <>
    <h1>Welcome</h1>
    <p>Order some pizza</p>
    <button onClick={() => push("/pizza")}>Order</button>
  </>
}
function Pizza(props) {
  return <>
    <h1>Lambda Eats</h1>
      <p>Can't code on an empty stomach</p>
  
  </>
}
function About(props) {
  return <>
    <h1>About</h1>
    <p>Created by: David Ellis</p>
  </>
}

const App = () => {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)  
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrder = () => {}

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      console.log(res.data)
      setOrders([...orders, res.data])
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
      size: formValues.size,
      topping: formValues.topping,
      // cheese: ['cheese'].filter(cheese => formValues[cheese]),
      // pepperoni: ['pepperoni'].filter(pepperoni => formValues[pepperoni]),
      // supreme: ['supreme'].filter(supreme => formValues[supreme]),
      // hawaiian: ['hawaiian'].filter(hawaiian => formValues[hawaiian])
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

  {/*Page Routes*/}
  <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/pizza">Order</Link>
    <Link to="/about">About</Link>

    <Route exact path='/' component={Home} />
    <Route path='/pizza' component={Pizza} />
    <Route path='/about' component={About} />
  
    <Route path='/pizza'>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </Route>
      
      {
        orders.map(orders => {
          return (
            <Order key={orders.id} details={orders}/>
          )
        })
      }

  </BrowserRouter>

    </div>
  );
};


export default App;
