import React, { useState } from 'react';
import '../styles/pages/Results.css';
import FindingsCarousel from '../components/FindingsCarousel';

const Results = () => {
  const [showWordFreq, setShowWordFreq] = useState(false);
  const [showSentiment, setShowSentiment] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showMentions, setShowMentions] = useState(false);
  const [showPhrases, setShowPhrases] = useState(false);

  const  WordFrequencyAnalysis = [
    { src: `${import.meta.env.BASE_URL}visuals/top_15_words_analysis_subreddits_lemmatized_text.png`, alt: 'Top Words Subreddits' },
    { src: `${import.meta.env.BASE_URL}visuals/top_15_words_analysis_threads_lemmatized_text.png`, alt: 'Top Words Threads' },
  ];

  const  SentimentAnalysis = [
    { src: `${import.meta.env.BASE_URL}visuals/subreddit_sentiment_comparison.png`, alt: 'Subreddit Sentiment' },
    { src: `${import.meta.env.BASE_URL}visuals/thread_sentiment_comparison.png`, alt: 'Thread Sentiment' },
    { src: `${import.meta.env.BASE_URL}visuals/category_sentiment_comparison.png`, alt: 'Category Sentiment' },
  ];

  const  TopicModelingDistribution = [
    { src: `${import.meta.env.BASE_URL}visuals/topic_distribution_heatmap.png`, alt: 'Topic Heatmap' },
    { src: `${import.meta.env.BASE_URL}visuals/topic_1_barplot.png`, alt: 'Topic 1 Words' },
    { src: `${import.meta.env.BASE_URL}visuals/topic_2_barplot.png`, alt: 'Topic 2 Words' },
    { src: `${import.meta.env.BASE_URL}visuals/coherence_vs_num_topics.png`, alt: 'Coherence vs Topics' },
  ];

  const  ADHDMentionsEmotionalPatterns = [
    { src: `${import.meta.env.BASE_URL}visuals/category_adhd_mention_rate.png`, alt: "ADHD Mention Rate by Category" },
    { src: `${import.meta.env.BASE_URL}visuals/sentiment_vs_adhd_subreddits.png`, alt: "Sentiment vs ADHD Mentions Subreddits" },
    { src: `${import.meta.env.BASE_URL}visuals/sentiment_vs_adhd_threads.png`, alt: "Sentiment vs ADHD Mentions Threads" },
  ];

  const  PhraseExtraction = [
    { src: `${import.meta.env.BASE_URL}visuals/top_phrases_bar_chart.png`, alt: "Top Phrases Bar Chart" },
  ];
  

  return (
    <section className="results">
      <h2>Research Findings</h2>
      <p className="results-description">
        Our analysis combined topic modeling, word frequency, sentiment analysis, and keyword extraction to uncover trends from ADHD-related Reddit discussions and survey data. Below are the key insights visualized through charts and graphs.
      </p>

      <div className="result-section">
        <button className="toggle-button" onClick={() => setShowWordFreq(!showWordFreq)}>
          Word Frequency Analysis
        </button>
        {showWordFreq && (
          <div className="image-gallery">
            <p>
              These bar charts highlight the most frequently occurring words in subreddit and thread discussions. Terms like "time," "work," and "feel" are highly recurring, reflecting key academic and emotional pain points in the ADHD student experience.
            </p>
            <FindingsCarousel images={WordFrequencyAnalysis} />
          </div>
        )}
      </div>

      <div className="result-section">
        <button className="toggle-button" onClick={() => setShowSentiment(!showSentiment)}>
          Sentiment Analysis
        </button>
        {showSentiment && (
          <div className="image-gallery">
            <p>
              Sentiment scores were calculated using the VADER compound score. Results show more positive sentiment in productivity-related subreddits and threads, while general ADHD-focused communities expressed mixed or lower sentiment, likely reflecting greater frustration and need for support.
            </p>
            <FindingsCarousel images={SentimentAnalysis} />
          </div>
        )}
      </div>

      <div className="result-section">
        <button className="toggle-button" onClick={() => setShowTopics(!showTopics)}>
          Topic Modeling & Distribution
        </button>
        {showTopics && (
          <div className="image-gallery">
            <p>
              Topic modeling grouped conversations into two dominant themes. Heatmaps and word distributions help visualize the topic proportions across documents and highlight unique linguistic patterns in ADHD-related discourse.
            </p>
            <FindingsCarousel images={TopicModelingDistribution} />
          </div>
        )}
      </div>

      <div className="result-section">
        <button className="toggle-button" onClick={() => setShowMentions(!showMentions)}>
          ADHD Mentions and Emotional Patterns
        </button>
        {showMentions && (
          <div className="image-gallery">
            <p>
              By examining how often "ADHD" is mentioned and comparing that with emotional sentiment, we can better understand community needs. Subreddits and threads with high mention rates often show lower sentiment, reinforcing the emotional weight behind these discussions.
            </p>
            <FindingsCarousel images={ADHDMentionsEmotionalPatterns} />
          </div>
        )}
      </div>

      <div className="result-section">
        <button className="toggle-button" onClick={() => setShowPhrases(!showPhrases)}>
          Phrase Extraction
        </button>
        {showPhrases && (
          <div className="image-gallery">
            <p>
              Common multi-word expressions (e.g., "body double", "todo list") reveal the practical strategies and tools that students are already discussing. These phrases help inform the feature set for clarifi.
            </p>
            <FindingsCarousel images={PhraseExtraction} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;