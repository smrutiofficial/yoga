import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-sky-100 py-3'>
            <div className=' flex flex-row justify-between items-center max-w-7xl mx-auto'>
                <div id='logo' className='font-bold text-3xl'>
                    <Link to='/'>
                        <h1>Yoga</h1>
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
                <div id='sign'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>SignIn</button>
                </div>
            </div>
        </div>
    )
}

export default Header;