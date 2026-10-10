
const SignInPage = () => {
    return (
       <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>
                   
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input w-md"  placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input w-md"  placeholder="Password" />

                    <button className="btn bg-green-900 text-white mt-4">SignIn</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;