"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

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
            toast.success("SignUp successfully")
            console.log(data);
            redirect("/");

        }
        if (error) {
            toast.error("your email or password is wrong")
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
        <div className="flex w-full flex-col items-center justify-center px-4 py-5">
            <h2 className="text-2xl font-bold text-red-700">সাইন আপ </h2>
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-4">
                    <legend className="fieldset-legend">Login</legend>
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input w-full" placeholder="Name" />

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input w-full" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input w-full" placeholder="Password" />

                    <button type="submit" className="btn bg-green-900 text-white mt-4">SignUp</button>
                </fieldset>
            </form>
            <button onClick={handleGoogleSignUp} className="btn mt-3 w-full max-w-sm">Google দিয়ে চালিয়া যান </button>
            <button onClick={handleGithubSignUp} className="btn mt-3 w-full max-w-sm">Github দিয়ে চালিয়া যান </button>

        </div>
    );
};

export default SignUpPage;