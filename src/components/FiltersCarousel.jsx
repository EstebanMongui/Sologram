import React from 'react'
import Filter from './Filter'
import '../assets/styles/FiltersCarousel.css'

const FiltersCarousel = ({ filters, imageUrl, handleClick }) => {

    return (
        <div className='filters-carousel mt3 ml2'>
            {
                filters.map(({id, name}) => {
                    return(
                        <Filter
                            key={id} 
                            filterId={id} 
                            filterName={name} 
                            imageUrl={imageUrl}
                            handleClick={handleClick}
                        />
                    )
                })
            }
        </div>
    )
}

export default FiltersCarousel