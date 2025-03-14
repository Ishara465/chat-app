import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../../hooks/useLogin';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

   const {loarding,login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username,password);
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400/50 bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-50'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login
            <span className='text-blue-500'> Chat app</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' placeholder='Enter your username' className='w-full  input input-bordered h-10'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type='password' placeholder='Enter your password' className='w-full  input input-bordered h-10'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Link to="/signup" className='text-sm hover:underline mt-2 hover:text-blue-400 mt-2 inline-block' >{"Don't"} have an account?
            </Link>
            <button className='btn btn-block btn-sm '
            disabled={loarding}>
                {loarding ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
        </form>
    </div>
</div>


  )
}

export default Login


//! STARTER CODE FOR THIS FILE 
// import React from 'react'

// function Login() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400/50 bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-50'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             Login
//             <span className='text-blue-500'> Chat app</span>
//         </h1>
//         <form>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Username</span>
//                 </label>
//                 <input type='text' placeholder='Enter your username' className='w-full  input input-bordered h-10'/>
//             </div>

//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Password</span>
//                 </label>
//                 <input type='password' placeholder='Enter your password' className='w-full  input input-bordered h-10'/>
//             </div>
//             <a href='#' className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block' >{"Don't"} have an account?
//             </a>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//         </form>
//     </div>
// </div>


//   )
// }

// export default Login
