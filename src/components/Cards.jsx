import React from 'react'
import cardBack from '../assets/bg-card-back.png'
import cardFront from '../assets/bg-card-front.png'

function Cards(props) {
  const { holderName, cardNumber, month, year, cvc } = props.formData;
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-white' >
          <img src={cardFront} alt='card-front' width={"360px"}></img>
          <div className='card-info'>
            <svg className='svg-logo' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" /><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" /></svg>
            <p className='card-info-number'>{cardNumber ? cardNumber : "#### #### #### ####"}</p>
            <div className='name'>
              <p className='card-info-name'>{holderName ? holderName : "Jane Appleseed"}</p>
              <p className='card-info-date'>{month ? month : "00"}/{year !== '' ? year : "00"}</p>
            </div>
          </div>
        </div>
        <div className='card-back'>
          <img src={cardBack} alt='card-back' width={"360px"}></img>
          <p className='cvc'>{cvc ? cvc : "000"}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards