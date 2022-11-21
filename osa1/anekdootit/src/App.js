import { useState } from 'react'

const Button = (props) => { 
  console.log(props)
  const { handleClick, text } = props
  return(
  <button onClick={handleClick}>
    {text}
  </button>
  )
  }

const MostVoted = (props) => {
  console.log(props)
  let mostVotes = 0
  let mostVoted = 0
  for (let i = 0; i < props.votepoints.length; i++) {
    if (props.votepoints[i] > mostVotes) {
      mostVoted = i
      mostVotes = props.votepoints[i]
    }
  }

  return (
    <div>
      <p>{props.anecdotes[mostVoted]}</p>
      <p>has {props.votepoints[mostVoted]} votes</p>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const points = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  
  const [selected, setSelected] = useState(0)
  const [votepoints, setVotes] = useState(points)

  const handleSetSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleSetVotes = () => {
    const copy = [...votepoints]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votepoints[selected]} votes</p>
      <Button handleClick={handleSetVotes} text='vote'/>
      <Button handleClick={handleSetSelected} text='next anecdote'/>
      <h1>Anectode with most votes</h1>
      <MostVoted anecdotes={anecdotes} votepoints={votepoints}/>
    </div>
  )
}

export default App