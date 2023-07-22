import React, { useState, useEffect } from 'react'
import ThankYou from './ThankYou';

function Form(props) {
    const { formData, onInputChange, onSubmit } = props
    const [errors, setErrors] = useState({
        holderName: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: ""
    });
    const [showErrors, setShowErrors] = useState(false)
    const [submitted, setSubmitted] = useState(false);
    const validateForm = () => {
        let valid = true
        const newErrors = {
            holderName: "",
            cardNumber: "",
            year: "",
            cvc: ""
        };
        if (formData.holderName.trim() === "") {
            newErrors.holderName = 'Enter Holder Name'
            valid = false
        }
        else if (formData.cardNumber.trim() === '' || !/^\d+$/.test(formData.cardNumber)) {
            newErrors.cardNumber = 'Wrong format, numbers only'
            valid = false
        }
        else if (formData.month.trim() === '' || formData.year.trim() === '') {
            newErrors.year = 'Can\'t be blank'
            valid = false
        }

        else if (!/^\d+$/.test(formData.year) || !/^\d+$/.test(formData.month)) {
            newErrors.year = 'Must be a number'
            valid = false
        }
        else if (formData.cvc.trim() === '') {
            newErrors.cvc = 'Can\'t be blank'
            valid = false
        }
        setErrors(newErrors)
        setShowErrors(true)
        return valid
    }
    useEffect(() => {
        if (showErrors) {
            const timer = setTimeout(() => {
                setShowErrors(false)
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [showErrors])

    const hundleSubmit = (e) => {
        e.preventDefault()
        if (!validateForm()) {
            return
        }
        onSubmit(formData)
        setSubmitted(true);
    }
    return (
        <div className='form-div'>
            {
                submitted ? (
                    <ThankYou />
                ) :
                    (
                        <form className='form' onSubmit={hundleSubmit}>
                            <div className='form-content'>
                                <div className='number-inputs'>
                                    <label htmlFor='holder-name'>Cardholder Name</label>
                                    <input
                                        type='text'
                                        id='holder-name'
                                        placeholder='e.g Jane Appleseed'
                                        onChange={onInputChange}
                                        name='holderName'
                                    ></input>
                                    <p className='error-text'>{showErrors && errors.holderName}</p>
                                </div>
                                <div className='number-inputs'>
                                    <label htmlFor='card-number'>Card Number</label>
                                    <input
                                        type='text'
                                        id='card-number'
                                        placeholder='e.g. 1234 5678 9123 0000'
                                        name='cardNumber'
                                        onChange={onInputChange}
                                    ></input>
                                    <p className='error-text'>{showErrors && errors.cardNumber}</p>
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
                                                onChange={onInputChange}
                                            ></input>
                                            <input
                                                type='text'
                                                id='exp-day-2'
                                                placeholder='YY'
                                                name='year'
                                                onChange={onInputChange}
                                            ></input>
                                        </div>
                                        <p className='error-text'>{showErrors && errors.year}</p>
                                    </div>
                                    <div className='cvc-form'>
                                        <label htmlFor='cvc-label'>CVC</label>
                                        <input
                                            type='text'
                                            id='cvc-label'
                                            placeholder='e.g. 123'
                                            name='cvc'
                                            onChange={onInputChange}
                                        ></input>
                                        <p className='error-text'>{showErrors && errors.cvc}</p>
                                    </div>
                                </div>
                                <button type='submit' className='submit'>Confirm</button>
                            </div>
                        </form>
                    )
            }

        </div>
    )
}

export default Form