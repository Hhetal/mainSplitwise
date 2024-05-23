// "use client";
// import React from "react";
// import { SessionProvider } from "next-auth/react";

// const AuthProvider = ({ children }: any) => {
//   return <SessionProvider>
//     {children}
//     </SessionProvider>;
// };

// export default AuthProvider;


"use client";

import { SessionProvider } from "next-auth/react";
export const AuthProvider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
  };
  
