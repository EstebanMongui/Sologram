import React from 'react'
import FeedCard from '../components/FeedCard'
import { Link } from 'react-router-dom'
import { getData } from '../helpers/storage'
import { calculateTime } from '../helpers/time'

import '../assets/styles/Feed.css'

const Feed = () => {
    const images = getData()

    return (
      <div className='Feed w-100 mt5'>
        {   
            !images.length
            ?
            <div className='feed__first-post'>
                <Link to='/new-post'>
                    <span className='feed__first-post--text'>
                        Load your first image!! 😉
                    </span>
                </Link>
            </div>
            :
            images.map(image => {
                const {
                    id,
                    imageName,
                    timeStamp,
                    imageUrl,
                    filterId
                } = image
                const timeAgo = calculateTime(timeStamp)
                return(
                    <FeedCard
                        key={id}
                        imageId={id} 
                        imageName={imageName} 
                        timeAgo={timeAgo} 
                        imageUrl={imageUrl} 
                        filterId={filterId} 
                    />
                )
            })
        }
      </div>
    )
}

export default Feed