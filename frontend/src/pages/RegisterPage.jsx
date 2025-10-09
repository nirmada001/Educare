import React from 'react'

const className  = () => {
  return (
    <div className='register-container'>
        <div className='register-card'>
            <h2>Join Educare Today</h2>
            <h4>Create your account to get started</h4>
            <form className='register-form'>
                <div className='form-group'>
                    <label htmlFor="name" className='label'>Name</label>
                    <input type="text" id="name" className='input' required />
                </div>
                <div className='form-group'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" id="email" className='input' required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password" className='label'>Password</label>
                    <input type="password" id="password" className='input' required />
                </div>
                <p className='register-p'>Already have an account? <a className='register-a' href="/">Login</a></p>
                <button type="submit" className='register-button'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default className 