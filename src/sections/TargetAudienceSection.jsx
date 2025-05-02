import React from 'react';
import '../styles/pages/TargetAudience.css';

const TargetAudience = () => {
  return (
    <section className="users-section">
      <div className="users-container">
        <h2 className="users-heading">🎯 targeted users</h2>
        <p className="users-intro">
          our research focuses on college students with adhd who experience challenges related to academic task management, focus, and executive functioning. we aim to capture diverse perspectives while maintaining relevance to our design goals.
        </p>

        <h3 className="users-subheading">📘 reddit data</h3>
        <ul className="users-list">
          <li><strong>inclusion:</strong> posts and comments from public threads focused on adhd, productivity, studying, or academic apps.</li>
          <li><strong>exclusion:</strong> posts unrelated to academic experiences or focused solely on medical advice, parenting, or K-12 education.</li>
        </ul>

        <h3 className="users-subheading">📝 survey forms</h3>
        <ul className="users-list">
          <li><strong>inclusion:</strong> self-identified college students (18+) with diagnosed or suspected adhd.</li>
          <li><strong>exclusion:</strong> respondents not currently enrolled in college or who did not report adhd-related academic challenges.</li>
        </ul>

        <h3 className="users-subheading">🎤 interviews</h3>
        <ul className="users-list">
          <li><strong>inclusion:</strong> students with lived experiences of navigating college while managing adhd symptoms, ideally with experience using academic tools.</li>
          <li><strong>exclusion:</strong> participants under 18 or without first-hand experience of adhd in a college setting.</li>
        </ul>

        <p className="users-conclusion">
          these criteria ensured that our participants had relevant experiences while representing a range of perspectives across neurodivergent academic life.
        </p>
      </div>
    </section>
  );
};

export default TargetAudience;