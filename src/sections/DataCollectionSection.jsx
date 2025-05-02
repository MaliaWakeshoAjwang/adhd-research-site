import React from 'react';
import '../styles/pages/DataCollection.css';

const DataCollection = () => {
  return (
    <section className="data-section">
      <div className="data-container">
        <h2 className="data-heading">🧪 data collection instruments</h2>
        <p className="data-intro">
          to explore the academic challenges faced by college students with adhd and the digital tools that could support them, we are collecting data through a combination of qualitative and quantitative methods.
        </p>

        <div className="data-grid">
          {/* Survey Card */}
          <div className="data-card">
            <h3>📋 surveys</h3>
            <ul>
              <li><strong>what:</strong> online survey on demographics and academic habits</li>
              <li><strong>questions:</strong> focus on time management, tool usage, and preferences</li>
              <li><strong>samples:</strong>
                <ul>
                  <li>“which academic tasks do you find most difficult to manage?”</li>
                  <li>“which digital tools or apps do you use?”</li>
                  <li>“how effective are these tools?”</li>
                  <li>“what features would your ideal app have?”</li>
                </ul>
              </li>
              <li><strong>platform:</strong> <a href="https://www.google.com/forms/about/" target="_blank" rel="noreferrer">google forms</a></li>
            </ul>
          </div>

          {/* Interview Card */}
          <div className="data-card">
            <h3>🎤 focus groups & interviews</h3>
            <ul>
              <li><strong>what:</strong> semi-structured in-person conversations with a subset of students</li>
              <li><strong>topics:</strong> daily workflows, tool experiences, motivation, emotional impact</li>
              <li><strong>samples:</strong>
                <ul>
                  <li>“walk us through your task planning process.”</li>
                  <li>“what frustrates you about current tools?”</li>
                  <li>“what would an ideal app feel like?”</li>
                  <li>“what motivates or discourages your use of tools?”</li>
                </ul>
              </li>
              <li><strong>platform:</strong> in-person sessions</li>
            </ul>
          </div>

          {/* Reddit Card */}
          <div className="data-card">
            <h3>🌐 secondary data (reddit)</h3>
            <ul>
              <li><strong>what:</strong> analysis of public reddit threads focused on adhd and academic tools</li>
              <li><strong>focus:</strong> themes of academic struggle, tool feedback, and user advice</li>
              <li><strong>sites:</strong> r/adhd, r/adhduk, r/adhd_college</li>
              <li><strong>privacy:</strong> only public posts used, no usernames or private data collected</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCollection;