import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./pages/DemoPage/DemoPage";
import DoctorHomepage from "./pages/DoctorHomepage/DoctorHomepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import RegistrationPatientPage from "./pages/RegistrationPatientPage/RegistrationPatientPage";
import EmployeePreview from "./pages/EmployeePreviewPage/EmployeePreviewPage";
import PatientPreview from "./pages/PatientPreviewPage/PatientPreviewPage";
import PatientPreviewNurses from "./pages/PatientPreviewPageNurses/PatientPreviewPageNurses";
import NurseHomepage from "./pages/NurseHomepage/NurseHomepage";
import AdminHomepage from "./pages/AdminHomepage/AdminHomepage";
import PatientExamination from "./pages/PatientExaminationPage/PatientExaminationPage";
import ScheduleAppointmentPage from "./pages/ScheduleAppointmentPage/ScheduleAppointmentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* DEMO */}
        <Route path="/demo-page" exact element={<DemoPage />} />

        {/* AUTH */}
        <Route path="/login" exact element={<LoginPage />} />

        {/* DOCTOR ROUTES */}
        <Route path="/" exact element={<DoctorHomepage />} />
        <Route path="/examination/:id" exact element={<PatientExamination />} />
        <Route path="/patient-preview" exact element={<PatientPreview />} />

        {/* NURSE ROUTES */}
        <Route path="/nurse" exact element={<NurseHomepage />} />
        <Route
          path="/nurse/patient-preview"
          exact
          element={<PatientPreviewNurses />}
        />
        <Route
          path="/nurse/schedule-appointment"
          exact
          element={<ScheduleAppointmentPage />}
        />
        <Route
          path="/nurse/register-patient"
          exact
          element={<RegistrationPatientPage />}
        />

        {/* ADMIN ROUTES */}
        <Route path="/admin" exact element={<AdminHomepage />} />
        <Route
          path="/admin/employee-preview"
          exact
          element={<EmployeePreview />}
        />
        <Route
          path="/admin/register-employee"
          exact
          element={<RegistrationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
