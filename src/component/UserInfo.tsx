"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user
    console.log(user)
    const handleSignOut = async() => {
        await authClient.signOut();
    }
    return (
        <div  className=" flex flex-row items-center gap-2">
            {
                user ? <div className="flex flex-row items-center gap-2">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                            <img alt="Tailwind-CSS-Avatar-component" src={
                                (user?.image as string) ||
                                "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                            } />
                        </div>
                    </div>
                    <h2>{user?.name}</h2>
                    <button onClick={handleSignOut} className="btn btn-error btn-xs">সাইন আউট</button>
                </div> : <div>

                   <Link href={"/signin"}>
                    <button className="text-xs px-4 py-2">
                        সাইন ইন
                    </button></Link>

                   <Link href={"/signup"}>
                    <button className="bg-red-700 text-white text-xs px-4 py-2 rounded-md">
                        সাইন আপ
                    </button></Link>

                </div>
            }

        </div>
    );
};

export default UserInfo;