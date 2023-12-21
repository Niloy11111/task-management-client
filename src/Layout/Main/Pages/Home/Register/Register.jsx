import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../components/Authprovider/Authprovider";
import useAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
const Register = () => {

    const axiosPublic = useAxiosPublic() ;
    const navigate = useNavigate() ;
    const [showPassword, setShowPassword] = useState(false) ;
    const { signInUser, user, updateUserProfile, createUser, googleSignIn, logOut } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(res => {
                console.log(res.user)

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        //create user entry in the database 
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                            axiosPublic.post('/users', userInfo)
                            .then(res => {
                              console.log(res.data);
                              if (res.data.insertedId) {
                                reset();
                                new Swal("Thank you!", "You have successfully completed your registration!", "success");
                                navigate('/');
                              }
                            })
                            .catch(error => {
                                console.log(error);
                            });

                    })

                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                  email : res.user?.email,
                  name : res.user?.displayName  
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                  console.log(res.data)
                  navigate('/') ;
                })
                new Swal("Login Successful!", "Welcome back!", "success")

            })
            .catch(error => console.log(error))

    }
    return (
        <div className="flex h-[92vh]">


        <div className="w-3/4 flex justify-center items-center">
        <div className="w-1/2 mx-auto">
        <h2 className="text-3xl font-bold font-Montserrat text-center">Register Here</h2>
         <p className=" font-Montserrat font-medium mt-4 text-center">Get started - it's free. No credit card needed.</p>

         <div>
             
         <div onClick={handleGoogleLogin} className="mt-10 cursor-pointer mx-auto w-3/4 justify-center flex items-center gap-2  py-2 text-base border border-[#444] bg-[#FFF]">
                         <div className="flex items-center gap-2">
                             <FcGoogle className="text-2xl"></FcGoogle>
                             <h2 className="font-semibold text-[#00000080] font-Inter">Continue with Google</h2>
                         </div>
                     </div >
                     <div className="flex mb-5 items-center gap-2 mt-6 justify-center">
                         <div className="bg-[#191A48] h-[1px] w-[200px]">
                         </div>
                         <p className="text-xl text-[#191A48]">Or</p>
                         <div className="bg-[#191A48] h-[1px] w-[200px]">
                         </div>
                     </div>
                     {/* form */}
                     
                     <form onSubmit={handleSubmit(onSubmit)} className="px-7 lg:px-14 w-3/4 mx-auto">
                     <input className="border-gray-300 pl-5 bg-[#FFF] py-2 outline-none w-full block border pb-3 mb-8" type="text" placeholder="Your Name" {...register("name", { required: true })} name="name" />
                                {errors.name && <span className="text-red-600">Name is required</span>}

                                <input className="border-gray-300 pl-5 bg-[#FFF]  py-2 outline-none w-full block border pb-3 mb-8" type="text" placeholder="photo URL" {...register("photoURL", { required: true })} />
                                {errors.photoURL && <span className="text-red-600">photo is required</span>}

                     <input className="border-y-gray-300 bg-[#FFF] w-full outline-none border block pl-5 py-2 mb-5" type="email" placeholder="Username or Email" {...register("email", { required: true })} name="email" required />
                             {errors.email && <span className="text-red-600">email is required</span>}


                             <div className='relative mb-8'>

<input type={showPassword ? "text" : "password"}
 placeholder="password"
 className="border border-gray-300 outline-none block pl-5 py-2  bg-[#FFF] w-full" name='password'{...register("password", {
     required: true,
     minLength: 6,
     maxLength: 20,
     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

 })}

/>

{errors.password?.type === "required" && (
 <p className="text-red-600">Password is required</p>
)}
{errors.password?.type === "minLength" && (
 <p className="text-red-600">Password must be at least 6 characters</p>
)}
{errors.password?.type === "maxLength" && (
 <p className="text-red-600">Password must be less than 20 characters</p>
)}
{errors.password?.type === "pattern" && (
 <p className="text-red-600">Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character</p>
)}

<span onClick={() => setShowPassword(!showPassword)} className='text-xl cursor-pointer absolute top-3 right-2' >
 {
     showPassword ? <AiFillEye ></AiFillEye> :

         <AiFillEyeInvisible ></AiFillEyeInvisible>
 }
</span>
</div>
<input className="cursor-pointer py-2 mx-auto w-full mb-4 text-[#FFF] font-Inter  bg-[#0073EA] " type="submit" value="Let's Go" />


<p className="text-center text-base font-Inter">Already have an account? <Link to='/login'>
 <a className="text-[#0073EA] cursor-pointer"> Login </a></Link>   </p>

                     </form>

                 {/* form closed */}
         </div>

        </div>

        </div>

        <div className="w-2/4">
         <img className="h-full w-full" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"></img>
        </div>
     </div>
    );
};

export default Register;