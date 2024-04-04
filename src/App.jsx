import { useState } from 'react'
import LoginForm from './components/LoginForm'
import ChatRoom from './components/ChatRoom'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <main>
      <LoginForm />

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </main>
  )
}

export default App