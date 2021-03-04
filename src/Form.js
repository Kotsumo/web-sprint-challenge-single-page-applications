import React from 'react'

export default function Form(props) {
    const {
        values,
        change,
        submit,
        disabled,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const ValueToUse = type === 'checkbox' ? checked : value
        change(name, ValueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Pizza Order</h2>
                
                <label>Name
                    <input
                        name='name'
                        type='text'
                        onChange={onChange}
                        value={values.name}
                        placeholder='Enter your name...'
                        maxLength='15'
                    />
                </label>

                <label> Size
                    <select value={values.size} name='size' onChange={onChange}>
                        <option value=''>--- Pizza size.. ---</option>
                        <option value='SMALL'>Small</option>
                        <option value='MEDIUM'>Medium</option>
                        <option value='LARGE'>Large</option>
                        <option value='XL'>X-Large</option>
                    </select>
                </label>
                {/* Realized way too late that radio buttons would have worked better.
                Could have more easily made only one topping choice available.
                Will fix in future updates.*/}
                {/* <label>cheese
                    <input
                        onChange={onChange}
                        checked={values.cheese}
                        name='cheese'
                        type='checkbox'
                    />
                </label>

                <label>pepperoni
                    <input
                        onChange={onChange}
                        checked={values.pepperoni}                     
                        name='pepperoni'
                        type='checkbox'
                    />
                </label>

                <label>supreme
                    <input
                        onChange={onChange}
                        checked={values.supreme}
                        name='supreme'
                        type='checkbox'
                    />
                </label>

                <label>hawaiian
                    <input
                        onChange={onChange}
                        checked={values.hawaiian}
                        name='hawaiian'
                        type='checkbox'
                    />
                </label> */}

                <label>Cheese
                    <input 
                        value='cheese'
                        onChange={onChange}
                        checked={values.topping === 'cheese'}
                        name='topping'
                        type='radio'
                    />
                </label>

                <label>Pepperoni
                    <input 
                        value='pepperoni'
                        onChange={onChange}
                        checked={values.topping === 'pepperoni'}
                        name='topping'
                        type='radio'
                    />
                </label>
                
                <label>Supreme
                    <input 
                        value='supreme'
                        onChange={onChange}
                        checked={values.topping === 'supreme'}
                        name='topping'
                        type='radio'
                    />
                </label>
                
                <label>Hawaiian
                    <input 
                        value='hawaiian'
                        onChange={onChange}
                        checked={values.topping === 'hawaiian'}
                        name='topping'
                        type='radio'
                    />
                </label>

                <label>SpecialInstruction
                    <input
                        name='specIns'
                        type='text'
                        onChange={onChange}
                        value={values.specIns}
                        placeholder='Enter any special instructions'
                        maxLength='50'
                    />
                </label>
                <button id='submitBtn' disabled={disabled}>order</button>
            </div>
        </form>
    )
}