import PropTypes from 'prop-types'
import HistoryList from "./HistoryList";

const History = ({ transactions }) => {
  return (
    <>
    <div className="history">
      <h3 className="sub-header">History</h3>
        <hr></hr>
      <div className="">
       {transactions.map(transaction => (
        <HistoryList key={transaction.id} transaction={transaction} />
       ))}
      </div>
    </div> 
    </>
  )
}

History.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      // Add any other expected properties of the transaction here
    })
  ).isRequired,
};

export default History;