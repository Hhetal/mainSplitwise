// import {connect} from "@/../../utils/database";
// import User from "../../../../../models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import { sendEmail } from "../../../../../helpers/mailer";


// connect()

// export async function POST(request: NextRequest){
//     try {
//         const reqBody = await request.json()
//         const {username, email, password} = reqBody

//         console.log(reqBody);

//         //check if user already exists
//         const user = await User.findOne({email})

//         if(user){
//             return NextResponse.json({error: "User already exists"}, {status: 400})
//         }

//         //hash password
//         const salt = await bcryptjs.genSalt(10)
//         const hashedPassword = await bcryptjs.hash(password, salt)

//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword
//         })

//         const savedUser = await newUser.save()
//         console.log(savedUser);

//         //send verification email

//         await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

//         return NextResponse.json({
//             message: "User created successfully",
//             success: true,
//             savedUser
//         })

//     } catch (error: any) {
//         return NextResponse.json({error: error.message}, {status: 500})

//     }
// }

import { connectMongoDB } from "../../../../utils/database";
import User from "../../../../models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


// export const POST = async (request: any) => {
//   const { email, password } = await request.json();

//   await connectMongoDB();

//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return new NextResponse("Email is already in use", { status: 400 });
//   }

//   const hashedPassword = await bcrypt.hash(password, 5);
//   const newUser = new User({
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newUser.save();
//     return new NextResponse("user is registered", { status: 200 });
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };
export async function POST (req) {
  try{
  const { name, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash (password, 10);
  await connectMongoDB();
  await User.create({ name, email, password: hashedPassword });
  return NextResponse.json({ message: "User registered." }, 
  { status: 201 });
  } catch (error) {
  return NextResponse.json(
  { message: "An error occurred while registering the user." },
  { status: 500 }
  );
}
  }