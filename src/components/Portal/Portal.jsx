import React, { useEffect, useState } from 'react';
import './Portal.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Portal = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='portal-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                }
            </div>
            <div className='bookmarked-blogs-container'>
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Portal;