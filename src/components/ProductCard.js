import React from 'react'
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className='col-3'>
      <div className='product-card position-relative'>
        <div className='product-image'>
          <img src='images/watch.jpg' alt='product-image' />
        </div>
        <div className='product-deatails'>
          <h6 className='brand'> Havels</h6>
          <h5 className='product-title'>
            kids headphone bulk 10m pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={true}
            activeColor="#ffd700"
          />,
          <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          
        </div>
      </div>
    </div>
  )
}

export default ProductCard