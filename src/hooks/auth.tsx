import { z } from "zod";

const useAuth = () => {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6)
    });
    
    const login = (data: z.infer<typeof schema>) => {
        console.log(data);
    }

    return {schema, login}
}
 
export default useAuth;