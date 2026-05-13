import { useState } from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

function checkAnswer(answer) {
    console.log(answer)
}

function Task({ question }) {
    const [answer, setAnswer] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setAnswer('')
        
        checkAnswer(answer)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='ftext'><InlineMath math={'2^2'} /></label><br />
                <input type='text' id='ftext' onChange={event => setAnswer(event.target.value)} value={answer} required/><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Task