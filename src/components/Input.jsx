import React, { useState } from 'react'
import '../assets/styles/Input.css'

const Input = ({type, label, handleChange, value}) => {
    return (
        <div className='input'>
            <label className='input__label'>{ label }</label>
            <input 
                className='input__field'
                type={ type }
                value={ value }
                onChange={ handleChange }
            >
            </input>
        </div>
    )
}

export default Input