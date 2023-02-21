import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const handleClickLogin = () => {
    setUser(true)
    navigate('/')
  }
  return (    
    <>
      <h2>
        {
          user ? 'Online' : 'Offline'
        }
      </h2>
      <button onClick={handleClickLogin}>Entrar</button>
    </>
  )
}

export default Login