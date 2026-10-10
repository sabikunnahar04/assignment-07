
"use client";

import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    const onSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(
            formData.entries()
        ) as {
            name: string;
            email: string;
        };

        // নাম আপডেট
        const { error } = await authClient.updateUser({
            name: user.name,
        });

        if (error) {
            console.log(error);
            return;
        }

        // ইমেইল পরিবর্তন
        if (user.email !== session?.user.email) {
            const result = await authClient.changeEmail({
                newEmail: user.email,
                callbackURL: "/profile",
            });

            if (result.error) {
                console.log(result.error);
                return;
            }
        }
    };

    if (isPending) {
        return <p className="p-6">Loading...</p>;
    }

    if (!session?.user) {
        redirect("/signin");
    }

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/signin");
    };

    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="card bg-base-100 mx-auto mt-8 max-w-lg shadow-xl">
                <div className="card-body">

                    <h2 className="text-2xl font-bold text-red-700">
                        আমার প্রোফাইল
                    </h2>

                    <p className="text-sm text-gray-500">
                         ব্যক্তিগত তথ্য আপডেট করা 
                    </p>

                    <form onSubmit={onSubmit} className="mt-4">

                        <label className="label">
                            <span className="label-text">নাম</span>
                        </label>

                        <input
                            name="name"
                            type="text"
                            className="input input-bordered w-full"
                            defaultValue={session.user.name}
                            required
                        />

                        <label className="label mt-3">
                            <span className="label-text">ইমেইল</span>
                        </label>

                        <input
                            name="email"
                            type="email"
                            className="input input-bordered w-full"
                            defaultValue={session.user.email}
                            required
                        />

                        <button
                            type="submit"
                            className="btn bg-green-900 text-white w-full mt-5"
                        >
                            আপডেট করুন
                        </button>
                    </form>

                    <div className="divider">অ্যাকাউন্ট</div>

                    <button
                        onClick={handleSignOut}
                        className="btn btn-error btn-outline w-full"
                    >
                        সাইন আউট
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;