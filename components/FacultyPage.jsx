import { useParams } from "react-router-dom";
import TeacherList from "./TeacherList"; // Reuse your TeacherList component

function FacultyPage() {
  const { campusName } = useParams(); // Get campus name from URL

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{campusName.toUpperCase()} FACULTY</h1>
      <TeacherList campus={campusName} /> {/* Show faculty for selected campus */}
    </div>
  );
}

export default FacultyPage;
