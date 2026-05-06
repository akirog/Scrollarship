import { NavLink } from 'react-router'
import Login from './Auth'

function Nav(props) {

    if (props.logged_in) {
        return (
            <header>
                <nav>
                    <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
                    <div className='signInContainer'>
                    </div>

                </nav>
            </header>
        )
    }
    return (
        <header>
            <nav>
                <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
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