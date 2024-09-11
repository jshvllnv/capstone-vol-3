import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Shared Components
import HomePage from "./Components/Shared/HomePage/HomePage";
import LoginPage from "./Components/Shared/LoginPage/LoginPage";

// Register Page

import SchoolRegisterPage from "./Components/Shared/RegisterPage/SchoolRegisterPage/SchoolRegisterPage";

import ViewApplyApplication from "./Components/Shared/ViewApplyApplication/ViewApplyApplication";

//Student Components
import StudentDashboard from "./Components/Student/Dashboard/StudentDashboard";
import StudentViewApplication from "./Components/Student/Application/ViewApplications/StudentViewApplication";
import StudentViewExamination from "./Components/Student/Examination/StudentViewExamination";
import StudentScheduleInterview from "./Components/Student/Interview/StudentScheduleInterview/StudentScheduleInterview";
import StudentSendApplication from "./Components/Student/Application/SendApplications/StudentSendApplication";
import StudentProfile from "./Components/Student/Profile/StudentProfile";
import StudentSettings from "./Components/Student/Settings/StudentSettings";
import StudentTakeExamination from "./Components/Student/Examination/StudentTakeExamination/StudentTakeExamination";

// Admin Components
import AdminDashboard from "./Components/Admin/Dashboard/AdminDashboard";
import AdminSchoolAccounts from "./Components/Admin/Accounts/AdminSchoolAccounts.js/AdminSchoolAccounts";
import StudentPhoneRegisterPage from "./Components/Shared/RegisterPage/StudentRegisterPage/StudentPhoneRegister/StudentPhoneRegister";
import AdminStudentAccounts from "./Components/Admin/Accounts/AdminStudentAccounts/AdminStudentAccounts";

//School Components
import SchoolDashboard from "./Components/School/Dashboard/SchoolDashboard";
import SchoolApplication from "./Components/School/Application/SchoolApplication";
import StudentEmailRegisterPage from "./Components/Shared/RegisterPage/StudentRegisterPage/StudentEmailRegisterPage";
import AdminSettings from "./Components/Admin/Settings/AdminSettings/AdminSettings";
import AdminActivityLogs from "./Components/Admin/ActivityLogs/AdminActivityLogs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Shared Routes */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/register/student/email"
            element={<StudentEmailRegisterPage />}
          ></Route>
          <Route
            path="/register/student/phone"
            element={<StudentPhoneRegisterPage />}
          ></Route>
          <Route
            path="/register/school/email"
            element={<SchoolRegisterPage />}
          ></Route>

          {/* Student Routes */}
          <Route
            path="/student/dashboard"
            element={<StudentDashboard />}
          ></Route>
          <Route
            path="/student/view/application"
            element={<StudentViewApplication />}
          ></Route>
          <Route
            path="/student/send/application"
            element={<StudentSendApplication />}
          ></Route>
          <Route
            path="/student/apply/application"
            element={<ViewApplyApplication />}
          ></Route>

          {/* Examination Routes */}
          <Route
            path="/student/view/examination"
            element={<StudentViewExamination />}
          ></Route>
          <Route
            path="/student/take/examination"
            element={<StudentTakeExamination />}
          ></Route>
          <Route
            path="/student/view/interview"
            element={<StudentScheduleInterview />}
          ></Route>
          <Route path="/student/profile" element={<StudentProfile />}></Route>
          <Route path="/student/settings" element={<StudentSettings />}></Route>

          {/* School Routes */}
          <Route path="/school/dashboard" element={<SchoolDashboard />}></Route>
          <Route
            path="/school/application"
            element={<SchoolApplication />}
          ></Route>

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route
            path="/admin/accounts/student"
            element={<AdminStudentAccounts />}
          ></Route>
          <Route
            path="/admin/accounts/school"
            element={<AdminSchoolAccounts />}
          ></Route>
          <Route
            path="/admin/activity-logs"
            element={<AdminActivityLogs />}
          ></Route>
          <Route path="/admin/settings" element={<AdminSettings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
