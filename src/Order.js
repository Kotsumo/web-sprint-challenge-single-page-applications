import React from 'react'

function Order({details}) {
    if(!details) {
        return <h3>Working on fetching orders...</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.name}</h2>
            <p>Size: {details.size}</p>
            <p>Toppings: {details.topping}</p>
            <p>Special Instructions: {details.specIns}</p>
        </div>
    )
}
    
export default Order