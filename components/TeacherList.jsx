import React from "react";
import vskp from "../src/utils/vsp.js";
import hyd from "../src/utils/hyd.js";
import blr from "../src/utils/blr.js";
import TeacherCard from "./TeacherCard";

const TeacherList = ({ campus }) => {
  let facultyData = [];

  if (campus === "vizag") facultyData = vskp;
  else if (campus === "hyderabad") facultyData = hyd;
  else if (campus === "bengaluru") facultyData = blr;

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {facultyData.length > 0 ? (
        facultyData.map((teacher, index) => <TeacherCard key={index} teacher={teacher} />)
      ) : (
        <p className="text-gray-500">No faculty found for this campus.</p>
      )}
    </div>
  );
};

export default TeacherList;
