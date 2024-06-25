


import { connectMongoDB } from '../../../../utils/database';
import Transaction from '../../../../models/Transaction';

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === 'GET') {
    try {
      const { email } = req.query;
      const transactions = await Transaction.find({ email }).populate('email', 'User'); // Populate the email field with the associated User document
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const { description, amount, email } = req.body;
    const newTransaction = new Transaction({ description, amount, email });
    try {
      await newTransaction.save();
      res.status(201).json({ message: 'Transaction added' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// import { connectMongoDB } from '../../../../utils/database';
// import Transaction from '../../../../models/Transaction';

// export default async function handler(req, res) {
//   console.log('Request method:', req.method);
//   console.log('Request query:', req.query);
//   console.log('Request body:', req.body);

//   await connectMongoDB();

//   if (req.method === 'GET') {
//     try {
//       const { email } = req.query;
//       const transactions = await Transaction.find({ email });
//       res.status(200).json(transactions);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else if (req.method === 'POST') {
//     const { description, amount, email } = req.body;
//     const newTransaction = new Transaction({ description, amount, email });
//     try {
//       await newTransaction.save();
//       res.status(201).json({ message: 'Transaction added' });
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


