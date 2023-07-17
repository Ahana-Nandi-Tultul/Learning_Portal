const addToBookmark = (blog) => {
    let bookmarks = {};

    const storedbookmarks = localStorage.getItem('bookmarks');
    if(storedbookmarks){
        bookmarks = JSON.parse(storedbookmarks);
    }

    const readTime = bookmarks[blog.id];
    if(readTime){
        const newReadTime = readTime + blog.readTime;
        bookmarks[blog.id] = newReadTime;
    }
    else{
        bookmarks[blog.id] = blog.readTime;
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

}

const getBookmarks = () => {
    const storedbookmarks = localStorage.getItem("bookmarks");
    if(storedbookmarks){
        let bookmarks = JSON.parse(storedbookmarks);
        return bookmarks;
    }
}

const addToSpentTime = (blog) => {
    let spentTime = 0;
    const storedSpentTime = localStorage.getItem('spentTime');
    if(storedSpentTime){
        spentTime = parseInt(storedSpentTime);
    }

    if(spentTime){
        spentTime = spentTime + blog.readTime;
    }
    else{
        spentTime = blog.readTime;
    }
    localStorage.setItem('spentTime', spentTime);

}

export {
    addToBookmark,
    getBookmarks,
    addToSpentTime
}