import { useForm } from "react-hook-form";
import useAuth from "../../hooks/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Login = () => {
  const { schema, login } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  return (
    <div className="h-dvh flex flex-col justify-center items-center bg-base-300">
      <h1 className="mb-10 text-4xl capitalize font-bold">E-commerce khorafiya</h1>
      <div className="w-2/3 2xl:w-1/2 flex border rounded-2xl bg-base-100">
        <div className="w-1/2 flex items-center">
          <img src="pngwing.com.png" alt="" className="max-h-96 mx-auto" />
        </div>
        <div className="card w-1/2  text-neutral-content !rounded-l-none">
          <div className="card-body items-center text-center">
            <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmit(login)}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className={`label-text ${errors.email?"!text-error":""}`}>{errors.email?.message || "Email Address"}</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs placeholder:text-sm"
                  {...register("email")}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className={`label-text ${errors.password?"!text-error":""}`}>{errors.password?.message || "Password"}</span>
                </div>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs placeholder:text-sm"
                  {...register("password")}
                />
              </label>
              <a href="" className="my-2 capitalize hover:underline ml-auto text-sm">forgot password?</a>
              <div className="w-full mt-2">
                <button className="btn btn-primary btn-wide !rounded-full btn-outline">Log In</button>
              </div>
            </form>
            <div className="divider">Or</div>
            <div className="w-full">
              <a href="" className="btn btn-secondary btn-wide !rounded-full btn-outline montserrat font-bold">Create a new account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
