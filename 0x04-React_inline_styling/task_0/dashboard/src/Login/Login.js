import React from 'react'

const Login = () => {
  return (
    <div>
         <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor='email'>Email:</label>
        <input type='email' ></input>
        <label htmlFor='password'>Password:</label>
        <input type='password' ></input>
        <button ttpe='submit'>OK</button>
      </div>
    </div>
  )
}

export default Login