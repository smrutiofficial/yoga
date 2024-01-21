import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-5xl my-7 font-semibold text-slate-500'>Registation</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-state-100 p-3 rounded-lg'
        />
        <input
          type='text'
          placeholder='Eamil'
          id='email'
          className='bg-state-100 p-3 rounded-lg'
        />
        <input
          type='Password'
          placeholder='Password'
          id='password'
          className='bg-state-100 p-3 rounded-lg'
        />
        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-600 mt-3'
        >Sign Up</button>
      </form>
      <div className='flex flex-row gap-2 mt-2'>
        <p>Have an account</p>
        <Link to='/signin'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp