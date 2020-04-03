import React from 'react';
import { useState } from 'react';




const Contact = () => {   
    //Use state
    const [formState,setFormState] = useState(
        {
            fname:"",
            lname:"",
            email:"",
            reference:"",
            terms:""
        }
    );

    //On change function 
    const InputChange = event => {
    /* e.persist allows us to use the synthetic event in an async manner.
    We need to be able to use it after the form validation */
        event.persist();
        console.log(event.target.checked); 
        const newFormData = {
            ...formState, 
            [event.target.name]:
            event.target.type === "checkbox" ? event.target.checked : event.target.value
        }   
        setFormState(newFormData);     
        
    }
   

    return (
       <section>            
           <h2>Contact us here</h2>

           <form>
               <label htmlFor="fname">First Name</label>
                    <input
                    id="fname"
                    name="fname"
                    type="text"
                    value={formState.fname} // assign the value from the useState
                    onChange={InputChange}
                        />                              
                    <br/>

               <label htmlFor="lname">Last Name</label>
                    <input 
                        id="lname"
                        name="lname"
                        type="text"
                        value={formState.lname} // assign the value from the useState
                        onChange={InputChange}
                    />                              
                    <br/>

               <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email} // assign the value from the useState
                        onChange={InputChange}
                    />                              
                    <br/>

               <label htmlFor="reference">How did you find out about us</label>
                    <select id="reference" name="reference"  onChange={InputChange}>
                        {/* Values in the option tag is hard coded */}
                        <option value="Events">Events</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend">Friend</option>
                        <option value="Other">Other</option>
                    </select><br/>

                <label htmlFor="terms" className="terms" >Terms & Conditions</label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formState.terms}
                        onChange={InputChange}
                    /><br/>   

                 <button>Subscribe</button>

           </form>
          
       </section>
    )
}

export default Contact;