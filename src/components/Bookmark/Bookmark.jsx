import React from 'react';
import './Bookmark.css'
import EachBookmark from '../EachBookmark/EachBookmark';

const Bookmark = (props) => {
    const {bookmarks} = props;
    console.log(bookmarks);
    return (
        <div>
            <div className='spent-time'>
                <h4>Spent time on read : 177 min</h4>
            </div>
            <div className='bookmarked-blogs'>
                <h4>Bookmarked Blogs : {bookmarks.length}</h4>
                {
                    bookmarks.map(bookmark => <EachBookmark bookmark={bookmark}></EachBookmark> )
                }
            </div>
        </div>
    );
};

export default Bookmark;