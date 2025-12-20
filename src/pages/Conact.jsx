import React from 'react'
import "./Contact.css"

const Conact = () => {
  const handleFormSubmit = (formdata)=>{
     const formInputData = Object.fromEntries(formdata.entries())
     console.log(formInputData);
  }
  return (
    <div className='Contact-form'>
      <h2 className='form-title'>Contact Us</h2>
        <div className="form-container">
          <form action={handleFormSubmit}>
            <input type="text" className='form-control' required autoComplete='off' name='username' placeholder='Enter Your name'/>
            <input type="email" className='form-control' required autoComplete='off' name='email' placeholder='Enter Your email'/>
            <textarea type="text" className='form-control' required autoComplete='off' name='message' rows={10} placeholder='Enter Your message'/>
               <button type="submit" className="form-btn">Submit</button>
          </form>
        </div>
      
    </div>
  )
}

export default Conact
