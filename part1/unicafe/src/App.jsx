import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ value, text }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}

const Statistics = ({ good, neutral, bad, total }) => {

  if (total > 0) {
    const average = (good - bad) / total
    const positive = (good / total) * 100
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine value={good} text="good" />
            <StatisticsLine value={neutral} text="neutral" />
            <StatisticsLine value={bad} text="bad" />
            <StatisticsLine value={average} text="average" />
            <StatisticsLine value={positive} text="positive" />
          </tbody>
        </table>
      </>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}
export default App
