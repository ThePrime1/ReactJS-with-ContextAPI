import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>FL4NKER</h1>

                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/about'>About</Link> </li>
                    <li> <Link to='/contact'>Contact</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
