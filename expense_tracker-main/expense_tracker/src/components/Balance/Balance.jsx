import PropTypes from 'prop-types'

const Balance = ({ transactions = [] }) => {
    const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc - t.amount, 0)
    const total = income - expense;

  return (
    <>
        <header className="header">
            <h1 >Expense Tracker</h1>
        </header>
        <div className="your-balance">
            <h3 className="your-balance_header">Your Balance</h3>
            <h1 className="your-balance_amount">${total}</h1>
        </div>
        <div className="balance">
            <div className="income element">
                <h5 className="income_header bal-header">Income</h5>
                <h3 className="income_amount">${income.toFixed(2)}</h3>
            </div>
            <div className="vertical-seperator"></div>
            <div className="expense element">
                <h5 className="expense_header bal-header">Expense</h5>
                <h3 className="expense_amount">${expense.toFixed(2)}</h3>
            </div>
        </div>
    </>
  )
}

Balance.propTypes = {
    transactions: PropTypes.array.isRequired,
}

export default Balance;
