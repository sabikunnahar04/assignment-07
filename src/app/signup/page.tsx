"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string };
        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })
        if (data) {
            console.log(data);
            redirect("/");
        }
        if (error) {
            console.log(error);
        }
    }


    const handleGoogleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    };

    const handleGithubSignUp = async () => {
     const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data);
};

    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <h2 className="text-2xl font-bold text-red-700">সাইন আপ </h2>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input w-md" placeholder="Name" />

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button type="submit" className="btn bg-green-900 text-white mt-4">SignUp</button>
                </fieldset>
            </form>
            <button onClick={handleGoogleSignUp} className="btn">Google দিয়ে চালিয়া যান </button>
            <button onClick = {handleGithubSignUp} className="btn">Github দিয়ে চালিয়া যান </button>

        </div>
    );
};

export default SignUpPage;