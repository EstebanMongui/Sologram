import React, { useEffect, useRef, useState } from 'react'
import LikeButton from './subcomponents/LikeButton'

import '../assets/styles/FeedCard.css'

const FeedCard = ({imageName, timeAgo, imageUrl, filterId}) => {

  const [clicks, setClicks] = useState(0)
  const [isLike, setIsLike] = useState(false)
  
  const buttonRef = useRef(null);

  const onClick = () => {
    setIsLike(!isLike)
  }

  const handleClick = () =>{

    setClicks(clicks + 1)
    
    setTimeout(()=>{
      setClicks(0)
    }, 250)
    
  }
  
  useEffect(()=>{
    clicks >= 2 && onClick()
  }, [clicks])

  useEffect(()=>{
    isLike
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