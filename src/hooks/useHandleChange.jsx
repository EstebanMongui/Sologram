import { useState } from 'react'

export const useHandleChange = () => {
  
    const [state, setState] = useState('')
    
    const handleChange = (e) => {
        const { target:{ state } } = e
        setState(state)
    }   
    return {handleChange, state}
}
