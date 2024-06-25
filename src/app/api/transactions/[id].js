

import { connectMongoDB } from '../../../../utils/database';
import Transaction from '../../../../models/Transaction';

export default async function handler(req, res) {
  await connectMongoDB();

  const { method, query } = req;
  const { id } = query;

  if (method === 'DELETE') {
    try {
      const { email } = req.body;
      const transaction = await Transaction.findOne({ _id: id, email });
      if (transaction) {
        await transaction.remove();
        res.status(200).json({ message: 'Transaction deleted' });
      } else {
        res.status(404).json({ message: 'Transaction not found or email does not match' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (method === 'PUT') {
    try {
      const { description, amount, email } = req.body;
      const transaction = await Transaction.findOne({ _id: id, email });
      if (transaction) {
        transaction.description = description || transaction.description;
        transaction.amount = amount !== undefined ? amount : transaction.amount;
        await transaction.save();
        res.status(200).json({ message: 'Transaction updated' });
      } else {
        res.status(404).json({ message: 'Transaction not found or email does not match' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['DELETE', 'PUT']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// import { connectMongoDB } from '../../../../utils/database';
// import Transaction from '../../../../models/Transaction';

// export default async function handler(req, res) {
//   console.log('Request method:', req.method);
//   console.log('Request query:', req.query);
//   console.log('Request body:', req.body);

//   await connectMongoDB();

//   const { method, query } = req;
//   const { id } = query;

//   if (method === 'DELETE') {
//     const { email } = req.body;
//     try {
//       const transaction = await Transaction.findOne({ _id: id, email });
//       if (transaction) {
//         await Transaction.findByIdAndDelete(id);
//         res.status(200).json({ message: 'Transaction deleted' });
//       } else {
//         res.status(404).json({ message: 'Transaction not found or email does not match' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else if (method === 'PUT') {
//     const { description, amount, email } = req.body;
//     try {
//       const transaction = await Transaction.findOne({ _id: id, email });
//       if (transaction) {
//         transaction.description = description || transaction.description;
//         transaction.amount = amount !== undefined ? amount : transaction.amount;
//         await transaction.save();
//         res.status(200).json({ message: 'Transaction updated' });
//       } else {
//         res.status(404).json({ message: 'Transaction not found or email does not match' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['DELETE', 'PUT']);
//     res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
