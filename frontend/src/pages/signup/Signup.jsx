import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from '../../../hooks/useSignup.js'

function Signup() {
  const[inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const {loading,signup} =useSignup()

  const handleCheckboxChange = (gender) =>{
    setInputs({...inputs,gender})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(inputs)
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/50 bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-50">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> Chat app</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full  input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>setInputs({...inputs,fullName:e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Johndoe"
              className="w-full  input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>setInputs({...inputs,username:e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full  input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>setInputs({...inputs,password:e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="w-full  input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

            {/* Gender */}
            <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

            <Link to={"/login"} className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block' >Already have an account?
            </Link>
            <button className='btn btn-block btn-sm mt-2'
            disabled={loading}>
             {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
              </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;


//! STARTED CODE
// import React from "react";
// import GenderCheckBox from "./GenderCheckBox";

// function Signup() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/50 bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-50">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up
//           <span className="text-blue-500"> Chat app</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full  input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Johndoe"
//               className="w-full  input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full  input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Confirm Password"
//               className="w-full  input input-bordered h-10"
//             />
//           </div>

//             {/* Gender */}
//             <GenderCheckBox/>

//             <a href='#' className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block' >Already have an account?
//             </a>
//             <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

