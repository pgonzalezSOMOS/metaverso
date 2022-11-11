import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import components
import Home from "./pages/Home"
import Info_project from "./pages/Info_project";
import NavBar from "./components/Home/NavBar/NavBar";

//Import data
import customData from '../src/customData.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/metaverso" element={<Home customData={customData} />} />
            <Route path="/metaverso/proyecto" element={<Info_project customData={customData}/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;



