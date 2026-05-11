import { NavLink } from 'react-router'
import Login from './Auth'
import {createClient} from "@supabase/supabase-js";
import './Nav.css'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)

function Nav() {

    var claims = supabase.auth.getClaims()

    if (claims) {
        return (
            <header>
                <nav>
                    <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
                    <div className='signInContainer'>
                    </div>

                    <h1>Wallahi du er logged in</h1>

                </nav>
            </header>
        )
    }


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