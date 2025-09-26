import React from 'react'
import '../css/Educare.css';

function LoginPage() {
  return (
    <div className='login-container'>
        <div className='login-card'>
            <h2>Welcome Back to Educare</h2>
            <h4>Login to access your dashboard</h4>
            <form className='login-form'>
                <div className='form-group'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" id="email" className='input' required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password" className='label'>Password</label>
                    <input type="password" id="password" className='input' required />
                </div>
                <p className='login-p'>Don't have an account? <a className='login-a' href="/register">Sign up</a></p>
                <button type="submit" className='login-button'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage