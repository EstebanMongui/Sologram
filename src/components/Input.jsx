import React from 'react'
import '../assets/styles/Input.css'

const Input = ({type, label, handleChange, value}) => {
    return (
        <div className='input w-100'>
            <label className='input__label w-100'>{ label }</label>
            <input 
                className='input__field w-100'  
                type={ type }
                value={ value }
                onChange={ handleChange }
            >
            </input>
        </div>
    )
}

export default Input