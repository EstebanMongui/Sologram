import React, { useState } from 'react'
import Input from '../components/Input'
import FilterPreview from '../components/FilterPreview'
import FiltersCarousel from '../components/FiltersCarousel'
import Button from '../components/Button'
import { useHandleChange } from '../hooks/useHandleChange'
import { saveData } from '../helpers/storage'

import '../assets/styles/NewPost.css'

const filters = [
    {id:'normal', name:'normal'},
    {id:'blur', name:'Blur'},
    {id:'gray-scale', name:'Gray'},
    {id:'invert', name:'Invert'},
    {id:'blue', name:'Blue'}
]

const NewPost = () => {
  
    const {handleChange, state:imageUrl} = useHandleChange()
    const {handleChange:handleChangeImage, state:imageName} = useHandleChange()
    const [filterId, setFilterId] = useState('')
    
    const handleClick = () => {
        if(!imageUrl || !imageName) return

        const data = {
            imageName,
            imageUrl,
            filterId,
            like: false
        }

        saveData({ data })

        setTimeout(()=>{
            window.location.replace('/')
        }, 2000)
    }

    const handleFilter = (filterId) =>{
        console.log('FilterId: ', filterId)
        setFilterId(filterId)
    }

    return (
        <div className='new-post w-100'>
            <dir className='ph2 pv1'>
                <Input label={'Enter an image url:'} handleChange={ handleChange } value={ imageUrl }/>
            </dir>
            <FilterPreview imageUrl={ imageUrl } imageName={ imageName } filterId={ filterId }/>
            <div className='ph2'>
                <Input label={'Give it a name:'} handleChange={ handleChangeImage } value={ imageName }/>
            </div>
            <FiltersCarousel filters={filters} imageUrl={ imageUrl } handleClick={handleFilter}/>
            <div className='ph2 pv2'>
                <Button buttonText={'Post now!'} onClick={ handleClick }/>
            </div>
        </div>
    )
}

export default NewPost