import { NavLink } from 'react-router'
import { supabase } from '../supabase.js'
import {useEffect, useState} from "react";
import './Nav.css'


function Nav() {
    const [loading, setLoading] = useState(true);
    const [claims, setClaims] = useState(null)

    const buttonStyle = {
        backgroundColor: "#F4C10B",
        border: "none",
        borderRadius: "0.5rem",
        fontSize: "20px",
    }


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
                <div className='HomeContainer'>
                    <NavLink to='/home' className='Home'>About Us</NavLink>
                </div>
                {
                    claims ?
                    (<div className='Elements'>
                        <NavLink to='/account'><img className='bofilePicture' src='src/assets/BOFILEPICTURE.png' alt='BOFILEPICTURE'></img></NavLink>
                    </div>)
                    : 
                    (<div className='signLogContainers'>
                        <button className='login'>
                            <NavLink to='/auth'>Login</NavLink>
                        </button>
                        <button className='signUp' style={buttonStyle}>
                            <NavLink to='/auth' state={{ signUp: true }}>Sign Up</NavLink>
                        </button>
                    </div>)
                }

            </nav>
        </header>
    )

}
export default Nav