import { createContext } from "react";
const resumecontext = createContext({
    resume:{
   personal:{
    fullname: "",
    email: "",
    phone: "",
    title: "",
    place: "",
    summary: '',
   },
   
    education: [{
      position: "",
      startdate: "",
      company: "",
      position: "",
      enddate: ""
    }],
    

    skill: [{
      unx: "",
      proficiancy: "",
    }],


    experinece: [{
      university: "",
      company: "",
      startdate: "",
      enddate: "",
      discription: ""
    }]


  },
  setresume:()=>{

  }
})
export default resumecontext