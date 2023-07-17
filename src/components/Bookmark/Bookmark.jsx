import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const {bookmarks} = props;
    return (
        <div>
            <div className='spent-time'>
                <h4>Spent time on read : 177 min</h4>
            </div>
            <div className='bookmarked-blogs'>
                <h4>Bookmarked Blogs : {bookmarks.length}</h4>
            </div>
        </div>
    );
};

export default Bookmark;