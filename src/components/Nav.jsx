import { NavLink } from 'react-router'
import { supabase } from '../supabase.js'
import {useEffect, useState} from "react";
import './Nav.css'


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

    if (loading) return (<h1>Loading...</h1>)

    if (claims) {
        return (
            <header>
                <nav>
                    <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
                    <div className='Elements'>
                        <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())}>Log out type shi</button>
                        <img className='bofilePicture' src='src/assets/BOFILEPICTURE.png' alt='BOFILEPICTURE'></img>
                    </div>
                </nav>
            </header>
        )
    }


    return (
        <header>
            <nav>
                <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
                <div className='signLogContainers'>
                    <button className='login' color='white'>
                        <NavLink to='/auth'>Login</NavLink>
                    </button>
                    <button className='signUp' color='white'>
                        <NavLink to='/auth'>Sign Up</NavLink>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Nav