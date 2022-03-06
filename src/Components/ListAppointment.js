import React from "react";
import "../Style/ListAppointment.css";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

const ListAppointment = (props) => {
   if (props.appointments.length === 0) {
    return (
    <ul className="list-group list-group-flush text-center container-fluid formPart">
    <li className="list-group-item h1 listclass">No Appointment Today</li>
   </ul>
   );
   }

  return (
   
    <ul className="list-group list-group-flush  container-fluid  formPartwith">
       {props.appointments.map((appointment , index) => (
    
      <li className="list-group-item  h4 formPartwith row" key={index}>
      <span className="col-2 "> {appointment.appointment_id} </span>
        <span className="col-2 "> {appointment.patient_name} </span>
        <span className="col-3 offset-1"> {appointment.appointment_date}</span>
        <span className="col-2 offset-1">{appointment.patient_phone}</span>
        <sapn className="rounded-pill col-2 offset-1"> {appointment.checkup_type} </sapn>
        <span className="col-2 "> {appointment.patient_id} </span>
        <span onClick={() =>{props.deleteAppointment(appointment.appointment_id)}}>
          <a
            style={{
              border: "none",
              backgroundColor: "none",
              color: "var(--first_color)",
              fontSize: "28px",
              marginLeft: "5px",
              
            }}
          >
            <HiMinusCircle></HiMinusCircle>
          </a>
        </span>
        <input
          className="form-check-input col-2 offset-2"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={() =>{props.completedAppointment(appointment.appointment_id)}}
        />
      </li>
      ))}
    </ul>
    
  );
};

export default ListAppointment;
