
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/");
    };

    return (
        <div className="flex flex-row items-center gap-2">
            {user ? (
                <div className="dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                                <img
                                    alt="Profile"
                                    src={
                                        user.image ||
                                        "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                                    }
                                />
                            </div>
                        </div>

                        <h2>{user.name}</h2>
                    </button>

                    <ul className="dropdown-content menu bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow-lg border border-base-200">
                        <li>
                            <Link href="/profile">
                                Profile
                            </Link>
                        </li>

                        <li>
                            <button onClick={handleSignOut}>
                                সাইন আউট
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link href="/signin">
                        <button className="text-xs px-4 py-2">
                            সাইন ইন
                        </button>
                    </Link>

                    <Link href="/signup">
                        <button className="bg-red-700 text-white text-xs px-4 py-2 rounded-md">
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;