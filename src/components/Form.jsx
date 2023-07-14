import React from 'react'


function Form() {
    return (
        <form className='form'>
            <div className='form-content'>
                <div className='number-inputs'>
                    <label htmlFor='holder-name'>Cardholder Name</label>
                    <input type='text' id='holder-name' placeholder='e.g Jane Appleseed'></input>
                    <p className='error-text'></p>
                </div>
                <div className='number-inputs'>
                    <label htmlFor='card-number'>Card Number</label>
                    <input type='text' id='card-number' placeholder='e.g. 1234 5678 9123 0000'></input>
                    <p className='error-text'></p>
                </div>
                <div className='date'>
                    <div className='exp-day'>
                        <label htmlFor='exp-day'>Exp. Date (MM/YY)</label>
                        <div className='ii'>
                            <input type='text' id='exp-day' placeholder='MM'></input>
                            <input type='text' id='exp-day-2' placeholder='YY'></input>
                        </div>
                    </div>
                    <div className='cvc-form'>
                        <label htmlFor='cvc-label'>CVC</label>
                        <input type='text' id='cvc-label' placeholder='e.g. 123'></input>
                        <p className='error-text'></p>
                    </div>
                </div>
                <button type='submit' className='submit'>Confirm</button>
            </div>
        </form>
    )
}

export default Form