// "use client"
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import styles from '../Transactions/transactions.module.css';


// const Transactions = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const res = await axios.get('/api/transactions');
//       setTransactions(res.data.data);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   const handleAddTransaction = async () => {
//     try {
//       const newTransaction = { description, amount: parseFloat(amount) };
//       await axios.post('/api/transactions', newTransaction);
//       fetchTransactions();
//       setDescription('');
//       setAmount('');
//     } catch (error) {
//       console.error('Error adding transaction:', error);
//     }
//   };

//   const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
//   const totalIncome = transactions.filter(txn => txn.amount > 0).reduce((acc, txn) => acc + txn.amount, 0);
//   const totalExpenses = transactions.filter(txn => txn.amount < 0).reduce((acc, txn) => acc + txn.amount, 0);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.h1style}>Total Balance: ₹{totalBalance.toFixed(2)}</h1>
//       <div className={styles.summary}>
//         <div className={styles.income}>Total Income: ₹{totalIncome.toFixed(2)}</div>
//         <div className={styles.expenses}>Total Expenses: ₹{totalExpenses.toFixed(2)}</div>
//       </div>
//       <div className={styles.history}>
//         <h2>Transaction List</h2>
//         {transactions.map(transaction => (
//           <div key={transaction._id} className={styles.transaction}>
//             <span>{transaction.description}</span>
//             <span>{transaction.amount > 0 ? `+₹${transaction.amount.toFixed(2)}` : `-₹${transaction.amount.toFixed(2)}`}</span>
//           </div>
//         ))}
//       </div>
//       <div className={styles.form}>
//         <h2>Add New Transaction</h2>
//         <input
//         className={styles.inp}
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//         className={styles.inp}
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <button className={styles.btn} onClick={handleAddTransaction}>Add Transaction</button>
//       </div>
//     </div>
//   );
// };
// export default Transactions;


// // pages/transactions.js
// "use client";
// import { useState, useEffect } from 'react';
// import styles from '../Transaction/transactions.module.css';

// const Transactions = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [totalBalance, setTotalBalance] = useState(0);
//   const [totalIncome, setTotalIncome] = useState(0);
//   const [totalExpense, setTotalExpense] = useState(0);
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     const response = await fetch("api/transactions");
//     const data = await response.json();
//     setTransactions(data);
//     calculateTotals(data);
//   };

//   const calculateTotals = (data) => {
//     const income = data.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
//     const expense = data.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
//     setTotalIncome(income);
//     setTotalExpense(expense);
//     setTotalBalance(income + expense);
//   };

//   const addTransaction = async () => {
//     const newTransaction = { description, amount: parseFloat(amount) };
//     const response = await fetch("api/transactions", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newTransaction)
//     });
//     if (response.ok) {
//       fetchTransactions();
//       setDescription('');
//       setAmount('');
//     } else {
//       console.error('Failed to add transaction', response.statusText);
//     }
//   };
  

//   const deleteTransaction = async (name) => {
//     const response = await fetch(`/api/transactions/${encodeURIComponent(name)}`, {
//       method: 'DELETE'
//     });
//     if (response.ok) {
//       fetchTransactions();
//     }
//   };

//   const editTransaction = async (name, newDescription, newAmount) => {
//     const response = await fetch(`/api/transactions/${encodeURIComponent(name)}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ description: newDescription, amount: parseFloat(newAmount) })
//     });
//     if (response.ok) {
//       fetchTransactions();
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Total Balance: ₹{totalBalance.toFixed(2)}</h1>
//       <h2 className={styles.income}>Total Income: ₹{totalIncome.toFixed(2)}</h2>
//       <h2 className={styles.expense}>Total Expense: ₹{totalExpense.toFixed(2)}</h2>
//       <div className={styles.history}>
//         <h3>Transaction History</h3>
//         <ul>
//           {transactions.map(transaction => (
//             <li key={transaction._id} className={transaction.amount > 0 ? styles.income : styles.expense}>
//               {transaction.description}: ₹{transaction.amount.toFixed(2)}
//               <button onClick={() => deleteTransaction(transaction.description)}>Delete</button>
//               <button onClick={() => editTransaction(transaction.description, prompt('New Description'), prompt('New Amount'))}>Edit</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.form}>
//         <h3>Add Transaction</h3>
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Description"
//         />
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Amount (negative for expense, positive for income)"
//         />
//         <button onClick={addTransaction}>Add Transaction</button>
//       </div>
//     </div>
//   );
// };

// export default Transactions;


// pages/transactions.js
"use client";
import { useState, useEffect } from 'react';
import styles from '../Transaction/transactions.module.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState(''); // User's email

  useEffect(() => {
    fetchTransactions();
  }, [email]);

  const fetchTransactions = async () => {
    if (!email) return;
    const response = await fetch(`/api/transactions?email=${email}`);
    const data = await response.json();
    setTransactions(data);
    calculateTotals(data);
  };

  const calculateTotals = (data) => {
    const income = data.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
    const expense = data.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
    setTotalIncome(income);
        setTotalExpense(expense);
    setTotalBalance(income + expense);
  };

  const addTransaction = async () => {
    const newTransaction = { description, amount: parseFloat(amount), email };
    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    });
    if (response.ok) {
      fetchTransactions();
      setDescription('');
      setAmount('');
    } else {
      console.error('Failed to add transaction', response.statusText);
    }
  };

  const deleteTransaction = async (id) => {
    const response = await fetch(`/api/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    if (response.ok) {
      fetchTransactions();
    }
  };

  const editTransaction = async (id, newDescription, newAmount) => {
    const response = await fetch(`/api/transactions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: newDescription, amount: parseFloat(newAmount), email })
    });
    if (response.ok) {
      fetchTransactions();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Total Balance: ₹{totalBalance.toFixed(2)}</h1>
      <h2 className={styles.income}>Total Income: ₹{totalIncome.toFixed(2)}</h2>
      <h2 className={styles.expense}>Total Expense: ₹{totalExpense.toFixed(2)}</h2>
      <div className={styles.history}>
        <h3>Transaction History</h3>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction._id} className={transaction.amount > 0 ? styles.income : styles.expense}>
              {transaction.description}: ₹{transaction.amount.toFixed(2)}
              <button onClick={() => deleteTransaction(transaction._id)}>Delete</button>
              <button onClick={() => editTransaction(transaction._id, prompt('New Description'), prompt('New Amount'))}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.form}>
        <h3>Add Transaction</h3>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (negative for expense, positive for income)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
    </div>
  );
};

export default Transactions;