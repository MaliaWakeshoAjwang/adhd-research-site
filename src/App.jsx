import './styles/pages/App.css'

// import Header from './components/Header';
// import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import ProblemSpaceSection from './sections/ProblemSpaceSection';
import ResearchQuestionsSection from './sections/ResearchQuestionsSection';
import TargetAudienceSection from './sections/TargetAudienceSection';
import DataCollectionSection from './sections/DataCollectionSection';
import DataAnalysisSection from './sections/DataAnalysisSection';
import ResultsSection from './sections/ResultsSection';
import ConclusionSection from './sections/ConclusionSection';
import TeamContributionSection from './sections/TeamContributionsSection';


function App() {

  return (
    <>
    
      {/* <Header /> */}

      <HeroSection />
      <ProblemSpaceSection />
      <ResearchQuestionsSection />
      <TargetAudienceSection />
      <DataCollectionSection />
      <DataAnalysisSection />
      <ResultsSection />
      <ConclusionSection />
      <TeamContributionSection />

      {/* <Footer /> */}

    </>
  )
}

export default App
