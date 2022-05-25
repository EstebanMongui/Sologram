import React, { useEffect, useState } from 'react'
import '../assets/styles/Button.css'

const Button = ({ buttonText, onClick }) => {
    
    const [state, setState] = useState('')

    const handleClick = () =>{
        setState('clicked')
        onClick()
    }

    useEffect(() => {
        setTimeout(()=>{
            setState('')
        }, 500)
    }, [state])

    return (
        <button onClick={ handleClick } className={`button ${state}`} >
            { buttonText }
        </button>
    )
}

export default Button