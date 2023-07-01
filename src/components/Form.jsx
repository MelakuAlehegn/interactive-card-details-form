import React from 'react'
import Cards from './Cards'
function Form() {

    return (
        <div className='container'>
            <Cards />
            <form className='form'>
                <div>
                    <label htmlFor='holder-name'>Cardholder Name</label>
                    <input type='text' id='holder-name' placeholder='e.g Jane Appleseed'></input>
                    <p className='error-text'></p>
                </div>
                <div>
                    <label htmlFor='card-number'>Card Number</label>
                    <input type='text' id='number-name' placeholder='e.g. 1234 5678 9123 0000'></input>
                    <p className='error-text'></p>
                </div>
                <div className='date'>
                    <div className='exp-day'>
                        <label htmlFor='exp-day'>Exp. Date (MM/YY)</label>
                        <input type='text' id='exp-day' placeholder='MM'></input>
                        <input type='text' id='exp-day' placeholder='YY'></input>
                        <p className='error-text'></p>
                    </div>
                    <div className='cvc'>
                        <label htmlFor='cvc'>CVC</label>
                        <input type='text' id='cvc' placeholder='e.g. 123'></input>
                        <p className='error-text'></p>
                    </div>

                </div>
                <button type='submit'>Confirm</button>
            </form>
        </div>
    )
}

export default Form