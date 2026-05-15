import React, { useContext, useState } from 'react'
import pagecss from './THIRDPAGE.module.css'
import resumecontext from './resumecontext'
import { useNavigate } from 'react-router'
function PAGE() {
  const [items, setitems] = useState([{}])
  const { resume, setresume } = useContext(resumecontext)

  const handleChange = (ee, idx) => {
    items[idx] = { ...items[idx], [ee.target.name]: ee.target.value }
    setitems([...items])

    setresume({ ...resume, experinece: [...items] })
    console.log({ ...resume, experinece: [...items] })
  }

  return (
    <div>
      {resume.experinece.map((items, idx) => {
        return (
          <div className={pagecss.main1}>
            <div className={pagecss.heading}><h3>Experience</h3></div>
            <div style={{ marginTop: '20px', marginLeft: "20px" }}>


            </div>
            <div className={pagecss.all}>

              <div className={pagecss.input}>



                <p><b>company</b></p>
                <input type="text" placeholder='company' onChange={(e) => handleChange(e, idx)} value={items.company} name='company' style={{ padding: "10px", borderRadius: "10px" }} />

                <p><b>start date</b></p>
                <input type="text " placeholder='start time' onChange={(e) => handleChange(e, idx)} value={items.startdate} name='startdate' style={{ padding: "10px", borderRadius: "10px" }} />
              </div>
              <div className={pagecss.second}>
                <p><b>position </b></p>
                <input type="text" placeholder='position' onChange={(e) => handleChange(e, idx)} value={items.position} name='position' style={{ padding: "10px", borderRadius: "10px" }} />
                <p><b>End date</b></p>
                <input type="text" placeholder='------' name='enddate' onChange={(e) => handleChange(e, idx)} value={items.enddate} style={{ padding: "10px", borderRadius: "10px" }} />
              </div>
            </div>
            <div className={` form-switch ${pagecss.switch}`} >
              <input className="form-check-input me-3" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
              <label className="form-check-label " htmlFor="flexSwitchCheckChecked">currently working here</label>
            </div><br />
            <h4>Description</h4><br />
            <div className={pagecss.description}>
              <p className='pgraph' name="discription" onChange={(e) => handleChange(e, idx)} value={items.discription} >Lead design initiatives for core product features, collaborating with cross-functional teams to deliver user-centered solutions.
                Conducted user research and usability testing to inform design decisions, resulting in 40% increase in user satisfaction.</p>
            </div>
          </div>
        )
      })}
      <button type="button" className={`btn btn-success btn-lg  ${pagecss.butn}`}><i className="bi bi-plus"></i>Add experience</button>
    </div>
  )
}

export default PAGE
