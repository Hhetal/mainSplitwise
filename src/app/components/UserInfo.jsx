// "use client";

// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
// import Navbar from "../navbar/navbar";
// import Footer from "../footer/footer";

// export default function UserInfo() {
//   const { data: session } = useSession();

//   return (
//     <div>
//     <Navbar />
//     <div className="grid place-items-center h-screen">
//       <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
//         <div>
//           Name: <span className="font-bold">{session?.user?.name}</span>
//         </div>
//         <div>
//           Email: <span className="font-bold">{session?.user?.email}</span>
//         </div>
//         <button
//           onClick={() => signOut()}
//           className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
//         >
//           Log Out
//         </button>
//         <div>
//       <Footer />
//       </div>
//       </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Navbar from "../navbar/navbar";  
import Footer from "../footer/footer";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div>
      <Navbar />
      <div className="grid place-items-center h-screen" style={{ backgroundColor: "white" }}>
        <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6" >
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="text-white font-bold px-6 py-2 mt-3 hover:bg-gray-800"
            style={{ backgroundColor: '#045a07' }}
          >
            Log Out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}


