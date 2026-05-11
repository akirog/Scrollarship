import { NavLink } from 'react-router'
import { supabase } from '../supabase.js'
import {useEffect, useState} from "react";



function Nav() {

    const [loading, setLoading] = useState(true);
    const [claims, setClaims] = useState(null)


    useEffect(() => {
        supabase.auth.getClaims().then(({ data: { claims } }) => setClaims(claims))

        const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
            supabase.auth.getClaims().then(({ data: { claims } }) => setClaims(claims))
            setLoading(false)
        })

        return () => subscription.unsubscribe()


    }, [])

    if (loading) return null

    if (claims) {
        return (
            <header>
                <nav>
                    <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
                    <div className='signInContainer'>
                    </div>

                    <h1>Wallahi du er logged in</h1>
                    <button
                        onClick={() => supabase.auth.signOut().then(() => window.location.reload())}
                    >Log out type shi</button>

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