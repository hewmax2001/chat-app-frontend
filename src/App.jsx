import { useState } from 'react'
import LoginForm from './components/LoginForm'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <main>
      <LoginForm />
    </main>
  )
}

export default App