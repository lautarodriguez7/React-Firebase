import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
    {
      user 
      ? <>
      <Link to='/'>Inicio</Link> 
      <button onClick={() => setUser(false)}>Cerrar Sesion</button>
      </>
      :
        <Link to='/login'>Login</Link>
    }
    </>
  )
}

export default NavBar