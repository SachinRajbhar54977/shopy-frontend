import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const Contact = () => {
  return (
  <>
   <Meta title={"Contact Us"} />
   <BreadCrumb title='Contact Us' />
   <div className='contact-wrappar home-wrappar-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d48230.00726113334!2d76.81395476911587!3d30.683942650127783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1729583806469!5m2!1sen!2sin" 
        width="600" 
        height="450" 
       className='border-0 w-100'
        allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='col-12 mt-5'>
          <div className='contact-inner-wrappar d-flex justify-content-between py-5'>
            <div>
              <h3 className='contact-title mb-4'>Contact</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div >
                  <input type='text' className='form-control' placeholder='Name'/>
                </div>
                <div >
                  <input type='email' className='form-control' placeholder='Email'/>
                </div>
                <div >
                  <input type='number' className='form-control' placeholder='Mobile Number'/>
                </div>
                <div >
                 <textarea name='' className='w-100 form-control' id=''  placeholder="comments"
                 cols="30" rows="10" >

                 </textarea>
                </div>
                <div>
                  <button className='button border-0'>Submit</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className='contact-title'>Get In touch with Us</h3>
              <div>
              <ul className='ps-0'>
                <li className='mb-3 d-flex gap-15 align-item-center'>
                  <AiOutlineHome  className='fs-5'/>
                  <address className='mb-0'>House no 283, MAulijagaran part-2, Chandigarh</address>
                  </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <MdOutlineMailOutline  className='fs-5'/>
                  <a href='@sachinbhardwaj54977gmail.com'>sachinbhardwaj54977gmail</a>
                 
                  </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <FaPhoneSquareAlt  className='fs-5'/>
                  <a href='+tel:+91 216541565'>+91 1654216812</a>
                 
                  </li> 
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <IoInformationCircleOutline  className='fs-5'/>
                  <p className='mb-0 '>Monday to Friday 10AM t0  8PM </p></li> 
               
               </ul>
              </div>
            </div>
              
          </div>
        </div>
      </div>
    </div>
   </div>
  </>
  )
}

export default Contact