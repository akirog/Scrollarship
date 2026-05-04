import { NavLink } from 'react-router'

function Nav() {
    return (
        <header>
            <nav>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/login'>Sign Up</NavLink>
            </nav>
            <div>
                <h1>This yo account type shit</h1>
            </div>


        </header>
    )
}
export default Nav