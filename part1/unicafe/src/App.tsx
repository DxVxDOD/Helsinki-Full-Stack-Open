import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allFeedback = () => good + bad + neutral;

  const averageFeedback = () => (good + (bad * -1)) / allFeedback();

  const positiveFeedback = () => (good / allFeedback()) * 100;

  return (
    <>
    <h1>Give Feedback</h1>
    <button onClick={() => setGood(good + 1)} >Good</button>
    <button onClick={() => setNeutral(neutral + 1)} >Neutral</button>
    <button onClick={() => setBad(bad + 1)} >Bad</button>
    <h1>Statistics</h1>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>All: {allFeedback()}</li>
      <li>Average: {averageFeedback()}</li>
      <li>Positive: {positiveFeedback()}</li>
    </ul>
    </>
  )
}

export default App