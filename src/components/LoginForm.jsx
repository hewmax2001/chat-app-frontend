import { useState } from 'react'
import './login.css'

const LoginForm = () => {

    // Replace with textField hook?
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(username, password)
    }

    return (
      <div className='login-container'>
        <form className='login-form' onSubmit={handleLogin}>
          <div>
            <p>Username</p>
            <input type='text' name='username' value={username} 
            onChange={({target}) => setUsername(target.value)}/>
          </div>
          <div>
            <p>Password</p>
            <input type='password' name='password' value={password}
            onChange={({target}) => setPassword(target.value)}/>
          </div>
          <div>
            <button className='login-button' type='submit'>Login</button>
          </div>
          <p>Don't have an account? <a href='register'>register</a></p>
        </form>
      </div>
    )
}

export default LoginForm