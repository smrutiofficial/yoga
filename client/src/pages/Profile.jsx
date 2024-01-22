import React from 'react';
import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-3'>
        <img src={currentUser.profilePicture} alt='profile'
          className='h-28 w-28 self-center rounded-full object-cover'
        />
        <input type='text'
          id='username'
          placeholder='Username'
          defaultValue={currentUser.username}
          className='bg-slate-100 rounded-lg p-3' />
        <input type='email'
          id='email'
          placeholder='Email'
          defaultValue={currentUser.email}
          className='bg-slate-100 rounded-lg p-3' />
        <input type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-100 rounded-lg p-3' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
        <div className='flex flex-row justify-between mt-5'>
          <span className='text-red-500 cursor-pointer'>Delete Account</span>
          <span className='text-red-500 cursor-pointer'>Sign Out</span>
        </div>
      </form>
    </div>
  )
}

export default Profile