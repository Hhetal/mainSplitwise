
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "../api/auth/[...nextauth]/route";


export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
    try{
      const resUserExists = await fetch("api/userExists", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
    
          const { user } = await resUserExists.json();
    
          if (user) {
            setError("User already exists.");
            return;
          }
      await fetch("api/signup", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({   //storing data to the DB
        name,
        email,
        password,
      }),
      });

      if (res.ok) {
        const form = e.target;
        //form.reset();
        router.push("/");
        } else {
        console.log("User registration failed.");
        } 
      } catch (error) {
        console.log("Error during registration: ", error);
        }

    };
// Redirection to login after signin BAKII
//restricted users to go to regi/login page when they are signed in BAKII

    
 

  return (
    <div className="grid place-items-center h-screen">
       <div className="shadow-lg p-5 rounded-lg border-t-4" style={{ borderTopColor: "#045a07" }}>
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        
          <button
            className="text-white font-bold cursor-pointer px-6 py-2"
            style={{ backgroundColor: "#045a07" }}
          >
            Register
          </button>


          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );

};

  //export default RegisterForm;

