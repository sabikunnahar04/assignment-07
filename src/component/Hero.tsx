import Image from "next/image";

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-5">

            <div className="bg-white rounded-xl px-8 py-6 flex items-center justify-between">

                <div>

                    <p className="text-green-600 text-[10px] font-medium mb-2">
                        আজকের বাজারদর
                    </p>

                    <h1 className="text-2xl font-bold text-gray-800">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="text-gray-500 text-xs mt-2 max-w-xl">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংসসহ নিত্যপ্রয়োজনীয়
                        পণ্যের সর্বশেষ বাজারদর এক জায়গায় দেখুন।
                    </p>

                    <button className="mt-4 bg-green-600 text-white text-xs px-5 py-2 rounded-md">
                        সব পণ্যের দাম দেখুন
                    </button>

                </div>


               
                <div className="hidden sm:block">

                    <Image
                        src={"/bazar-hero.png"}
                        width={150}
                        height={150}
                        alt=""
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;