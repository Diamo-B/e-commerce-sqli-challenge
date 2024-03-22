const Login = () => {
  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h1 className="text-2xl font-bold mb-5">E-Commerce Khorafiya</h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text capitalize">email address</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-accent "></button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
