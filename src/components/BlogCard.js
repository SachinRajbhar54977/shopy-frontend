import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>1 Nov, 2024</p>
                <h5 className='title'>A beautiful sunday morning renaissance</h5>
                <p  className='desc'>
                 jshdur snbduhf sdfuewr sd jkur skfjhukeh sdkjhru 
                 sjfuweb
                </p>
                <Link to="/" className='button'>
                Read more..
                </Link>

            </div>
        </div>
    </div>
  )
}

export default BlogCard