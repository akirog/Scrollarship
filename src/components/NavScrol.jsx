import { NavLink } from 'react-router'
import './NavScrol.css'

function NavScrol() {
    return (
        <body>
            <scrollnav>
                <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
                
            </scrollnav>
        </body>
    )
}