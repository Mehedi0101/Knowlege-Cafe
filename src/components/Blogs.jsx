import { useEffect, useState } from "react";
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setblogs] = useState([]);

    useEffect( () => {
        const fetchBlogs = async() => {
            const response = await fetch('../../public/blogs.json');
            const data = await response.json();
            setblogs(data);
        }
        fetchBlogs();
    }, [] )

    return (
        <div className="w-2/3">
        {
            blogs.map( blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
        </div>
    );
};

export default Blogs;