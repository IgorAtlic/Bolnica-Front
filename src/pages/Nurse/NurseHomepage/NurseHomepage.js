import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import HeaderNurse from "../../../components/HeaderNurse/HeaderNurse";
import ScheduledAppointmentsNurse from "../../../components/ScheduledAppointmentsNurse/ScheduledAppointmentsNurse";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../redux/actions/employee";
import { getPatients } from "../../../redux/actions/patients";
import { getAppointments } from "../../../redux/actions/appointments";
import { updateAppointment } from "../../../redux/actions/appointments";
import { getSidebarLinks } from "../../../commons/sidebarLinks";

const NurseHomepage = () => {
  const dispatch = useDispatch();
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const employees = useSelector((state) => state.employees);
  const patients = useSelector((state) => state.patients);
  const appointments = useSelector((state) => state.appointments);

  useEffect(() => {
    dispatch(getEmployees());
    dispatch(getPatients());
  }, []);

  useEffect(() => {
    setSelectedDoctor(employees[0]);

    if (employees[0]) dispatch(getAppointments(employees[0].lbz));
  }, [employees]);

  const headerProps = {
    userName: "Ana Reljic",
    userTitle: "Med sestra",
  };

  const getDoctorAppointments = (lbz) => {
    const newDoctor = employees.find((doctor) => doctor.lbz === lbz);
    setSelectedDoctor(newDoctor);
    dispatch(getAppointments(lbz));
  };

  const updateAppointmentStatus = (appointmentId, appointmentStatus) => {
    dispatch(updateAppointment({ appointmentId, appointmentStatus }));
  };

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("nurse", 1)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        {employees && selectedDoctor && (
          <HeaderNurse
            employees={employees}
            selectedDoctor={selectedDoctor}
            userName={headerProps.userName}
            userTitle={headerProps.userTitle}
            getDoctorAppointments={getDoctorAppointments}
          />
        )}
        {patients && (
          <ScheduledAppointmentsNurse
            appointments={appointments}
            updateAppointmentStatus={updateAppointmentStatus}
          />
        )}
      </div>
    </>
  );
};

export default NurseHomepage;
