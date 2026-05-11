// Code acquired from https://supabase.com/docs/guides/auth/quickstarts/react
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Nav from "./Nav.jsx";

import { useNavigate } from 'react-router-dom'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)


function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [claims, setClaims] = useState(null)
  const navigate = useNavigate();


  const handleLogin = async (event)=>{
    event.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      // try registering instead
      const { error: signUpError } = await supabase.auth.signUp({ email, password })
      console.log(signUpError)
    }

    setLoading(false)
  }


  useEffect(() => {
    supabase.auth.getClaims().then(({ data: { claims } }) => setClaims(claims))

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(({ data: { claims } }) => setClaims(claims))
    })

    return () => subscription.unsubscribe()


  }, [])


  // If user is logged in, show welcome screen
  if (claims) {
    navigate('/')
  }

  // Show login form
  return (
    <>
      <h1>Sign In</h1>
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
    </>
  )
}

export default Auth