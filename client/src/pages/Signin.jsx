import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if (data.success == false) {
        dispatch(signInFailure(data))
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error))
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-5xl my-7 font-semibold text-slate-500'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-10'>
        <input
          type='text'
          placeholder='Eamil'
          id='email'
          className='bg-state-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='Password'
          placeholder='Password'
          id='password'
          className='bg-state-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-600 mt-3'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex flex-row gap-2 mt-4'>
        <p>Dont Have an account </p>
        <Link to='/signup'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-500 mt-5'>
      {error ? error.message || 'Something went wrong!': ''}</p>
    </div>
  )
}

export default SignIn