import React from 'react'
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
    
    const handleClick = () => {
        const data = {
            imageName,
            imageUrl,
            filterId:'',
            like: false
        }

        saveData({ data })
    }

    return (
        <div className='new-post w-100'>
            <dir className='ph2 pv1'>
                <Input label={'Enter an image url:'} handleChange={ handleChange } value={ imageUrl }/>
            </dir>
            <FilterPreview imageUrl={ imageUrl } imageName={imageName}/>
            <div className='ph2'>
                <Input label={'Give it a name:'} handleChange={ handleChangeImage } value={ imageName }/>
            </div>
            <FiltersCarousel filters={filters} imageUrl={ imageUrl } />
            <div className='ph2 pv2'>
                <Button buttonText={'Post now!'} onClick={ handleClick }/>
            </div>
        </div>
    )
}

export default NewPost