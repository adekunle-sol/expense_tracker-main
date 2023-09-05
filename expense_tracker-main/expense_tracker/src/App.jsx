// import React from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { addTransaction } from "./redux/actions";

import AddTransaction from './components/AddTransaction/AddTransaction'
import History from './components/History/History'
import Balance from './components/Balance/Balance'
import './App.css'

function App({ transactions, addTransaction }) {
  // const {transactions, addTransaction} = props
  return (
    <div className='main'>
      <Balance transactions={transactions} />
      <History transactions={transactions} />
      <AddTransaction
        addTransaction={addTransaction}
      />
    </div>
  )
}

App.propTypes = { // Define the prop types
  transactions: PropTypes.array.isRequired,
  addTransaction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = {
  addTransaction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);