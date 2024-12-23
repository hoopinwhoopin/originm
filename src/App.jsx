import Home from "./pages/Home"
import ImageManipulation from "./pages/ImageManipulation"
import DicomImageParser from "./pages/DicomImageParser"
import MeasurementConverter from "./pages/MeasurementConverter"

import { Routes , Route } from "react-router-dom"

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/image-manipulation" element={<ImageManipulation />}/>
    <Route path="/dicom-image-parser" element={<DicomImageParser />}/>
    <Route path="/real-world-measurements" element={<MeasurementConverter />}/>
   
    <Route path="*" element={<Home />}/>
    </Routes>
  )
}

export default App
