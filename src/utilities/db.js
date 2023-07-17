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

export {
    addToBookmark,
    getBookmarks
}