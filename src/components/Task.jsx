import { useState } from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

function checkAnswer(answer) {
    console.log(answer)
}

function Task({ question, math, correctAnswer }) {
    const [answer, setAnswer] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setAnswer('')
        
        checkAnswer(answer)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='ftext'>{question} <InlineMath math={math} /></label><br />
                <input type='text' id='ftext' onChange={event => setAnswer(event.target.value)} value={answer} required/><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Task