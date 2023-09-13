import { useEffect, useState } from "react";
import Proptypes from 'prop-types'
import Blog from './Blog';

const Blogs = ({bookmarked, setBookmarked, spentTime, setSpentTime}) => {
    const [blogs, setblogs] = useState([]);

    useEffect( () => {
        const fetchBlogs = async() => {
            const response = await fetch('blogs.json');
            const data = await response.json();
            setblogs(data);
        }
        fetchBlogs();
    }, [] )

    return (
        <div className="w-full lg:w-2/3">
        {
            blogs.map( blog => <Blog key={blog.id} blog={blog} bookmarked={bookmarked} setBookmarked={setBookmarked} spentTime={spentTime} setSpentTime={setSpentTime}></Blog>)
        }
        </div>
    );
};

Blogs.propTypes = {
    bookmarked: Proptypes.array.isRequired,
    setBookmarked: Proptypes.func.isRequired,
    spentTime: Proptypes.number.isRequired,
    setSpentTime: Proptypes.func.isRequired
}

export default Blogs;