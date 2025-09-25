import React from 'react'
import '../css/Login.css';

function LoginPage() {
  return (
    <div className='login-container'>
        <div className='login-card'>
            <h2>Login to EduCare</h2>
            <form className='login-form'>
                <div className='form-group'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" id="email" className='input' required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password" className='label'>Password</label>
                    <input type="password" id="password" className='input' required />
                </div>
                <button type="submit" className='login-button'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage