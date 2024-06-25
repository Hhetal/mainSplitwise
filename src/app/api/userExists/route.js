import { NextResponse} from "next/server";
import  { connectMongoDB }  from "../../../../utils/database";
import User from "../../../../models/userModel";

export async function POST(req) {
try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({user});
}catch (error) {
console.log(error);
    }
}


// import { NextResponse } from "next/server";
// import { connectMongoDB } from "../../../../utils/database";
// import User from "../../../../models/userModel";

// export async function POST(req) {
//   try {
//     await connectMongoDB();
//     const { email } = await req.json();
//     const user = await User.findOne({ email }).select("_id");

//     if (!user) {
//       return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
//     }

//     console.log("user: ", user);
//     return NextResponse.json({ success: true, user });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
