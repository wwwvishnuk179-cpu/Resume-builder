import React, { useState } from 'react'
import './RESUME.css'
import { resume } from 'react-dom/server'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import resumecontext from './resumecontext'
function RESUME() {
  const {resume,setresume} = useContext(resumecontext)
 
  const handleChange = (e) => {
    setresume({ ...resume, personal:{...resume.personal,[e.target.name]: e.target.value} })
    console.log({ ...resume, personal:{...resume.personal,[e.target.name]: e.target.value} })
  }
  
  const navigate = useNavigate();
  return (
    <div>
      
      <div className='main-1' style={{margin:"0 auto"}}>
        <div className='personal' name="personalinformation"><p><b>Personal information</b></p></div>
        <div className='details'>
        <h6>  <b>Full name</b></h6>
          <input type="text" placeholder="Full name" name="fullname" value={resume.personal.fullname} style={{borderRadius:"13px", paddingLeft: "10px" }} onChange={handleChange} />         
             <h6><b>Professional Title</b></h6>
          <input type="text" placeholder='title' onChange={handleChange} name="title"  value={resume.personal.title} style={{borderRadius:"13px", width: "418px", paddingLeft: "10px" }} />
          <div className='mail-phone ' >
            <div className='mail w-100'>
              <h6><b>Email</b></h6>
              <input type="text" name="email"  value={resume.personal.email} onChange={handleChange} placeholder='wwwvishnuk179@gmail.com' style={{borderRadius:"13px", width: "100%", padding: "5px" }} />
            </div>
            <div className='ph w-100'>
             <h6> <b>Phone</b></h6>
              <input type="text" name='phone'  value={resume.personal.phone} onChange={handleChange} placeholder='+91(9744330965)' style={{borderRadius:"13px", width: "100%", padding: "5px" }} />
            </div>
          </div>
          <h6><b>Location</b></h6>
          <input type="text" name='place'  value={resume.personal.place} onChange={handleChange} placeholder='trivandrum' style={{borderRadius:"13px", width: "418px", paddingLeft: "10px" }} /><br /><br />
          <h6><b>Professional summary</b></h6>
          
          <textarea className='paragraph' name="summary"  value={resume.personal.summary} style={{backgroundColor:"blue"}} onChange={handleChange}>
            </textarea>
          <p>{resume.personal.summary.length}</p>
        </div>
      </div>
    </div>
  )
}

export default RESUME
