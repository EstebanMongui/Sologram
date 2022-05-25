import React from 'react'
import '../assets/styles/Filter.css'

const Filter = ({ imageUrl, filterName, filterId }) => {
  return (
    <div className='filter'>
        <p className='filter__name'>{filterName}</p>
        <figure className='filter-thumbnail'>
            <img 
                className={`filter-thumnail__image ${filterId}`} 
                src={imageUrl} 
                alt={filterName} 
            />
        </figure>
    </div>
  )
}

export default Filter