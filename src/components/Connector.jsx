import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Connector(props) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [claims, setClaims] = useState(null)
  const navigate = useNavigate();

  const location = useLocation()
  const [isSignUp, setIsSignUp] = useState(location.state?.signUp ?? false)

  const [error, setError] = useState('')


  const handleLogin = async (event)=> {
    event.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.toString())
    }

    setLoading(false)
  }



  const handleSignUp = async (event)=> {
    event.preventDefault()
    setLoading(true)

    const error = await supabase.auth.signUp({ email, password })

    if (error) {
      setError(error.toString())
    }

    setLoading(false)
  }


  useEffect(() => {
    supabase.auth.getClaims().then(({ data: { claims } }) => setClaims(claims))

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(
          ({ data: { claims } }) => {
            setClaims(claims)

            if (claims) {
              navigate('/')
            }
          })

      // If user is logged in, show welcome screen

    })

    return () => subscription.unsubscribe()

  }, [])


  const changeButton = <button onClick={() => setIsSignUp(!isSignUp)}>
    {isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
  </button>

  // Show login form
  if (!isSignUp) {
    return (
        <>
          <h1>Log In</h1>
          <form onSubmit={handleLogin}>
            <input
                type='email'
                placeholder='Your email'
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
            />
            <h4>{error}</h4>
            <button disabled={loading}>
              {loading ? <span>Loading</span> : <span>Log in</span>}
            </button>
          </form>

          {changeButton}
        </>
    )
  } else {
    return (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <input
                type='email'
                placeholder='Your email'
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
            />
            <h4>{error}</h4>
            <button disabled={loading}>
              {loading ? <span>Loading</span> : <span>Sign Up</span>}
            </button>
          </form>

          {changeButton}
        </>
    )
  }
}

export default Connector
