import { useNavigate } from "react-router-dom";
import Campuscard from "./Campuscard";

function Campusselection() {
  const navigate = useNavigate();

  const handleCampusClick = (campus) => {
    navigate(`/campus/${campus.toLowerCase()}`); // Navigate to selected campus
  };

  return (
    <section className="bg-gray-100 py-12 px-6 text-center mb-10" style={{ border: "3px solid black" }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">SELECT CAMPUS</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div onClick={() => handleCampusClick("vizag")} className="cursor-pointer">
          <Campuscard image="./Images/vizag.png" title="VIZAG CAMPUS" />
        </div>
        <div onClick={() => handleCampusClick("hyderabad")} className="cursor-pointer">
          <Campuscard image="./Images/hyd.png" title="HYDERABAD CAMPUS" />
        </div>
        <div onClick={() => handleCampusClick("bengaluru")} className="cursor-pointer">
          <Campuscard image="./Images/blr.png" title="BENGALURU CAMPUS" />
        </div>
      </div>
    </section>
  );
}

export default Campusselection;
