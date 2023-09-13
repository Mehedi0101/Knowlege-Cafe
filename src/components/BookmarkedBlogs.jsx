import Proptypes from 'prop-types';

const BookmarkedBlogs = ({bookmark}) => {

    const {title} = bookmark;

    return (
        <div className='px-10 py-5 bg-slate-200 rounded-lg mt-2'>
            {title}
        </div>
    );
};

BookmarkedBlogs.propTypes = {
    bookmark: Proptypes.object.isRequired
}

export default BookmarkedBlogs;