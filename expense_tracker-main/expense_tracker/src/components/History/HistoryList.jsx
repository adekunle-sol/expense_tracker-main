import PropTypes from 'prop-types';
export default function HistoryList({transaction}) {
    let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <>
      <div className='history-element'>
          <p className="history-title">{transaction.text}</p>
          <p className="history-amount">{sign}${Math.abs(transaction.amount)}</p>
      </div>
    </>
  )
}

HistoryList.propTypes = {
  transaction: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    text: PropTypes.string, // Include if text is expected
    // Add any other expected properties of the transaction here
  }).isRequired,
};