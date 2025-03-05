import React, { useState } from "react";
import vskp from "../src/utils/vsp.js";
import hyd from "../src/utils/hyd.js";
import blr from "../src/utils/blr.js";
import Campusselection from "./Campusselection"; // Import the campus selection component

const TeacherCard = ({ teacher }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full sm:w-80 md:w-72 lg:w-80">
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
        <p className="text-gray-600 text-sm">{teacher.designation}</p>
        <p className="text-gray-500 text-xs mt-1">
          {teacher.departments.join(", ")}
        </p>
        <a
          href={`mailto:${teacher.email}`}
          className="text-blue-600 text-sm mt-2 block truncate"
        >
          {teacher.email}
        </a>
        <a
          href={teacher.profile_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-white bg-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

const TeacherList = () => {
  const [campus, setCampus] = useState("vskp");

  // Function to get faculty data based on campus
  const getFacultyData = () => {
    switch (campus) {
      case "hyd":
        return hyd;
      case "blr":
        return blr;
      default:
        return vskp;
    }
  };

  return (
    <div>
      {/* Campus Selection Component */}
      <Campusselection setCampus={setCampus} campus={campus} />

      {/* Faculty Display */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {getFacultyData().map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
