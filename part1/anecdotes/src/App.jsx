import { useState } from 'react'


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const DisplayAnecdote = ({ votes, anecdote, header }) => {
  return (
    <div>
      <h2>{header}</h2>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const [highestVoted, setHighestVoted] = useState(0)
  return (
    <div>
      <DisplayAnecdote
        votes={votes[selected]}
        anecdote={anecdotes[selected]}
        header="Anecdote of the day"
      />
      <Button
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * anecdotes.length)
          setSelected(randomNumber)
        }}
        text="Next anecdote" />

      <Button onClick={() => {
        const arrCopy = [...votes]
        arrCopy[selected]++
        setVotes(arrCopy)
        if (arrCopy[selected] > arrCopy[highestVoted]) {
          setHighestVoted(selected)
        }
      }
      }
        text="vote"
      />
      <DisplayAnecdote
        votes={votes[highestVoted]}
        anecdote={anecdotes[highestVoted]}
        header="Anecdotes with most votes"
      />
    </div>
  )
}

export default App