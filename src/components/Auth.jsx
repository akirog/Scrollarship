// Code acquired from https://supabase.com/docs/guides/auth/quickstarts/react
import { useState, useEffect } from 'react'
import {supabase} from "../supabase.js";

import { useNavigate } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

function Auth(props) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [claims, setClaims] = useState(null)
  const navigate = useNavigate();

  const location = useLocation()
  const [isSignUp, setIsSignUp] = useState(location.state?.signUp ?? false)


  const handleLogin = async (event)=> {
    event.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      // try registering instead
      console.log("Sign in error:" + error)
      const { error: signUpError } = await supabase.auth.signUp({ email, password })
      console.log(signUpError)
    }

    setLoading(false)
  }



  const handleSignUp = async (event)=>{
    event.preventDefault()
    setLoading(true)

    const error = await supabase.auth.signUp({ email, password })

    if (error) {
      console.log("Sign up error:" + error)
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
                type="email"
                placeholder="Your email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
            />
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
                type="email"
                placeholder="Your email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={loading}>
              {loading ? <span>Loading</span> : <span>Sign Up</span>}
            </button>
          </form>

          {changeButton}
        </>
    )
  }
}

export default Auth