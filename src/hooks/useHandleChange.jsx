import { useState } from 'react'

export const useHandleChange = () => {
  
    const [state, setState] = useState('')
    
    const handleChange = (e) => {
        const { target:{ value } } = e
        setState(value)
    }   
    return {handleChange, state}
}
