import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard"


const OurStore = () => {

    const [grid,setGrid] = useState(4);

  return (
    <> 
     <Meta title={"Our Store"} />
     <BreadCrumb title='OureStore' />

     <div className='store-wrapper py-5 home-wrappar-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                        Shop By Category 
                        </h3>
                        <div>
                            <ul className='ps-0'>
                                <li>watch</li>
                                <li>Tv</li>
                                <li>Camera</li>
                                <li>Laptop</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                           Filter By
                        </h3>
                        <div>
                            <h5 className='sub-title'>Availability</h5>
                            <div>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="" />
                                <label className='form-check-label' htmlFor="">
                                    In Stock(1)
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id=""  />
                                <label className='form-check-label' htmlFor="">
                                 Out of Stock
                                </label>
                            </div>
                            </div>
                          
                        </div>
                         <h5 className='sub-title'>Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                         <div className="form-floating">
                         <input
                           type="email"
                           className="form-control"
            
                           id="floatingInput" 
                           placeholder="From" 
                        />
                         <label htmlFor="floatingInput">From</label>
                       </div>
                       <div className="form-floating ">
                         <input
                           type="email"
                           className="form-control"
                           id="floatingInput" 
                           placeholder="TO" 
                        />
                         <label htmlFor="floatingInput">TO</label>
                       </div>
                        </div>
                        <h5 className='sub-title'>Colors</h5>
                        <div>
                            
                                <ul className='colors ps-0'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                        
                        </div>
                        <h5 className='sub-title'> Size</h5>
                         <div>
                             <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="color-1" />
                                <label className='form-check-label' htmlFor="color-1">
                                    S(2)
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="color-2" />
                                <label className='form-check-label' htmlFor="color-2">
                                    M(2)
                                </label>
                            </div>
                         </div>


                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                        Products Tag
                        </h3>
                        <div>
                            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Camera</span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                        Random Product
                        </h3>

                        <div>
                            <div className='random-products d-flex'>
                                <div className='w-50'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                </div>
                                <div className='w-50'>
                                    <h5 >Kids headphones bulk 10 pack multicolored for students </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value="3"
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                   <b>$3.00</b>
                                </div>
                            </div>
                            <div className='random-products d-flex '>
                                <div className='w-50'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                </div>
                                <div className='w-50'>
                                    <h5>Kids headphones bulk 10 pack </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value="3"
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                   <b>$3.00</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                  <div className='filter-sort-grid'>
                    <div className='d-flex align-items-center justify-content-around'>
                    <div className='d-flex align-items-center gap-10'>
                        <p className='mb-0 d-block ' style={{"width":"100px"}}>Sort By:</p>
                        <select name='' className='form-control form-select' id=''>
                            <option value="manual">Featured</option>
                            <option value="title-ascending">Alphabetically, A-Z</option>
                            <option value="title-descending">Alphabetically, Z-A</option>

                            <option value="best-selling" selected="selected">Best Selling</option>
                            <option value="price-asending">Price, low to high</option>
                            <option value="price-desending">Price, high to low</option>
                            <option value="created-asending">Date, old to new</option>
                            <option value="created-desending">Date, new to old</option>
                        </select>
                    </div>
                      <div className='d-flex justify-content-between align-items-center gap-10'>
                        <p className='totalproducts mb-0'>21 Products</p>
                        <div className='d-flex gap-10 align-items-center grid justify-content-evenly'>
                            <img onClick={()=>{setGrid(3)}} src='images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                            <img onClick={()=>{setGrid(4)}} src='images/gr3.svg' className='d-block img-fluid ' alt='grid'/>
                            <img onClick={()=>{setGrid(6)}} src='images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                            <img onClick={()=>{setGrid(12)}} src='images/gr.svg' className='d-block img-fluid' alt='grid'/>
                        </div>


                      </div>
                    </div>
                </div>
                <div className='product-list pb-5 mt-3'>

                    <div className='d-flex gap-10 flex-wrap'>
                    <ProductCard grid={grid} />
                    
                    </div>
                 

                </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default OurStore