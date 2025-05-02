import React from 'react';
import '../styles/pages/ResearchQuestions.css';

const ResearchQuestions = () => {
  return (
    <section className="research-section">
      <div className="research-container">
        <h2 className="research-heading">🧠 our research questions</h2>
        <p className="research-intro">
          our work is guided by a central question:
        </p>
        <blockquote className="research-question-highlight">
          how can human-centered design principles be applied to create digital tools that effectively support college students with adhd in managing academic tasks and daily life challenges?
        </blockquote>
        <p className="research-subheading">
          to explore this, we ask:
        </p>
        <ul className="research-list">
          <li>what specific academic barriers do college students with adhd encounter most frequently?</li>
          <li>how do students with adhd currently adapt existing technologies or support systems to meet their needs?</li>
          <li>what design features (e.g., reminders, organization tools, motivational strategies) are most valued by students with adhd?</li>
          <li>how do students perceive digital tools in terms of helpfulness, usability, and emotional support?</li>
          <li>what gaps remain between available academic support services and students’ lived experiences?</li>
        </ul>
        <p className="research-conclusion">
          these questions aim to ground our work in the real-world needs of neurodivergent students, ensuring that our solutions are empathetic, actionable, and impactful.
        </p>
      </div>
    </section>
  );
};

export default ResearchQuestions;