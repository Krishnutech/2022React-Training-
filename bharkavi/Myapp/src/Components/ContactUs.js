import React from "react";
import Menubar from "./Menubar";
import Footer from "./Footer";
import "./Footer.css"
import "./ContactUs.css"
import { useState, useEffect } from "react";

const ContactUs=() =>{
  const initialValues = { name: "", email: "", mobileno: "", comment:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.mobileno) {
            errors.mobileno = "mobileno is required";
          } else if (values.mobileno.length < 10) {
            errors.mobileno = "Mobileno must be more than 10 ";
          } else if (values.mobileno.length > 10) {
            errors.mobileno= "Mobileno cannot exceed more than 10";
          }
          if (!values.comment) {
            errors.comment = "comment is required";
          }
        return errors;
      };

    return(
      <div>
          <Menubar />
   <br /><br />
         <div className="form1">
          <h1>CONTACT US</h1>
      <form onSubmit={handleSubmit}>
        <div className="form2">
        <input type ="text" placeholder="name" value={formValues.name}onChange={handleChange}></input>
        </div>
        <div className="form2">
        <input type="text" placeholder="email"  value={formValues.email} onChange={handleChange}/>
        </div>
        <div className="form2">
        <input type="number" placeholder="mobile Number" value={formValues.mobileno} onChange={handleChange} />
        </div>
        <div className="form2">
        <textarea placeholder="comment" value={formValues.comment} onChange={handleChange}></textarea>
        </div>
        <div className="form2">
        <button>Submit</button>
        </div>
      </form>
      </div>
      <br /><br />
         <Footer />
      </div>
      
        
    )
}
export default ContactUs