import React from 'react'
import '../assets/styles/FilterImage.css'

const FilterPreview = ({ imageUrl, imageName, filterId }) => {

    return (
        <div className='filter-preview'>
            <figure className='filter-preview__wrapper'>
                <img 
                    className={`filter-preview__wrapper--image ${filterId}`} 
                    src={imageUrl} 
                    alt={imageName} 
                />
            </figure>
        </div>
    )
}

export default FilterPreview