import { useState } from 'react'
import LoginForm from './components/LoginForm'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm />
    </>
  )
}

export default App