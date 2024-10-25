import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine=({text,value})=>{
  if(text==='positive'){
    return(
    <tr>
    <td>{text}</td>
    <td>{value}%</td>
    </tr>
    )
  }
  return(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}
const Statistics =(props) => {
  if(props.allClicks.length ===0){
    return(
      <div>
        <h3>No feedback given yet</h3>
      </div>
    )
  }
  return(
    <div>
    <h1>STATISTICS</h1>
    <table>
    <StatisticLine text={'good'} value={props.good} />
    <StatisticLine text={'neutral'} value={props.neutral} />
    <StatisticLine text={'bad'} value={props.bad} />
    <StatisticLine text={'all'} value={props.total} />
    <StatisticLine text={'average'} value={props.sum/props.total} />
    <StatisticLine text={'positive'} value={props.good/props.total * 100} />
    </table>
    </div>
  )
}

const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    const ngood= good+1
    setGood(ngood)
    setTotal(ngood+bad+neutral)
    setAll(allClicks.concat(1))
  }
  const handleBad = () => {
    const nbad= bad+1 
    setBad(nbad)
    setTotal(good+nbad+neutral)
    setAll(allClicks.concat(-1))
  }
  const handleNeutral = () => {
    const nneutral = neutral+1
    setNeutral(neutral+1)
    setTotal(good+bad+nneutral)
    setAll(allClicks.concat(0))
  }

  const sum = allClicks.reduce((acc,val)=>acc+val,0)
  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Button handleClick={handleGood} text={'good'} />
      <Button handleClick={handleNeutral} text={'neutral'} />
      <Button handleClick={handleBad} text={'bad'} />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} sum={sum} allClicks={allClicks} />  
      </div>
  )
}
export default App