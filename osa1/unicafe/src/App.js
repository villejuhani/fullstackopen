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


const StatisticLine = ({text, value}) => {
  if (text === "positive")
  return (
    <div>
    {text} {value} %
    </div>
  )
  return (
    <div>
      {text} {value}
    </div>
  )
}


const Statistics = (props) =>{
  console.log(props)
  if (props.all === 0)
    return (
      <div>
        No feedback given
      </div>
    )

  return (
    <table>
      <tbody>
        <tr><td><StatisticLine text="good" value ={props.good}/></td></tr>
        <tr><td><StatisticLine text="neutral" value ={props.neutral}/></td></tr>
        <tr><td><StatisticLine text="bad" value ={props.bad}/></td></tr>
        <tr><td><StatisticLine text="all" value ={props.all}/></td></tr>
        <tr><td><StatisticLine text="average" value ={props.average}/></td></tr>
        <tr><td><StatisticLine text="positive" value ={props.positive}/></td></tr>
      </tbody>
    </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAvg(avg + 1)
  }

  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAvg(avg+0)

  }
  
  const handleSetBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAvg(avg-1)

  }

  let average = avg / all
  let positive = good / all * 100
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleSetGood} text='good'/>
      <Button handleClick={handleSetNeutral} text='neutral'/>
      <Button handleClick={handleSetBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}


export default App