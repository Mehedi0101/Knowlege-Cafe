import profileAvatar from '../assets/profile.png';

const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center mt-4 gap-4 max-[320px]:flex-wrap max-[320px]:justify-center max-[320px]:text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold'>Knowledge Cafe</h1>
                <div> 
                    <img className='w-full' src={profileAvatar} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;