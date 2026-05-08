import { NavLink } from 'react-router'
import Login from './Auth'

function Nav() {
    return (
        <header>
            <nav>
                <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
                <div className='logInContainer'>
                    <button>
                        <NavLink to='/auth' color='white' text-decoration='none'>Login</NavLink>
                    </button>
                </div>
                <div className='signInContainer'>
                    <button>
                        <NavLink to='/auth' color='white' text-decoration='none'>Sign In</NavLink>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Nav