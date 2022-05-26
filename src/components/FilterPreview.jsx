import React from 'react'
import '../assets/styles/FilterPreview.css'

const FilterPreview = ({ imageUrl, imageName, filterId }) => {

    return (
        <div className='filter-preview mt3'>
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