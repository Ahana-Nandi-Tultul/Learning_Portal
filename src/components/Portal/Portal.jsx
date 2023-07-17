import React, { useEffect, useState } from 'react';
import './Portal.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Portal = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    const handleAddToBookMarked = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }
    return (
        <div className='portal-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog 
                        blog={blog} 
                        key={blog.id}
                        handleAddToBookMarked = {handleAddToBookMarked}
                        ></Blog>)
                }
            </div>
            <div className='bookmarked-blogs-container'>
                <Bookmark bookmarks={bookmarks}></Bookmark>
            </div>
        </div>
    );
};

export default Portal;