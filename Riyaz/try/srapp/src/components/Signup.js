// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'

// function Signup() {
//   return (
//     <div>
//         <Navbar/>
//         <Footer/>
//         </div>
//   )
// }

// export default Signup
import React from "react";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../Styles/Sign.css';

export default function App({ login }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async data => {
    await login(data.email, data.password);
    reset();
  };

  return (<>
  <Navbar/>
<div className="form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          }
        })}
        type="email"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        {...register("password", {
          required: "required",
          minLength: {
            value: 5,
            message: "min length is 5"
          }
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      
      <br/>
      <button type="submit">SUBMIT</button>
    </form>
    </div>
    <Footer/>
    </>
  );
}