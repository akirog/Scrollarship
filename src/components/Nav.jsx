import { NavLink } from 'react-router'
import Login from './Auth'

function Nav() {
    return (
        <header>
            <nav>
                <img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' />
                <div className='signInContainer'>
                    <button>
                        <NavLink to='/auth'>Sign In</NavLink>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Nav