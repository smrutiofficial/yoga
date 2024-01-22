import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className='bg-sky-100 py-3'>
            <div className=' flex flex-row justify-between items-center max-w-7xl mx-auto'>
                <div id='logo' className='font-bold text-4xl text-blue-500'>
                    <Link to='/'>
                        <h1>Yoga.</h1>
                    </Link>
                </div>
                <div id='menus' className='font-medium flex flex-row justify-between items-center gap-8 '>
                    <Link to='/'>
                        <ul className='hover:text-red-300'>Home</ul>
                    </Link>
                    <Link to='/about'>
                        <ul className='hover:text-red-300'>About</ul>
                    </Link>
                    <Link to='/services'>
                        <ul className='hover:text-red-300'>Services</ul>
                    </Link>
                    <Link to='/courses'>
                        <ul className='hover:text-red-300'>Courses</ul>
                    </Link>
                </div>
                <div id='sign' className=''>
                    {/* <Link to='/signin'>
                    <button className='mx-2 border-2 border-blue-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign In</button>
                </Link> */}
                    <Link to='/profile'>
                        {currentUser ? (
                            <img src={currentUser.profilePicture} alt="profile" className='h-12 w-12 rounded-full object-cover' />
                        ) : (
                            <button className='border-2 border-blue-500 hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded'>Sign In</button>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;