
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  from-blue-50 to-purple-100 px-4 text-center">

      <h1 className=" from-blue-500 to-purple-600 bg-clip-text text-9xl font-extrabold text-transparent">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Page Not Found!
      </h2>

      <p className="mt-3 text-gray-500">
        দুঃখিত, পেজটি খুঁজে পাওয়া যায়নি।
      </p>

      <div className="my-8 text-7xl">📄 ✈️</div>

      <Link
        href="/"
        className="rounded-xl  from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105"
      >
        ← Go Home
      </Link>

    </div>
  );
};

export default NotFound;
