import { useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Replace with textField hook?
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
      event.preventDefault()
      try {
        await dispatch(loginUser(username, password))
        setUsername('')
        setPassword('')
        navigate('/')
      } catch(error) {
        console.error(`Error occured: ${error}`)
      }
  }

  return (
    <div className='center-wrapper'>
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