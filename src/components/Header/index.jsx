import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/registre">Registre</Link>
    </nav>
  )
}

export default Header
