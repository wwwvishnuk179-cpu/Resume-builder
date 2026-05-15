
import React, { useContext, useState } from 'react'
import four from './four.module.css'
import resumecontext from './resumecontext'

function Four() {
 const [items,setitems] = useState([{}])
 const {resume,setresume} =useContext(resumecontext)

  const handleChange = (e, idx) => {
    console.log(e);
    
    items[idx] = { ...items[idx], [e.target.name]: e.target.value }
    setitems([...items])

     setresume({ ...resume, skill: [...items] })
    console.log({ ...resume, skill: [...items] })
  }
  console.log(items)
  return (
    <div>
      {items.map((sk, idx) => {
        return (
          <div>
            <div className={four.main}>
              <div className={four.heading}>
                <i className="fi fi-brands-java"></i>
                <h5><b>Skill 1</b></h5></div>
              <div className={four.sec}>
                <div className={four.skillname}>
                  <b>skill name</b><br />
                  <input type="text" name='unx' placeholder='UI/UNX' onChange={(e)=>handleChange(e,idx)} style={{ padding: "10px", width: "400px", borderRadius: "20px" }} />
                </div>
              </div><div style={{ margin: "10px", paddingLeft: "30px" }}>
                <label for="customRange1" className="form-label"><b>Proficiany level</b></label>
                <div className={four.persontage} >{sk.proficiancy}%</div>

                <input type="range" name="proficiancy" onChange={(e)=>handleChange(e,idx)} className={four.boots} id="customRange1" defaultValue={0} step={5} ></input>
              </div>
              <div className={four.level}>
                <p>Biggner</p>
                <p>Intermediate</p>
                <p>Expert</p>
              </div>
            </div>


        
          </div>
  )
})}
    <div className={four.loop} style={{}}>
              <button type="button" className="btn btn-success w-25 mx-auto" onClick={() => setitems([...skill, {
                unx: "",
                proficiancy: ""

              }])}>
                <i className="bi bi-plus"></i> Add experience
              </button>
            </div>
</div>)}

export default Four