
import React, { useState } from 'react';
import '../styles/competition.css';

const competitions = [
  {
    name: 'Waste Reduction Quiz ',
    date: '12-11-2023',
    location: 'Hampankatta',
    rules: [
      'Teams should consist of 3-4 members.',
      'Each team must choose a team captain for communication with the quizmaster.',
      'The competition will include a series of multiple-choice and open-ended questions.',
      'Questions will cover waste reduction and recycling topics.',
      'Teams will have a specified amount of time to answer each question',
      'Points will be awarded for correct answers.',
      'The team with the highest score at the end of the competition will be declared the winner.',
      'In the event of a tie, a tiebreaker question or round will be conducted.',
      'The decisions of the quizmaster and judges are final.',
      'Prizes will be awarded to the winning team, which may include certificates,swags like T-shirts, stickers etc.',

      // Add more rules as needed
    ],
  },
  {
    name: ' Photography Contest',
    date: '24-11-2023',
    location: 'Derebail',
    rules: [
      'Photos should focus on environmental themes.',
      'Participants can submit up to 3 photos.',
      'All submitted photographs must be original work created by the participant. Plagiarism or the use of stock images is not allowed.',
      'Basic photo editing is allowed, including adjustments to brightness, contrast, cropping, and color correction. However, excessive manipulation that alters the fundamental nature of the image is not allowed.',
      ' Photographs should be submitted in digital format (JPEG or PNG), with a minimum resolution of 1920x1080 pixels.',
      'Prizes will be awarded to the winning team, which may include certificates, swags like T-shirts, stickers etc.',
 ,       
      // Add more rules as needed
    ],
  },
  {
    name: 'EcoArt Poster Contest',
    date: '19-12-2023',
    location: 'Bantwal',
    rules: [
      'Posters should promote waste reduction and recycling.',
      'Use of recycled materials is encouraged.',
      'Posters should be created on standard poster-sized paper (e.g., 24x36 inches).',
      'Both hand-drawn and digital posters are acceptable.',
      'Each poster should include the artist name and contact information on the back of the poster.',
      'The decision of the judges is final and binding.',
      'Prizes will be awarded to the top three posters,which may include certificates, swags like T-shirts, stickers etc.',
      // Add more rules as needed
    ],
  },
  // Add more competition data as needed
];

function Competition() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegister = () => {
    // Check registration conditions here (e.g., validate input, submit data, etc.).
    if (username && phoneNumber && password) {
      setRegistrationMessage('You registered successfully!');
    }
  };

  return (
    <div className="App">
      <h1>Join the "Trash to Teasure movement" and Make a Sustainable Difference</h1>
      <ul className="competition-list">
        <li className="competition-header">
          <div className="header-name">Competition Name</div>
          <div className="header-date">Date</div>
          <div className="header-location">Location</div>
          <div className="header-register">Register</div>
        </li>
        {competitions.map((competition, index) => (
          <li key={index} className="competition-item">
            <div className="competition-name">{competition.name}</div>
            <div className="competition-date">{competition.date}</div>
            <div className="competition-location">{competition.location}</div>
            <div className="competition-register">
              <button onClick={() => setShowRules(competition.rules)}>Register</button>
            </div>
          </li>
        ))}
      </ul>

      {showRules && !showRegistration && (
        <div className="competition-rules">
          <h3>Competition Rules and Regulations</h3>
          <ul>
            {showRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
          <button onClick={() => setShowRegistration(true)}>Proceed to Registration</button>
        </div>
      )}

      {showRegistration && (
        <div className="registration-form">
          <h2>Registration Form</h2>
          <form>
            <label> </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <label> </label>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <br />
            <label> </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button onClick={handleRegister}>Register</button>
          </form>
          <p>{registrationMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Competition;