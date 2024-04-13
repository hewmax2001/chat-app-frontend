import ChatRoom from './components/ChatRoom'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </>
  )
}

export default App