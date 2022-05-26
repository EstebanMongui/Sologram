import React, { useEffect, useRef, useState } from 'react'
import LikeButton from './subcomponents/LikeButton'

import '../assets/styles/FeedCard.css'
import { updateData } from '../helpers/storage'
import { useDispatch, useSelector } from 'react-redux'
import { saveImage } from '../actions/images'

const FeedCard = ({imageName, timeAgo, imageUrl, filterId, imageId}) => {

  const [clicks, setClicks] = useState(0)
  const [isLike, setIsLike] = useState(false)
  const dispatch = useDispatch()
  const { images } = useSelector( state => state )
  const buttonRef = useRef(null)

  const {like:likeState} = images?.find(({id})=> id === imageId)

  const onClick = () => {
    const fieldsToUpdate = {like:!isLike}
    const updatedImages = updateData({fieldsToUpdate, objectId:imageId})
    setIsLike(!isLike)
    dispatch(saveImage(updatedImages))
  }

  const handleClick = () =>{

    setClicks(clicks + 1)
    
    setTimeout(()=>{
      setClicks(0)
    }, 250)
    
    clicks >= 2 && onClick()
  }

  useEffect(()=>{
    isLike || likeState 
    ?
    buttonRef.current.className = 'like-button clicked'
    :
    buttonRef.current.className = 'like-button'
  }, [isLike])
  
  return (
    <div className='feed-card'>
      <p className='feed-card__info'>
        <span className='feed-card__info--image-name'>{ imageName }</span>
        <span className='feed-card__info--time-ago'>Posted { timeAgo } ago</span>
      </p>
      <figure className='feed-card__figure' onClick={ handleClick }>
        <img className={`feed-card__figure--image ${filterId}`} src={ imageUrl } alt={ imageName } />
      </figure>
      <LikeButton onClick={onClick} reference={buttonRef}/>
    </div>
  )
}

export default FeedCard