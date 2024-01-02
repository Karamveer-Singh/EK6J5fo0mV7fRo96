import React from "react";
import Navbar from "./Navbar";
import newresume from "./images/resume.pdf";
import BMI from "./Components/BMIcalculation";
function App() {
  return (
    <>
      <Navbar />
      <a
        href={newresume}
        download="Example-Pdf-Document"
        target="_blank"
        rel="noopener noreferrer"
      >
        RESUME
      </a>
      <div className="Parent-container">
        <BMI />
      </div>
    </>
  );
}
export default App;

// function App() {
//   return (
//     <div>
//       <a
//       <Navbar/>
//         //href={newresume}
//         download="Example-Resume.pdf"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Download Resume
//       </a>
//     </div>
//   );
// }
// export default App;
