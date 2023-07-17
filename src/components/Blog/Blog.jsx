import React from 'react';
import DateObject from "react-date-object";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = (props) => {
    const {blog, handleAddToBookMarked} = props;
    const {id, url, profilePic, readTime, name, heading, published, tags} = blog;

    // calculating date 
    const date = new DateObject(published);
    const dateFormat = date.format("MMMM DD YYYY");

    // diiference between today and published day
    const previouseDate = new Date(published);
    const currentDate = new Date();

    const differenceInTime = currentDate.getTime() - previouseDate.getTime();
    const differenceInDays = parseInt(differenceInTime / (1000 * 3600 * 24));

    // console.log(blog);
    
    return (
        <div className='blog'>
            <img src={url} alt="" />
            <div className='blog-person-info'>
                <div className='person-info'>
                    <div className='bloger-details'>
                        <img src={profilePic} alt="" />
                        <div>
                            <h4>{name}</h4>
                            <p>{dateFormat} ({differenceInDays} days ago)</p>
                        </div>
                        <p>{id}</p>
                    </div>
                </div>
                <div>
                    <span>{readTime} min read <FontAwesomeIcon
                     onClick={() => handleAddToBookMarked(blog)} 
                     icon={faBookmark} /></span>
                     
                </div>
            </div>
            <h2 className='blog-heading'>{heading}</h2>
            {
                tags.map(tag => <span>#{tag}{"  "}</span>)
            }
            <div style={{marginTop: "10px"}}>
                <button className='btn-readMark'
                 
                 >Mark as Read</button>
            </div>
        </div>
    );
};

export default Blog;