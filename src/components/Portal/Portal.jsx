import React, { useEffect, useState } from 'react';
import './Portal.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import { addToBookmark, getBookmarks } from '../../utilities/db';

const Portal = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    useEffect(() => {
        const storedBookmarks = getBookmarks();
        let bookmarkedBlogs = [];
        if(storedBookmarks){
            for(const bookmark in storedBookmarks){
                const bookmarkedBlog = blogs.find(blog => blog.id === bookmark);
                if(bookmarkedBlog){
                    bookmarkedBlogs.push(bookmarkedBlog);
                }
            }
        }
        setBookmarks(bookmarkedBlogs);
    },[blogs])

    const handleAddToBookMarked = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
        addToBookmark(blog);
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