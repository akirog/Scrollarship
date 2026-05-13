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


    return (
        <header>
            <nav>
                <NavLink to='/'><img src='/src/assets/LogoName.svg' alt='Scrollarship mascot' /></NavLink>
                <NavLink to='/home'>Home</NavLink>
                {
                    claims ?
                    (<div className='Elements'>
                        <NavLink to='/account'><img className='bofilePicture' src='src/assets/BOFILEPICTURE.png' alt='BOFILEPICTURE'></img></NavLink>
                    </div>)
                    :
                    (<div className='signLogContainers'>
                        <button className='login' color='white'>
                            <NavLink to='/auth'>Login</NavLink>
                        </button> x
                        <button className='signUp' color='white'>
                            <NavLink to='/auth' state={{ signUp: true }}>Sign Up</NavLink>
                        </button>
                    </div>)
                }

            </nav>
        </header>
    )

}
export default Nav