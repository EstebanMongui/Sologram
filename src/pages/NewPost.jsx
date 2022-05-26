import React from 'react'
import Input from '../components/Input'
import FilterPreview from '../components/FilterPreview'
import FiltersCarousel from '../components/FiltersCarousel'
import Button from '../components/Button'
import { useHandleChange } from '../hooks/useHandleChange'
import { saveData } from '../helpers/storage'

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
        <div>
            <Input label={'Enter an image url:'} handleChange={ handleChange } value={ imageUrl }/>
            <FilterPreview imageUrl={ imageUrl } imageName={imageName}/>
            <FiltersCarousel filters={filters} imageUrl={ imageUrl } />
            <Input label={'Give it a name:'} handleChange={ handleChangeImage } value={ imageName }/>
            <Button buttonText={'Post now!'} onClick={ handleClick }/>
        </div>
    )
}

export default NewPost