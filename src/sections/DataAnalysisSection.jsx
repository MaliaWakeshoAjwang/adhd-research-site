import React, { useState } from 'react';
import '../styles/pages/DataAnalysis.css';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-section">
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

const DataAnalysis = () => {
  return (
    <section className="data-analysis">
      <h2 className="data-analysis-title">Data Analysis</h2>
      <p className="data-analysis-intro">
        To better understand the needs and perspectives of college students with ADHD, we analyzed Reddit discussions to identify common themes, tool preferences, and emotional experiences.
      </p>

      <CollapsibleSection title="Thematic Coding">
        <p>
          We applied qualitative coding to over 500 Reddit threads using Taguette to identify recurring topics:
        </p>
        <ul>
          <li>Time and task management struggles</li>
          <li>App/tool recommendations</li>
          <li>Study techniques</li>
          <li>Motivational strategies</li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Topic Modeling">
        <p>
          We used LDA to uncover patterns in language use, revealing two dominant clusters:
        </p>
        <ul>
          <li><strong>Topic 0:</strong> App features and productivity tools</li>
          <li><strong>Topic 1:</strong> Lived experiences and emotional challenges</li>
        </ul>
        <p>We visualized topic distribution across subreddits using stacked bar graphs.</p>
      </CollapsibleSection>

      <CollapsibleSection title="Word Frequency Analysis">
        <p>
          Bar charts and word clouds were generated to visualize common terms like <em>time</em>, <em>task</em>, <em>notion</em>, and <em>help</em>, showing emphasis on organization and support.
        </p>
      </CollapsibleSection>

      <CollapsibleSection title="Sentiment Analysis">
        <p>
          Sentiment scores (VADER compound) were calculated per subreddit. This helped assess emotional tone and compare positivity/negativity levels across communities.
        </p>
        <p>Correlations were drawn between sentiment and ADHD mention rates to uncover emotional impact trends.</p>
      </CollapsibleSection>

      <CollapsibleSection title="Visualization Output">
        <p>
          Visual outputs (coherence plots, word clouds, topic bar charts) were stored for further UI/UX insights and integrated into the design workflow.
        </p>
      </CollapsibleSection>
    </section>
  );
};

export default DataAnalysis;