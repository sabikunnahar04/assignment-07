
const SignUpPage = () => {
    return (
        <div className="flex justify-center mt-5">
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn bg-green-900 text-white mt-4">SignUp</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;