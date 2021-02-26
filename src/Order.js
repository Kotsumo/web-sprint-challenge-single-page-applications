import React from 'react'

function Order({details}) {
    if(!details) {
        return <h3>Working on fetching orders...</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.name}</h2>
            
        </div>
    )
}
    
export default Order