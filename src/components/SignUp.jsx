import React ,{useState}  from "react";
import appService from "../App_right/Auth" 
import {useForm} from "react-hook-form"
import {Link,useNavigate} from "react-router-dom"
import {Input,Logo, LogoutBtn,
} from "./input";
import {login as authLogin} from "../App/AuthSlice"
import { useDispatch } from "react-redux";


function SignUp(){

    const [error,setError]=useState("");
    const dispach=useDispatch();
    const {register,handleSubmit} =useForm()
    const navigate=useNavigate()

    async function SignUp(data){
        setError("");
        try{
        const userData=await appService.createUser(data);
        if(userData){
        const userDetail=await appService.getUser();
        if(userDetail){
            dispach(authLogin(userDetail));
            navigate("/");
        }
         }
        }catch(error){
         setError(error.message);
        }
    }


    return(
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(SignUp)}>
                    <div className="space-y-5">
                        <input
                        label="Name"
                        placeholder="enter your name"
                        type="name"
                        {...register("name",{
                            required:true
                        })}
                        />
                        <input
                        label="Email"
                        placeholder="wite your email"
                        type="email"
                        {...register("email",{
                            required:true,
                            validate:{
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <input
                        label="password"
                        placeholder="write your password here"
                        type="password"
                        {...register("password"),{
                            required:true,
                        }}/>
                        <button
                        type="submit"
                        className="w-full">
                            Create Account
                        </button>


                    </div>
                </form>


                </div>
          </div>

    )
}

export default SignUp