
// import React from "react";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

// const profile = async () => {
//   const session = await getServerSession();
//   if (!session) {
//     redirect("/");
//   }
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-between p-24">
//       Dashboard
//     </div>
//   );
// };

// export default profile;


import UserInfo from "../components/UserInfo";


export default function profile() {
  return <UserInfo/>
}

