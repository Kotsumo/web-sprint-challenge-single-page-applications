import React from 'react'

export default function Form(props) {
    const {
        values,
        change,
        submit,
        disabled
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

                <button disabled={disabled}>submit</button>
                
                <label>Name
                    <input
                        name='name'
                        type='text'
                        onChange={onChange}
                        value={values.name}
                        placeholder='Enter your name...'
                        maxLength='10'
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

                <label>cheese
                    <input
                        type='checkbox'
                        name='cheese'
                        onChange={onChange}
                        checked={values.cheese}
                    />
                </label>

                <label>pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>

                <label>supreme
                    <input
                        type='checkbox'
                        name='supreme'
                        onChange={onChange}
                        checked={values.supreme}
                    />
                </label>

                <label>hawaiian
                    <input
                        type='checkbox'
                        name='hawaiian'
                        onChange={onChange}
                        checked={values.hawaiian}
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
            </div>
        </form>
    )
}