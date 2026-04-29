import { NavLink } from 'react-router'

function Nav() {
    return (
        <header>
            <nav>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/login'>Sign Up</NavLink>
            </nav>
            <div>
                <div>
                    <h1>Learn Better Faster</h1>
                    <p>
                        Scrollarship is a platform tailored for teens wanting to improve their academic performance through interactive and visual learning
                    </p>
                    <NavLink to='/explore'>Get Started</NavLink>
                </div>

            </div>


        </header>
    )
}
export default Nav