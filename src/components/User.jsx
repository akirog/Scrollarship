
import { supabase } from "../supabase.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";



function User() {

    const [tab, setTab] = useState('stats')
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getClaims().then(({data}) => {
            if (!data?.claims) {
                navigate('/auth')
            }
        })

        return () => {}
    }, [])

    return (
        <main>
            <h1>Welcome to account!</h1>

            <Buttons setTab={setTab} tab={tab} />

            <br/>

            {tab === 'stats' && <Stats />}
            {tab === 'account' && <Account />}
            {tab === 'accessibility' && <Accessibility />}
            {tab === 'security' && <Security />}
            {tab === 'preferences' && <Preferences />}
        </main>
    )
}


function Buttons(props) {

    return (
        <>
            <button className="tabButton" onClick={() => props.setTab('stats')}>Stats</button>
            <button className="tabButton" onClick={() => props.setTab('account')}>Account</button>
            <button className="tabButton" onClick={() => props.setTab('accessibility')}>Accessibility</button>
            <button className="tabButton" onClick={() => props.setTab('security')}>Security</button>
            <button className="tabButton" onClick={() => props.setTab('preferences')}>Preferences</button>
        </>
    )

}


function Stats() {


    return (
        <>
            <h2>Naturfag 15/100</h2>
            <h2>Matte 2/100</h2>
            <h2>Smart 63/100</h2>
            <h2>Vet mye 18/100</h2>
            <h2>Kan alt 100/100</h2>
        </>
    )
}

function Account() {
    const [displayEmail, setDisplayEmail] = useState("")

    useEffect(() => {
        supabase.auth.getClaims().then(({data}) => {
            if (data.claims.email) {
                setDisplayEmail(data.claims.email)
            }
        })

        return () => {}
    }, [])


    return (
        <>
            <h1>Make account stuff</h1>
            <h2>email: {displayEmail}</h2>

            <SignOut />
        </>
    )
}

function Accessibility() {
    return (
        <>
            <h1>Make accessibility stuff</h1>
            <h2>jizzy christmas</h2>
        </>
    )
}

function Security() {
    return (
        <h1>Make security stuff</h1>
    )
}

function Preferences() {
    return (
        <>
            This yo preferences or sum shit.
        </>
    )
}




function SignOut() {
    return (
        <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())}>Sign Out</button>
    )
}


export default User