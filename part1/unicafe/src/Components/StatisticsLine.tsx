
const StatisticsLine = ({text, value}: {text: string, value: number}) => {
  return (
    <tr>
    <td>{text}:  </td><td>{value}</td>
    </tr>
  )
}

export default StatisticsLine