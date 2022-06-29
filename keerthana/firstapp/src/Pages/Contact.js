import React, { useState,useEffect } from "react"
import Menubar from "./Menubar"
import Footer from "./Footer"
import './Contact.css';
const Contact = () => {
    const initialValues={username:"", email:"",password:""};
    const [formValues,setFormValues] =useState(initialValues);
    const [formErrors,setFormErrors] =useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange = (e) => {
        // console.log(e.target);
        const {name,value} = e.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
      console.log(formErrors);
      if(Object.keys(formErrors).length===0 && isSubmit ){
      console.log(formValues);
    }
  },[formErrors]);
    const validate = (values) => {
      const errors={};
      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.username){
        errors.username="Please Enter Your Username";
      }
      if(!values.email){
        errors.email="Please Enter Your Email";
      }
      else if(!regex.test(values.email)){
        errors.email="This is  not a valid email address";
      }
      if(!values.password){
        errors.password="Please Enter Your Username";
      }
      else if(values.password<4){
        errors.password="Password must be at least 4 characters long";
      }
      else if(values.password >10){
        errors.password="password must not be grater thna 10 characters";
      }

        return errors;
    }

    return (
    <React.Fragment>
    <Menubar />
    <div className="container"> 
    <form onSubmit={handleSubmit}>
    <h1>Contact US</h1>
    <div className="ui-divider"></div>
    <div className="ui-form">
    <div className="fieldset">
        <input type="text" name="username" placeholder="Enter your username" value={formValues.username}onChange={handleChange}/>
      </div>
      <p>{formErrors.username}</p>
      <div className="fieldset">
        <input type="email" name="email" placeholder="Enter your Mail" value={formValues.email}onChange={handleChange}/>
      </div>
      <p>{formErrors.email}</p>
      <div className="fieldset">
        <input type="password" name="password" placeholder="Enter your Password"value={formValues.password} onChange={handleChange} />
      </div>
      <p>{formErrors.password}</p>
      <div className="fieldset">
        <textarea placeholder="Enter your Comment" name="comment" /><br />
      </div>
      {Object.keys(formErrors).length===0 && isSubmit ? (<div className="ui-message-success">Submitted</div> 
    ):(<pre>{}</pre>)}  
        <br />
      <div className="fieldset">
        <button className="button">Submit</button><br />
      </div>
      </div>
    </form>
    <br /><br />
    </div>

    <Footer />
    </React.Fragment>
    )
}
export default Contact