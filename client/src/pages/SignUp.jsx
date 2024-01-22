import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Oauth from '../components/Oauth';


const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      // console.log(data);
      setLoading(false);
      if (data.success == false) {
        setError(true);
        return;
      }
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-5xl my-7 font-semibold text-slate-500'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-10'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-state-100 p-3 rounded-lg'
          onChange={handleChange}
        />
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
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <Oauth/>
      </form>
      <div className='flex flex-row gap-2 mt-4'>
        <p>Have an account</p>
        <Link to='/signin'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-500 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  )
}

export default SignUp