import React from 'react';
import '../styles/pages/TeamContributionSection.css';

const TeamContributionSection = () => {
    return (
      <section className="team-contribution-section">
        <h2 className="section-title">Team Contribution</h2>
        <p className="team-paragraph">
          This research project was conducted independently by <strong>Malia Wakesho-Ajwang</strong>.
        </p>
        <p className="team-paragraph">
          Malia completed all aspects of the study, including:
        </p>
        <ul className="team-list">
          <li>Designing the research questions and study framework</li>
          <li>Developing the inclusion and exclusion criteria</li>
          <li>Collecting and preparing data from Reddit communities</li>
          <li>Performing text cleaning, preprocessing, and organization</li>
          <li>Conducting sentiment analysis, word frequency analysis, and topic modeling</li>
          <li>Interpreting results and identifying emerging themes</li>
          <li>Creating all visualizations, graphs, and dashboards</li>
          <li>Writing all website and research content</li>
          <li>Designing the website structure, styling, and layout</li>
        </ul>
        <p className="team-paragraph">
          Throughout the project, Malia applied interdisciplinary methods from computer science, psychology, and human-centered design to ensure a thorough, ethically grounded, and user-focused research process.
        </p>
        <p className="team-paragraph">
          This project demonstrates the ability to independently execute a full research and development cycle, from problem definition through analysis to actionable insights and design recommendations.
        </p>
      </section>
    );
  };
  
  export default TeamContributionSection;