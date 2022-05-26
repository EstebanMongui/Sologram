import React from 'react'
import Filter from './Filter'
import '../assets/styles/FiltersCarousel.css'

const FiltersCarousel = ({ filters, imageUrl }) => {
  
    return (
        <div className='filters-carousel'>
            {
                filters.map(({id, name}) => {
                    return(
                        <Filter 
                            filterId={id} 
                            filterName={name} 
                            imageUrl={imageUrl}
                        />
                    )
                })
            }
        </div>
    )
}

export default FiltersCarousel