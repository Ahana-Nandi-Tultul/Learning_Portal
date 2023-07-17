import React, { useEffect, useState } from 'react';
import './Portal.css';
import Blog from '../Blog/Blog';
import EachBookmark from '../EachBookmark/EachBookmark';
import { addToBookmark, addToSpentTime, getBookmarks } from '../../utilities/db';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Portal = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [spentTime, setSpentTime] = useState(0);
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

    const notify = () => toast.success('You have already BookedMarked This Blog!');

    const handleAddToBookMarked = (blog) => {
        
        const exists = bookmarks.find(bkm => bkm.id === blog.id);
        if(exists){
            notify();
            return;
        }
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
        addToBookmark(blog);
    }

    const handleSpentTime = (blog) => {
        // addToSpentTime(blog);
        let previousSpentTime = spentTime;
        let currentSpentTime = 0;
        if(previousSpentTime){
            currentSpentTime = previousSpentTime + blog.readTime;
        }
        else{
            currentSpentTime = blog.readTime;
        }
        console.log(currentSpentTime);
        setSpentTime(currentSpentTime);
    }

    return (
        <div>
             <ToastContainer />
             <div className='portal-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog 
                        blog={blog} 
                        key={blog.id}
                        handleAddToBookMarked = {handleAddToBookMarked}
                        handleSpentTime = {handleSpentTime} 
                        ></Blog>)
                }
            </div>
            <div className='bookmarked-blogs-container'>
                <div className='spent-time'>
                    <h4>Spent time on read : {spentTime} min</h4>
                </div>
                <div className='bookmarked-blogs'>
                    <h4>Bookmarked Blogs : {bookmarks.length}</h4>
                    {
                        bookmarks.map(bookmark => <EachBookmark bookmark={bookmark}></EachBookmark> )
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Portal;