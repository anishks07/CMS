import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Campusselection from "../components/Campusselection";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import FacultyPage from "../components/FacultyPage"; // Your existing FacultyPage

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page with Campus Selection */}
        <Route path="/" element={
          <>
            <Herosection />
            <Campusselection /> {/* Only on home page */}
            <Aboutus />
          </>
        } />

        {/* Campus Faculty Page - Dynamic */}
        <Route path="/campus/:campusName" element={<FacultyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
