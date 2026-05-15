import React, { useContext, useState } from 'react'
import page3 from './Page.module.css'
import resumecontext from './resumecontext'

function THIRDPAGE() {
  const [items, setitems] = useState([{}])
  const { resume, setresume } = useContext(resumecontext)
  console.log(items);

  const handleChange = (e, idx) => {
    items[idx] = { ...items[idx], [e.target.name]: e.target.value }
    setitems([...items])

    setresume({ ...resume, education: [...items] })
    console.log({ ...resume, education: [...items] })
  }

  return (
    <div>
      {items.map((item, idx) => {
        return (
          <div>
            <div>
              <div className={page3.main}>
                <div className={page3.head} >
                  <h4 className='n' name="education">education</h4>

                </div>
                <div style={{ paddingLeft: "40px" }}>
                  <b>Institution</b><br />
                  <input
                    type="text"
                    name='university'
                    value={items.university}
                    onChange={(e) => handleChange(e, idx)}
                    placeholder="University Name"
                    style={{
                      padding: "10px",
                      width: "350px",
                      borderRadius: "15px",

                    }}

                  /><br/>
                </div>
                <div className={page3.ins}>
                  <div className={page3.all}>

                    <div>
                      <p><b>Company</b></p>
                      <input
                        type="text"
                        name='company'
                        value={items.company}
                        onChange={(e) => handleChange(e, idx)}
                        placeholder="Company"
                        style={{ padding: "10px", borderRadius: "10px" }}
                      />

                      <p><b>Start Date</b></p>
                      <input
                        type="text"
                        name='startdate'
                        value={items.startdate}
                        onChange={(e) => handleChange(e, idx)}
                        placeholder="Start Date"
                        style={{ padding: "10px", borderRadius: "10px" }}
                      />
                    </div>

                    <div className={page3.second}>
                      <p><b>Position</b></p>
                      <input
                        type="text"
                        name='position'
                        value={items.position}
                        onChange={(e) => handleChange(e, idx)}
                        placeholder="Position"
                        style={{ padding: "10px", borderRadius: "10px" }}
                      />

                      <p><b>End Date</b></p>
                      <input
                        type="text"
                        name='enddate'
                        value={items.enddate}
                        onChange={(e) => handleChange(e, idx)}
                        placeholder="End Date"
                        style={{ padding: "10px", borderRadius: "10px" }}
                      />
                    </div>
                  </div>

                  <br />

                  <div className="form-check form-switch">
                    <input
                      onChange={(e) => handleChange(e, idx)}
                      className="form-check-input"
                      name='checkbox'

                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked
                    />

                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    >
                      Currently studying here
                    </label>
                  </div>

                </div>
              </div>



            </div>
          </div>
        )
      })}

      <div className={page3.loop}>
        <button type="button" className="btn btn-success w-25" onClick={() => setitems([...items, {
          university: "",
          company: "",
          startdate: "",
          enddate: "",
          discripition: ""

        }])}>
          <i className="bi bi-plus"></i> Add experience
        </button>
      </div>

    </div>
  )

}

export default THIRDPAGE