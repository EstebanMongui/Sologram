import React, { useEffect } from 'react'
import FeedCard from '../components/FeedCard'
import { Link } from 'react-router-dom'
import { getData } from '../helpers/storage'
import { calculateTime } from '../helpers/time'

import { useDispatch, useSelector } from 'react-redux'
import { saveImage } from '../actions/images'

import '../assets/styles/Feed.css'

const Feed = () => {
    const images = getData()
    const dispatch = useDispatch()
    const {images:posts} = useSelector( state => state )

    useEffect(()=>{
        dispatch(saveImage(images))
    }, [])

    return (
      <div className='Feed w-100'>
        {   
            !posts?.length
            ?
            <div className='feed__first-post'>
                <Link to='/new-post'>
                    <span className='feed__first-post--text'>
                        Load your first image!! 😉
                    </span>
                </Link>
            </div>
            :
            posts.reverse().map(post => {
                const {
                    id,
                    imageName,
                    timeStamp,
                    imageUrl,
                    filterId
                } = post
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