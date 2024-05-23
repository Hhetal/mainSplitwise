// "use client"
// import React from 'react';
// //import photo2 from '../../assets/photo2.png';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <h1 className="header">Welcome to SplitWise System !!</h1>
//       <p className="quote">"Money may not buy happiness, but it certainly is a stress-free way to keep track of expenses."</p>
//       <img className="images" src="assets/photo2.png" height={250} width={200} alt="not found" />
//       <button className="button">
//         <a href="/signup">One step closer to join our family...</a>
//       </button>
//       <style jsx>{`
//       .home-page {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 50px;
//   background-color: #f5f5f5;
// }

// .header {
//   font-size: 36px;
//   font-weight: bold;
//   margin-bottom: 30px;
// }

// .quote {
//   font-size: 24px;
//   margin-bottom: 50px;
// }

// .images {
//   width: 200%;
//   max-width: 500px;
//   height: 250;
//   margin-bottom: 50px;
// }

// .button {
//   background-color: #4CAF50;
//   color: #FFFFFF;
//   padding: 15px 32px;
//   border: none;
//   border-radius: 5px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 18px;
//   margin: 4px 2px;
//   cursor: pointer;
// }


// // footer {
// //   position: fixed;
// //   left: 0;
// //   bottom: 0;
// //   width: 100%;
// //   background-color: #4a4a4a;
// //   color: #f5f5f5;
// //   text-align: center;
// //   padding: 1rem;
// // }
// `}</style>
//     </div>
//   );
// };

// export default HomePage;


import LoginForm from "../app/components/loginFrom";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  );
}