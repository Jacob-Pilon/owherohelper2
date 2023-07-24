import React, { useState } from 'react';
import Calendar from 'react-calendar';
import tank from '../images/tank.png';
import dps from '../images/dmg.png';
import support from '../images/supp.png';
import { useNavigate } from 'react-router-dom';
import '../Booking.css';

const BookingPage = () => {
  const [selectedCoachType, setSelectedCoachType] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [heroesToCoach, setHeroesToCoach] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const coachTypes = [
    { type: 'tank', image: tank },
    { type: 'dps', image: dps },
    { type: 'support', image: support },
  ];

  const availableTimes = ['10:00 AM', '2:00 PM', '6:00 PM'];

  const navigate = useNavigate();

  const selectOption = (coachType) => {
    setSelectedCoachType(coachType);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleBookingSubmit = () => {
    if (selectedCoachType && discordTag && heroesToCoach && selectedDate && selectedTime) {
      const selectedRole = coachTypes.find(coach => coach.type === selectedCoachType);
      // All requirements are filled, navigate to "/bookingconfirm" with state data
      navigate('/bookingconfirm', {
        state: {
          selectedCoachType: selectedCoachType, 
          selectedDate: selectedDate,
          selectedTime: selectedTime,
          roleImage: selectedRole.image,
        },
      });
    } else {
      // Display an error message, all requirements are not filled
      alert('Not all requirements filled in!');
    }
  };

  

  return (
    <div className="booking-container">
      <h1 className="title">Select coach desired</h1>
      <div className="coach-types">
        {coachTypes.map((coachType) => (
          <label key={coachType.type} className="coach-type-label">
            <img
              src={coachType.image}
              alt={coachType.type}
              className={`coach-type-image ${
                selectedCoachType === coachType.type ? 'selected' : ''
              }`}
              onClick={() => selectOption(coachType.type)}
            />
            <span className="coach-type-tag">{coachType.type}</span>
          </label>
        ))}
      </div>
      <div className="input-container">
        <label htmlFor="discordTag">Discord tag:</label>
        <input
          type="text"
          id="discordTag"
          value={discordTag}
          onChange={(e) => setDiscordTag(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="heroesToCoach">Heroes to be coached on:</label>
        <input
          type="text"
          id="heroesToCoach"
          value={heroesToCoach}
          onChange={(e) => setHeroesToCoach(e.target.value)}
        />
      </div>
      <div className="calendar-container">
        <Calendar onChange={handleDateSelection} value={selectedDate} />
      </div>
      <div className="time-list">
        {selectedDate &&
          availableTimes.map((time) => (
            <div
              key={time}
              className={`time-item ${
                selectedTime === time ? 'selected' : ''
              }`}
              onClick={() => handleTimeSelection(time)}
            >
              {time}
            </div>
          ))}
      </div>
      <div className="submit-button-container">
        <button onClick={handleBookingSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default BookingPage;
