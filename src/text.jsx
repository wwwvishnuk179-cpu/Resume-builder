import React, { useContext, useEffect, useRef, useState } from 'react'
import textcss from './text.module.css'
import resumecontext from './resumecontext';


function Text() {
  const { resume } = useContext(resumecontext)
  const [formData, setFormData] = useState({
    name: "Sara Johnson",
    role: "Senior Product Designer",
    email: "sarahjhonson@gmail.com",
    phone: "9838724774",
    location: "Trivandrum",
    summary: "Creative and detail-oriented Product Designer with 6+ years of experience crafting intuitive user experiences for web and mobile applications. Passionate about solving complex problems through human-centered design and data-driven insights."
  });


  //  Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Letter count
  const letterCount = resume.personal.summary.replace(/[^a-zA-Z]/g, "").length;

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Resume Data Saved ");
  };




  return (
    <>

      <div className={`${textcss.main} textmain` }>

        <form onSubmit={handleSubmit}>


          <h1
            type="text"
            style={{ width: "300px", borderRadius: "20px" }}
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
          >{resume.personal.fullname}</h1><br /><br />

          <h3
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Job Role"
          >{resume.personal.title}</h3><br /><br />
          <div className='home' style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <h5
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            >{resume.personal.email}</h5><br /><br />

            <h5
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            >{resume.personal.phone}</h5><br /><br />
          </div>
          <h5
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          >{resume.personal.place}</h5><br /><br />

          {/*  SUMMARY */}
          <div className={textcss.summary}>

            <h3>PROFESSIONAL SUMMARY</h3>

            <p style={{ overflowWrap: "break-word" }}>{resume.personal.summary}</p>

          </div>
          <br />
          {/*  Letter Count */}
          <p style={{ textAlign: "right" }}>
            {letterCount} letters
          </p>
          <h3 style={{ borderTop: "5px solid blue", padding: "20px" }}>EDUCATION</h3>
          {resume.education.map((edu) => {
            return (
              <div style={{ padding: "20px" }}>
                <h4>{edu.university}</h4>
                <div className={textcss.uy}>
                  <div>
                    <h5>{edu.company}</h5>
                    <h5>{edu.enddate}</h5>
                  </div>
                  <div>
                    <h5>{edu.position}</h5>
                    <h5>{edu.startdate}</h5>
                  </div>
                </div>
              </div>
            )
          })}
          
          {resume.experinece.map((exp) => {
            return (
              <div className={textcss.my}>
                <h3>EXPERIENCE</h3>
              <div className={textcss.expr}>
                <div>
                  <h5>{exp.company}</h5>
                  <h5>{exp.startdate}</h5>
                </div>
                <div>
                  <h5>{exp.position}</h5>
                  <h5>{exp.enddate}</h5>
                </div>
              </div>
              </div>
            )
          })}
          {resume.skill.map((sk) => {
            return (
              <div className={textcss.ski} style={{padding:"20px"}}>
                <h5>{sk.unx}</h5>
                <p>{sk.proficiancy}</p>
              </div>
            )
          })}

        </form>
        {/*  SUBMIT BUTTON */}
        <button className={"btn btn-info " + textcss.about} style={{ marginLeft: "150px" }} onClick={()=>print()}>Save Resume</button>
      </div>
    </>
  )
}

export default Text