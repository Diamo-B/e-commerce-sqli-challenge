const Register = () => {
    return (
        <div className="h-dvh flex flex-col justify-center items-center bg-base-300">
            <h1 className="mb-10 text-4xl berkshire-swash-regular capitalize">E-commerce khorafiya</h1>
            <div className="w-2/3 flex border rounded-2xl bg-base-100">
                <div className="w-1/2 flex items-center">
                    <img src="pngwing.com.png" alt="" className="max-h-96 mx-auto" />
                </div>
                <div className="card w-1/2  text-neutral-content !rounded-l-none border-l-2">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold text-2xl berkshire-swash-regular mb-5">Account Registration</h1>
                        <form>
                            <label className="form-control w-full">
                                <div className="label !justify-center">
                                    <span className="label-text font-bold text-lg">Gender</span>
                                </div>
                                <div className="join mx-auto">
                                    <input className="join-item btn w-20 btn-outline" type="radio" name="options" aria-label="Male" />
                                    <input className="join-item btn w-20 btn-outline" type="radio" name="options" aria-label="Female" />
                                </div>
                            </label>
                            <div className="flex justify-evenly gap-5">

                                <label className="form-control w-full max-w-xs">
                                    <div className="label !justify-center">
                                        <span className={`label-text`}>First Name</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label !justify-center">
                                        <span className={`label-text`}>Last Name</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;