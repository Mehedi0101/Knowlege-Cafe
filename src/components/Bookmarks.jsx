import BookmarkedBlogs from "./BookmarkedBlogs";
import Proptypes from 'prop-types'

const Bookmarks = ({bookmarked, spentTime}) => {
    return (
        <div className="w-full lg:w-1/3">
            <div className="px-10 py-5 border-2 border-blue-600 text-blue-600 text-center rounded-lg font-bold text-xl">Spent time on read : {spentTime} min</div>
            <h3 className="text-center mt-5 font-bold text-xl">Bookmarked Blogs : {bookmarked.length}</h3>
            <div className="mt-4">
                {
                    bookmarked.map( bookmark => <BookmarkedBlogs key={bookmark.id} bookmark={bookmark}></BookmarkedBlogs>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarked: Proptypes.array.isRequired,
    spentTime: Proptypes.number.isRequired
}

export default Bookmarks;