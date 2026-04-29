import { NavLink } from 'react-router'

function Nav() {
    return (
        <header>
            <nav>
                <NavLink to='/explore'>Explore</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        </header>
    )
}
export default Nav