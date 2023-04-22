import feedbackStatistic from '../types/statistics.type';
import StatisticsLine from './StatisticsLine';

const Statistics = ({good, neutral, bad, allFeedback, averageFeedback, positiveFeedback}: feedbackStatistic) => {
    if(allFeedback === 0) {
        return (
            <h1>No feedback given</h1>
        )
    }
    else {
        return (
            <>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticsLine text='Good' value={good}/>
                    <StatisticsLine text='Neutral' value={neutral} />
                    <StatisticsLine text='Bad' value={bad}/>
                    <StatisticsLine text='All' value={allFeedback}/>
                    <StatisticsLine text='Average' value={averageFeedback}/>
                    <StatisticsLine text='Positive' value={positiveFeedback}/>
                </tbody>
            </table>
            </>
          )
    }
}

export default Statistics