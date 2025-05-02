import React from 'react';
import '../styles/pages/ProblemSection.css';

const ProblemSection = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <h2 className="problem-heading">🌪️ the challenge: navigating academic life with adhd</h2>
        <p className="problem-paragraph">
          attention-deficit/hyperactivity disorder (adhd) affects millions of college students — challenging their ability to manage time, stay focused, organize tasks, and meet deadlines. despite growing awareness, most academic systems still overlook the needs of neurodiverse learners.
        </p>
        <p className="problem-paragraph">
          students with adhd experience higher rates of academic stress, emotional burnout, and dropout — not because they lack ability, but because the support they need often comes too late or is too hard to access.
        </p>
        <p className="problem-paragraph">
          traditional services like tutoring or counseling help — but they’re usually reactive. stigma, complexity, and delay mean that many students don’t get the help they need until they’re already overwhelmed.
        </p>
        <p className="problem-paragraph">
          and while technology could help? most academic tools weren’t designed with neurodivergent thinking in mind. they’re cluttered, generic, or just not built to support executive functioning.
        </p>
        <p className="problem-paragraph">
          that’s where we come in.
        </p>
        <p className="problem-paragraph">
          clarifi uses human-centered design to rethink academic support from the ground up — with and for adhd students. by combining psychology, hci, and real student voices, we’re building digital tools that close the gap between how students think and how school works.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;