import React from 'react';
import './styles/cards.css'


const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
    <>
    <div className='annoy'>
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}Rs</p>
            <br></br>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
            
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards