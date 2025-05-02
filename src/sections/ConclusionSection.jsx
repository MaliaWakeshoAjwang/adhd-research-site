import React from 'react';
import '../styles/pages/Conclusion.css';

const ConclusionSection = () => {
    return (
      <section className="conclusion-section">
        <h2 className="section-title">Conclusions</h2>
        <p className="conclusion-paragraph">
          Our user research revealed a persistent gap between the academic demands placed on college students with ADHD and the tools currently available to support them. Despite the proliferation of digital apps and institutional accommodations, many students feel unsupported, overwhelmed, or isolated in managing their academic responsibilities.
        </p>
        <p className="conclusion-paragraph">
          Key findings show that:
        </p>
        <ul className="conclusion-list">
          <li>ADHD students rely heavily on digital tools but often find them lacking personalization, flexibility, or emotional relevance.</li>
          <li>Productivity and calendar apps are widely used, yet students still experience struggles with motivation, initiation, and organization.</li>
          <li>Students value reminders, visual structure, and community support — elements rarely combined in one solution.</li>
          <li>Reddit data highlighted unmet needs around accountability, executive functioning, and adapting tools to neurodiverse workflows.</li>
        </ul>
        <p className="conclusion-paragraph">
          <strong>So what?</strong> These insights point to a critical opportunity: rethinking academic support systems through the lens of neurodiversity. Human-centered, customizable, and emotionally supportive digital tools can transform how ADHD students navigate college life. Our findings will directly inform the development of <em>clarifi</em>, a platform intentionally built to empower neurodivergent students — not just accommodate them.
        </p>
        <p className="conclusion-paragraph">
          The next steps would be to analzye the results from the interviews and surveys conducted with ADHD students. This will help us to understand their needs and pain points in more detail, and to validate the findings from the Reddit data analysis.
        </p>
        <p className="conclusion-paragraph">
          We are excited to continue this journey and to share our findings with the community. Thank you for your interest in our research!
        </p>
      </section>
    );
  };
  
  export default ConclusionSection;