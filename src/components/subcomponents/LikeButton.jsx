import React from 'react'
import '../../assets/styles/LikeButton.css'

const LikeButton = ({ onClick, reference }) => {
  return (
    <button ref={reference} onClick={onClick} className={`like-button`}>
        <i className='icon-like'></i>
    </button>
  )
}

export default LikeButton