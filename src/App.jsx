import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      <h1>Connect with CultureLinkr</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p className="success-message">Thank you! Your message has been sent.</p>
      )}

      <div className="follow-me">
        <p>Follow me on:</p>
        <a href="https://www.linkedin.com/in/saichandanyadav" target="_blank" rel="noopener noreferrer" className="follow-link">LinkedIn</a>
        <a href="https://github.com/Saichandanyadav/" target="_blank" rel="noopener noreferrer" className="follow-link">GitHub</a>
      </div>
    </div>
  );
}

export default App;
