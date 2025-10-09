import React from 'react'

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 shadow-md w-full max-w-sm rounded-xl'>
            <h2 className='text-2xl font-bold text-blue-600'>Welcome to Educare!!</h2>
            <h4 className='text-gray-600 font-bold'>Login to your account</h4>
            <form className='mt-4 space-y-4'>
                <div className='flex flex-col space-y-1'>
                    <label htmlFor="email" className='font-semibold'>Email</label>
                    <input type="email" id="email" className='border border-gray-300 p-1 rounded-md hover:border-blue-500' required />
                </div>
                <div className='flex flex-col space-y-1'>
                    <label htmlFor="password" className='font-semibold'>Password</label>
                    <input type="password" id="password" className='border border-gray-300 p-1 rounded-md hover:border-blue-500' required />
                </div>
                <p className='font-semibold'>Don't have an account? <a href="/register" className='text-blue-600 hover:underline font-semibold'>Signup</a></p>
                <button type="submit" className='w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700'>Login</button>
            </form>
        </div>
    </div>
  );
}
