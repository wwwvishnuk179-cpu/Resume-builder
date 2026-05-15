
import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router";
import Four from "./Four.jsx";
import PAGE from "./PAGE.jsx";
import RESUME from "./RESUME.jsx"
import text from "./text.jsx"
import Slider from "./slider.jsx"
import THIRDPAGE from "./THIRDPAGE.jsx";
import Text from "./text.jsx";
import resumecontext from './resumecontext.js';
import WebGLFluidEnhanced from "webgl-fluid-offscreen";
import { Checkbox } from '@mui/material';


const options = {
  BLOOM_INTENSITY: 1.5,
  CURL: 5,
  DENSITY_DISSIPATION: 2,
  DYE_RESOLUTION: 256,
  SUNRAYS: true,
  SUNRAYS_WEIGHT: 2,
  COLORFUL: false,
  BLOOM_SOFT_KNEE: 0.5,
  TRANSPARENT: false,
  COLOR: { r: 0, g: 0, b: 0 },
  BACK_COLOR: { r: 0, g: 0, b: 0 },
  SPLAT_RADIUS: 0.7,
  SHADING: true,
  IMMEDIATE: true,
  COLOR_UPDATE_SPEED: 10,
};

let defval = {
  personal: {
    fullname: "",
    email: "",
    phone: "",
    title: "",
    place: "",
    summary: '',
  },

  education: [{
    university:"",
    position: "",
    startdate: "",
    company: "",
    enddate: "",
    discription:"",
    Checkbox:""
  }],


  skill: [{
    unx: "",
    proficiancy: "",
  }],

  experinece: [{
    company: "",
    startdate: "",
    enddate: "",
    discription: ""
  }]


}
if (localStorage.getItem('resume')) {
  defval = JSON.parse(localStorage.getItem('resume'))
}
function App() {

  const [resume, setresume] = useState(defval)
  useEffect(() => {
    localStorage.setItem('resume', JSON.stringify(resume))
  }, [resume])


  const canvasRef = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val = null;
    const cref = canvasRef.current;
    const parent = cref?.parentNode;
    if (!parent) return;
    let canvas = document.createElement("canvas");
    canvas.className =
      "canvas";
    parent.appendChild(canvas);
    const box = canvas.getBoundingClientRect()

    const canvasEl =
      "OffscreenCanvas" in window
        ? canvas.transferControlToOffscreen()
        : canvas;
    canvasEl.width = box.width / 0.8;
    canvasEl.height = box.height;
    val = WebGLFluidEnhanced(
      canvasEl,
      {
        ...options,
        DENISTY_DISSIPATION: 0.2,
        VELOCITY_DISSIPATION: 0.2,
        SIM_RESOLUTION: 64,
      },
      canvas
    );
    // remove and reattach the canvas every 10 seconds on mobile
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        val?.destroy();
        parent.removeChild(canvas);
        canvas = document.createElement("canvas");
        canvas.class = "canvas"
        parent.appendChild(canvas);
        const canvasEl =
          "OffscreenCanvas" in window
            ? canvas.transferControlToOffscreen()
            : canvas;
        canvasEl.width = canvas.clientWidth;
        canvasEl.height = canvas.clientHeight;
        val = WebGLFluidEnhanced(canvasEl, options, canvas);
      } else {
        canvas.className =
          "canvas";
      }
    }, 8000);

    return () => {
      val?.destroy();
      parent.removeChild(canvas);
      clearInterval(interval);
      val = null;
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} ></canvas>

      <resumecontext.Provider value={{ resume, setresume }}>
        <BrowserRouter basename='Resume-builder'>
          <nav>
            <Nav />

          </nav>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "start", position: 'relative', zIndex: "1", width: "min-content", "margin": "auto" }}>
          <div className='editui'>  <Routes>

              <Route path="four" element={<Four />}></Route>
              <Route path="/" element={<RESUME />}></Route>
              <Route path="third" element={<THIRDPAGE />}></Route>
              <Route path="second" element={<PAGE />}></Route>
              <Route path="slider" element={<Slider />}></Route>

            </Routes>
            </div>
            <Text />
          </div>

        </BrowserRouter>
      </resumecontext.Provider>
    </>
  )
}
function Nav() {
  const navigate = useNavigate()
  return 
  <div className='pu'>
  <div className='four-button' style={{ position: "relative", zIndex: "1" }}>
    <button type="button" className="btn btn-dark" style={{ borderRadius: "10px" }} onClick={() => navigate('/')}>personal</button>
    <button type="button" className="btn btn-dark" style={{ borderRadius: "10px" }} onClick={() => navigate('second')}>education</button>
    <button type="button" className="btn btn-dark" style={{ borderRadius: "10px" }} onClick={() => navigate('third')}>experience</button>
    <button type="button" className="btn btn-dark" style={{ borderRadius: "10px" }} onClick={() => navigate('four')}>skill</button>
  </div>
  </div>
}
export default App