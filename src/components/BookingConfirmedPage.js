import React from 'react';
import { useLocation } from 'react-router-dom';
import Mainlogo from '../images/MainLogo.png';
import tank from '../images/tank.png';
import dps from '../images/dmg.png';
import support from '../images/supp.png';

const BookingConfirmedPage = () => {
  const location = useLocation();
  const { selectedCoachType, selectedDate, selectedTime } = location.state;

  const coachTypes = [
    { type: 'tank', image: tank },
    { type: 'dps', image: dps },
    { type: 'support', image: support },
  ];

  const selectedRole = coachTypes.find(coach => coach.type === selectedCoachType);

  return (
    <div>
      <div className="titleSectionPages">
        <h1>Booking Confirmed!</h1>
      </div>

      <div className="contentMainPages">
        <div className="booking-details">
          <h3>Your Appointment will be at this date!</h3>
          <p>Date & Time of Coaching Session: {selectedDate.toDateString()} {selectedTime}</p>
          <p>Selected Role: {selectedCoachType}</p>
          {selectedRole && (
          <div className='role-image-container'>
            <img src={selectedRole.image} alt={selectedCoachType} />
          </div> )}
          <br /><br />
          <p>Please ensure your game is updated!</p>
          <p> Your Coach will reach out to you before your session on discord.</p>
          <p>Thank You!</p>
        </div>
        <img src={Mainlogo} className='MainLogo' alt="Booking Confirmation" />
      </div>
    </div>
  );
};

export default BookingConfirmedPage;
