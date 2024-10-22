import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();

  return (
   <>
    <div className={`${location.pathname === "/store" ?  `gr-${grid}`: "col-3"}`}>
      
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link>
            <img src='images/wish.svg' alt='wishlist'/>
          </Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' className='img-fluid' alt='product-image' />
          <img src='images/watch2.jpg'className='img-fluid' width='200px' height='268px' alt='product-image' />
        </div>
        <div className='product-details'>
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
          <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>hyufeb sdvfuyr sjbdfuywesz dlubauyfra uagysufbjhae sflubfuyge sjkbasfuygrew sjhbfuiygare suiahgfiheawr suhiurhfm sdklhfuihwi shdfiuhrw sbipfuhuwe </p>
          <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link>
             <img src='images/add-cart.svg' alt='addcart' />
            </Link>
            <Link>
             <img src='images/view.svg' alt='view' />
            </Link>
            <Link>
             <img src='images/prodcompare.svg' alt='addcart' />
            </Link>
         
         
          </div>
        </div>
      </Link>
    </div>

    <div className={`${location.pathname === "/store" ?  `gr-${grid}`: "col-3"}`}>
      
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link>
            <img src='images/wish.svg' alt='wishlist'/>
          </Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' className='img-fluid' alt='product-image' />
          <img src='images/watch2.jpg'className='img-fluid' width='200px' height='268px' alt='product-image' />
        </div>
        <div className='product-details'>
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
           <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>hyufeb sdvfuyr sjbdfuywes dlubauyfra uagysufbjhae sflubfuyge sjkbasfuygrew sjhbfuiygare suiahgfiheawr suhiurhfm sdklhfuihwi shdfiuhrw sbipfuhuwe </p>
          <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link>
             <img src='images/add-cart.svg' alt='addcart' />
            </Link>
            <Link>
             <img src='images/view.svg' alt='view' />
            </Link>
            <Link>
             <img src='images/prodcompare.svg' alt='addcart' />
            </Link>
         
         
          </div>
        </div>
      </Link>
    </div>


    
   </>
  )
}

export default ProductCard