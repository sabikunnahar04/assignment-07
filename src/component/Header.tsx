import React from 'react';

import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from './UserInfo';

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="sticky top-0 z-50 bg-white">


            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">


                <div className="flex items-center gap-2">

                    <Image
                        className="w-9 h-9"
                        height={50}
                        width={50}
                        src={"/logo-icon.png"}
                        alt=""
                    />

                    <div>
                        <h2 className="font-bold text-sm">
                            বাজার দর
                        </h2>

                        <p className="text-[9px] text-gray-500">
                            {date}
                        </p>
                    </div>

                </div>

                <UserInfo />

            </div>



            <NavLinks />

        </header>
    );
};

export default Header;