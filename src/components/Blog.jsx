import Proptypes from 'prop-types';
import { useState } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';

const Blog = ({ blog, bookmarked, setBookmarked, spentTime, setSpentTime }) => {

    const { cover_Img, author_Name, author_Img, read_Time, title, hashtags, posted_Date } = blog;

    const [buttonStatus, setButtonStatus] = useState(false);

    const handleBookmark = btnStatus => {
        setButtonStatus(!btnStatus);
        btnStatus || setBookmarked([...bookmarked, blog]);
        btnStatus && setBookmarked( bookmarked.filter( bookmark => bookmark.id !== blog.id));
    };

    const handleMarkAsRead = () => {
        if(buttonStatus){
            setSpentTime(spentTime+blog.read_Time);
            setButtonStatus(false);
            setBookmarked( bookmarked.filter( bookmark => bookmark.id !== blog.id));
        }
    }

    return (
        <div className='mb-14'>
            <div>
                <img className='rounded-lg' src={cover_Img} alt="" />
            </div>

            <div className='flex justify-between items-center mt-5'>
                <div className='flex items-center gap-2'>
                    <div>
                        <img className='w-14' src={author_Img} alt="" />
                    </div>
                    <div>
                        <h3 className='font-bold'>{author_Name}</h3>
                        <p className='text-[#11111199] font-semibold'>{posted_Date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='text-[#11111199] font-semibold'>{read_Time} min read</p>
                    <button className={buttonStatus ? 'text-red-700 text-xl transition-all' : 'text-slate-700 text-lg transition-all'} onClick={()=>{handleBookmark(buttonStatus)}}><BsFillBookmarksFill /></button>
                </div>
            </div>

            <h2 className='text-3xl font-bold mt-2'>{title}</h2>

            <div className='flex flex-wrap mt-5 gap-3 text-[#11111199] font-semibold'>
                {
                    hashtags.map((tag, index) => <p key={index}>#{tag}</p>)
                }
            </div>

            <button className='mt-2 text-purple-900 underline' onClick={handleMarkAsRead}>Mark as read</button>
        </div>
    );

};

Blog.propTypes = {
    blog: Proptypes.object.isRequired,
    bookmarked: Proptypes.array.isRequired,
    setBookmarked: Proptypes.func.isRequired,
    spentTime: Proptypes.number.isRequired,
    setSpentTime: Proptypes.func.isRequired
}


export default Blog;