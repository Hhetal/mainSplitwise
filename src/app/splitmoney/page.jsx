// "use client"
// import { useState } from 'react';
// import styles from '../splitmoney/splitwise.module.css';

// export default function SplitMoney() {
//   const [totalExpense, setTotalExpense] = useState(0);
//   const [numberOfPeople, setNumberOfPeople] = useState(1);
//   const [splitAmount, setSplitAmount] = useState(0);

//   const handleSplit = () => {
//     const amountPerPerson = totalExpense / numberOfPeople;
//     setSplitAmount(amountPerPerson.toFixed(2));
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Split Money</h1>
//       <div className={styles.inputContainer}>
//         <label htmlFor="totalExpense">Total Expense: </label>
//         <input
//           type="number"
//           id="totalExpense"
//           className={styles.inputField}
//           value={totalExpense}
//           onChange={(e) => setTotalExpense(parseFloat(e.target.value))}
//         />
//       </div>
//       <div className={styles.inputContainer}>
//         <label htmlFor="numberOfPeople">Number of People: </label>
//         <input
//           type="number"
//           id="numberOfPeople"
//           className={styles.inputField}
//           value={numberOfPeople}
//           onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
//         />
//       </div>
//       <button className={styles.splitButton} onClick={handleSplit}>
//         Split Money
//       </button>
//       {splitAmount > 0 && (
//         <div className={styles.resultContainer}>
//           <h2>Each Person Owes: ₹{splitAmount}</h2>
//         </div>
//       )}
//     </div>



    
    
//   );
// }




"use client";
import { useState } from 'react';
import styles from '../splitmoney/splitwise.module.css';
import Image from 'next/image';
import img from "../../../images/myGIF3.gif";
import Footer from "../footer/footer"
import Navbar from "../navbar/navbar";

export default function SplitMoney() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [splitAmount, setSplitAmount] = useState(0);

  const handleSplit = () => {
    const amountPerPerson = totalExpense / numberOfPeople;
    setSplitAmount(amountPerPerson.toFixed(2));
  };

  return (
    <div>
    <Navbar />
    <div className={styles.container}>
      
      <div className={styles.leftColumn}>
        
        <h1 className={styles.htag}>Split Money</h1>
        <div className={styles.inputContainer}>
          
          <label htmlFor="totalExpense">Total Expense: </label>
          <input
            type="number"
            id="totalExpense"
            className={styles.inputField}
            value={totalExpense}
            onChange={(e) => setTotalExpense(parseFloat(e.target.value))}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="numberOfPeople">Number of People: </label>
          <input
            type="number"
            id="numberOfPeople"
            className={styles.inputField}
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
          />
        </div>
        <button className={styles.splitButton} onClick={handleSplit}>
          Split Money
        </button>
        {splitAmount > 0 && (
          <div className={styles.resultContainer}>
            <h2>Each Person Owes: ₹{splitAmount}</h2>
          </div>
        )}
      </div>
      <div className={styles.rightColumn}>
        <Image src={img} alt="Not found" width={370} height={350}  className={styles.gif} />
        <div>
      <Footer />
      </div>
      </div>
      </div>
    </div>
  );
}





// OLD
// "use client";
// import { useState } from 'react';
// import Image from 'next/image';
// import styles from '../splitmoney/splitwise.module.css';
// import image from "../../../images/myGIF3.gif";


// export default function SplitMoney() {
//   const [totalExpense, setTotalExpense] = useState(0);
//   const [numberOfPeople, setNumberOfPeople] = useState(1);
//   const [splitAmount, setSplitAmount] = useState(0);

//   const handleSplit = () => {
//     const amountPerPerson = totalExpense / numberOfPeople;
//     setSplitAmount(amountPerPerson.toFixed(2));
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.gifContainer}>
//         <Image
//           src={image}
//           alt="GIF"
//           width={400}
//           height={400}
//           className={styles.gif}
//         />
//       </div>
//       <div className={styles.inputContainer}>
//         <label htmlFor="totalExpense">Total Expense: </label>
//         <input
//           type="number"
//           id="totalExpense"
//           className={styles.inputField}
//           value={totalExpense}
//           onChange={(e) => setTotalExpense(parseFloat(e.target.value))}
//         />
//       </div>
//       <div className={styles.inputContainer}>
//         <label htmlFor="numberOfPeople">Number of People: </label>
//         <input
//           type="number"
//           id="numberOfPeople"
//           className={styles.inputField}
//           value={numberOfPeople}
//           onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
//         />
//       </div>
//       <button className={styles.splitButton} onClick={handleSplit}>
//         Split Money
//       </button>
//       {splitAmount > 0 && (
//         <div className={styles.resultContainer}>
//           <h2>Each Person Owes: ₹{splitAmount}</h2>
//         </div>
//       )}
//     </div>
//   );
// }



