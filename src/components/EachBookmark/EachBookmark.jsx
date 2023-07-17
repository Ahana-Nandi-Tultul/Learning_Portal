import React from 'react';
import './EachBookmark.css';

const EachBookmark = props => {
    const {bookmark} = props;
    return (
        <div className='each-bookmark'>
            <h4>{bookmark.heading}</h4>
        </div>
    );
};

export default EachBookmark;