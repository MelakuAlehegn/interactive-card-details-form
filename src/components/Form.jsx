import React, { useState } from 'react'


function Form(props) {
    return (
        <form className='form'>
            <div className='form-content'>
                <div className='number-inputs'>
                    <label htmlFor='holder-name'>Cardholder Name</label>
                    <input
                        type='text'
                        id='holder-name'
                        placeholder='e.g Jane Appleseed'
                        onChange={props.onInputChange}
                        name='holderName'
                    ></input>
                    <p className='error-text'></p>
                </div>
                <div className='number-inputs'>
                    <label htmlFor='card-number'>Card Number</label>
                    <input
                        type='text'
                        id='card-number'
                        placeholder='e.g. 1234 5678 9123 0000'
                        name='cardNumber'
                        onChange={props.onInputChange}
                    ></input>
                    <p className='error-text'></p>
                </div>
                <div className='date'>
                    <div className='exp-day'>
                        <label htmlFor='exp-day'>Exp. Date (MM/YY)</label>
                        <div className='ii'>
                            <input
                                type='text'
                                id='exp-day'
                                placeholder='MM'
                                name='month'
                                onChange={props.onInputChange}
                            ></input>
                            <input
                                type='text'
                                id='exp-day-2'
                                placeholder='YY'
                                name='year'
                                onChange={props.onInputChange}
                            ></input>
                        </div>
                    </div>
                    <div className='cvc-form'>
                        <label htmlFor='cvc-label'>CVC</label>
                        <input
                            type='text'
                            id='cvc-label'
                            placeholder='e.g. 123'
                            name='cvc'
                            onChange={props.onInputChange}
                        ></input>
                        <p className='error-text'></p>
                    </div>
                </div>
                <button type='submit' className='submit'>Confirm</button>
            </div>
        </form>
    )
}

export default Form