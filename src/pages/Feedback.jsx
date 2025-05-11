import React, { useState } from 'react';
import './PageWrapper.css';
function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback('');
  };

  return (
    
    <div style={{ marginTop: '20px' }}>
      <h3>Feedback</h3>
      <p>We'd love to hear your thoughts about the app!</p>
      {submitted ? (
        <p style={{ color: 'green' }}>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
}

export default Feedback;