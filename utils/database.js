

// import mongoose from "mongoose";

// export const connectMongoDB = async () => {
//   try {
//     await mongoose.connect (process.env.MONGODB_URI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log("Error connecting to MongoDB: ", error);
//   }
// };


import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // If already connected or connecting
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export { connectMongoDB };


