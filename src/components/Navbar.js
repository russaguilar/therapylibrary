import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to='/' className="brand">
            <h2>Therapy Library</h2>
            </Link>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/exercise'>Exercises</Link></li>
            </ul>
        </nav>
    </div>
  )
}
