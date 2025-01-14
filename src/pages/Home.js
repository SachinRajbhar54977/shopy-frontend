import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'

const Home = () => {
  return (
   <>
   <section className='hone-wrapper-1 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative '>
            <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />

            <div className='main-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS..</h4>
              <h5>iPad s13+ Pro.</h5>
              <p>From $999.0 or $41.62/mon.</p>
              <Link className='button'>Buy Now</Link>
            </div>

          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
          <div className='small-banner position-relative '>
            <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner' />

            <div className='small-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS..</h4>
              <h5>iPad s13+ Pro.</h5>
              <p>From $999.0 <br/>or $41.62/mon.</p>
            </div>

          </div>
          <div className='small-banner position-relative '>
            <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />

            <div className='small-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS..</h4>
              <h5>iPad s13+ Pro.</h5>
              <p>From $999.0 <br/> or $41.62/mon.</p>
            </div>

            

          </div>

          <div className='small-banner position-relative '>
            <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />

            <div className='small-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS..</h4>
              <h5>iPad s13+ Pro.</h5>
              <p>From $999.0  <br/>or $41.62/mon.</p>
            </div>
          </div>

          <div className='small-banner position-relative '>
            <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner' />
            <div className='small-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS..</h4>
              <h5>iPad s13+ Pro.</h5>
              <p>From $999.0  <br/>or $41.62/mon.</p>
            </div>
          </div>
          
          </div>
        </div>

      </div>
    </div>
   </section>

   <section className='home-wrappar-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='services d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center mb-0 gap-15'>
              <img src='images/service.png' alt='services' />
              <div>
              <h6>Free shipping</h6>
              <p className='mb-0'> From all order over $5</p>
              </div>      
            </div>
            <div className='d-flex align-items-center  gap-15'>
              <img src='images/service-02.png' alt='services' />

              <div>
                <h6>Daily Surprise Offers</h6>
                <p className='mb-0'>save up to 25%off</p>
              </div>
            </div>

            <div className='d-flex align-items-center mb-0 gap-15'>
              <img src='images/service-03.png' alt='services' />

              <div>
                <h6>Support 24X7</h6>
                <p className='mb-0'>shop with an expert</p>
              </div>
              
            </div>
            <div className='d-flex align-items-center mb-0 gap-15'>
              <img src='images/service-04.png' alt='services' />
              <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory Default Price</p>
              </div>

            </div>
            <div className='d-flex align-items-center mb-0 gap-15'>
              <img src='images/service-05.png' alt='services' />
               <div>
               <h6>ecure Payments</h6>
               <p>pay with trusted partners.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>

   <section className='home-wrappar-2 py-5'>

    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
            <div className='d-flex  align-items-center'>
              <div>
                <h6> Cameras</h6>
                <p>10 items</p>
              </div>
              <img src='images/camera.jpg' alt='camera' />
            </div>

            <div className='d-flex  align-items-center'>
              <div>
                <h6>Smart T.v</h6>
                <p>10 items</p>
              </div>
              <img src='images/tv.jpg' alt='camera' />
            </div>

            <div className='d-flex  align-items-center'>
              <div>
                <h6>Smart Watches</h6>
                <p>10 items</p>
              </div>
              <img src='images/camera.jpg' alt='camera' />
            </div>

            <div className='d-flex  align-items-center'>
              <div>
                <h6> Music & Gaming</h6>
                <p>10 items</p>
              </div>
              <img src='images/headphone.jpg' alt='camera' />
            </div>

            <div className='d-flex  align-items-center'>
              <div>
                <h6> Cameras</h6>
                <p>10 items</p>
              </div>
              <img src='images/camera.jpg' alt='camera' />
            </div>

            <div className='d-flex align-items-center'>
              <div>
                <h6>Smart T.v</h6>
                <p>10 items</p>
              </div>
              <img src='images/tv.jpg' alt='camera' />
            </div>

            <div className='d-flex  align-items-center'>
              <div>
                <h6>Smart Watches</h6>
                <p>10 items</p>
              </div>
              <img src='images/camera.jpg' alt='camera' />
            </div>

            <div className='d-flex  align-items-center'>
              <div>
                <h6> Music & Gaming</h6>
                <p>10 items</p>
              </div>
              <img src='images/headphone.jpg' alt='camera' />
            </div>


          </div>
        </div>
      </div>

    </div>
     

   </section>

   <section className='featured-wrapper home-wrappar-2 py-5'>

    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Featured Collections</h3>
        </div>
    
      
      </div>
      <div className='row '>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      
    
      </div>
    </div>

   </section>

   <section className='famous-wrapper py-5 home-wrappar-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous-1.webp' alt='watch'  className='img-fluid'/>
            <div className='famous-content position-absolute' >
              <h5>Big Screen</h5>
              <h6>Smart watch Series</h6>
              <p>From $399 or $16.62/mon. for 24 mo.*</p>
            </div>
          </div>
        </div>

        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous-2.jpg' className='img-fluid' alt='dispLay' />
            <div className='famous-content position-absolute' >
              <h5>Studio Display</h5>
              <h6>600 units of brightness.</h6>
              <p>27-inch 5k Retina dispLay</p>
            </div>
          </div>
        </div>

        
        <div className='col-3'>
          <div className='famous-card position-relative'>
          <div className='famous-content position-absolute' >
              <h5 className='text-dark'>Smart Phones</h5>
              <h6 className='text-dark'>Smart Phone 16 Pro.</h6>
              <p className='text-dark'>Now in green $1996.62/mon. for 24 mo.*</p>
            </div>
            <img src='images/famous-3.png' className='img-fluid' alt='phones'/>
            
          </div>
        </div>


        
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous-4.jpg' className='img-fluid' alt='speakers'/>
            <div className='famous-content position-absolute' >
              <h5>Big Screen</h5>
              <h6>Smart watch Series</h6>
              <p>From $399 or $16.62/mon. for 24 mo.*</p>
            </div>
          </div>
        </div>


      </div>
    </div>
    </section>  
    
    <section className='special-wrapper py-5 home-wrappar-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading '>
              Special Products
            </h3>
          </div>

        </div>
        <div className='row '>
          <SpecialProducts/>
          <SpecialProducts/>
          <SpecialProducts/>
          <SpecialProducts/>

        </div>
      </div>
    </section>

    <section className='popular-wrapper home-wrappar-2 py-5'>

    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Popular Products</h3>
        </div>
       
       <div className='row'>


        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
       </div>
      
      </div>
    </div>

   </section>

   <section className='marque-wrappar py-5 '>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
              
            <div className='mx-4 w-25'>
                <img src='images/brand-01.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-02.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-03.png' alt='brand' />
              </div>
               <div className='mx-4 w-25'>
                <img src='images/brand-04.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-05.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-06.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-07.png' alt='brand' />
              </div>



            </Marquee>
          </div>
        </div>
      </div>
    </div>
   </section>
   
   <section className='blog-wrapper home-wrappar-2 py-5'>

    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Latest News</h3>
        </div>
        <div className='col-9'>
                    <div className='row'>
                      <div className='col-6 mb-3'>
                      <BlogCard />
                      </div>
                      <div className='col-6 mb-3'>
                      <BlogCard />
                      </div>
                      <div className='col-6 mb-3'>
                      <BlogCard />
                      </div>
                      <div className='col-6 mb-3'>
                      <BlogCard />
                      </div>
                    </div>
                </div>
       
      </div>
    </div>

   </section>
   </>


  );
}

export default Home