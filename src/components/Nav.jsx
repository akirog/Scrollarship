import { NavLink } from 'react-router'
import { supabase } from './supabase'
import { useEffect, useState } from 'react'

function Nav() {
  const [loading, setLoading] = useState(true)
  const [claims, setClaims] = useState(null)

  useEffect(() => {
    supabase.auth.getClaims().then(({ data: { claims } }) => setClaims(claims))

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(({ data: { claims } }) => setClaims(claims))
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } else if (claims) {
    return (
      <header>
        <nav>
          <NavLink to='/'><img src={'/static/images/logoName.svg'} alt='Scrollarship mascot' className='navigationLogo' /></NavLink>
          <div className='elements'>
            <NavLink to='/account'><img className='profilePicture' src={'/static/images/account.svg'} alt='Profile'></img></NavLink>
          </div>
        </nav>
      </header>
    )
  } else {
    return (
        <header>
            <nav>
                <NavLink to='/'><img src={'/static/images/logoName.svg'} alt='Scrollarship mascot' className='navigationLogo'/></NavLink>
                {
                    claims ?
                    (<div className='elements'>
                        <NavLink to='/account'><img className='profilePicture' src={'/static/images/account.svg'} alt='Profile'></img></NavLink>
                    </div>)
                    : 
                    (<div className='signLogContainers'>
                        <button className='login'>
                            <NavLink to='/auth'>Login</NavLink>
                        </button>
                        <button className='signUp'>
                            <NavLink to='/auth' state={{ signUp: true }}>Sign Up</NavLink>
                        </button>
                    </div>)
                }

            </nav>
        </header>
    )
  }
}

export default Nav
