import { useState } from 'react'
import LoginForm from './components/LoginForm'
import ChatRoom from './components/ChatRoom'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm />

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </>
  )
}

export default App