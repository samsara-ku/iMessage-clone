import React from 'react'
import './App.css'
import IMessage from './Imessage'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Login from './Login'

function App() {
  const user = useSelector(selectUser)

  return <div className="app">{user ? <IMessage /> : <Login />}</div>
}

export default App
