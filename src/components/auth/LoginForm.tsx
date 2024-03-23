import {useForm, FormProvider} from "react-hook-form";
import useAuth from "../../hooks/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "../../hooks/redux";
import AuthInput from "../../ui/auth/inputs";

const LoginForm = () => {
    const {schema, login} = useAuth();
    const methods = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema)
    })
    const {theme}= useAppSelector(state=>state.gen);

    return ( 
        <FormProvider {...methods}>
            <form className="w-full flex flex-col justify-center items-center mx-5" onSubmit={methods.handleSubmit(login)}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className={`label-text ${methods.formState.errors.email ? "!text-error" : ""}`}>{methods.formState.errors.email?.message || "Email Address"}</span>
                    </div>
                    <AuthInput registerName="email"/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className={`label-text ${methods.formState.errors.password ? "!text-error" : ""}`}>{methods.formState.errors.password?.message || "Password"}</span>
                    </div>
                    <AuthInput registerName="password" />
                </label>
                <a href="" className="my-2 capitalize hover:underline ml-auto text-xs 2xl:text-sm">forgot password?</a>
                <div className="w-full mt-2">
                    <button className={`btn ${theme=="nord"?"btn-primary":'btn-accent'} btn-wide !rounded-full btn-outline`}>Log In</button>
                    <a href="" className="block mt-3 hover:underline text-xs 2xl:text-sm">First time here? Create an account</a>
                </div>
            </form>
        </FormProvider>
     );
}
 
export default LoginForm;