import { useFormContext } from "react-hook-form";

type Props={
    registerName:string
}

const AuthInput = ({registerName}:Props) => {
    const {register} = useFormContext();
    return (
        <input
            type="text"
            placeholder="Type here"
            className={`input input-bordered w-full max-w-xs !rounded-full placeholder:text-sm`}
            {...register(registerName)}
        />
    );
}

export default AuthInput;