import React, { useEffect, useState } from 'react';
import './Portal.css';
import Blog from '../Blog/Blog';

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
                <h1>This is book mark</h1>
            </div>
        </div>
    );
};

export default Portal;