const ExperienceSection = () => {
  const experiences = [
    {
      title: "ML Engineer Intern",
      company: "Melotech",
      location: "Remote",
      period: "Jan 2024 – Present",
      highlights: [
        "Worked on applied ML systems supporting internal product experimentation and content intelligence workflows.",
        "Built and integrated ML inference APIs using FastAPI, standardizing how models were accessed across internal tools and reducing setup friction during experimentation.",
        "Developed embedding-based retrieval pipelines to supply contextual signals to downstream ML and content workflows, improving relevance and consistency during evaluations.",
        "Improved system robustness by adding input validation, response normalization, and safe fallback handling, reducing malformed or partial inference responses by ~30%.",
        "Optimized inference paths using batching strategies and response-size controls, achieving 20–25% lower average latency under parallel internal workloads.",
        "Analyzed model outputs on real media samples to identify semantic drift, low-confidence retrieval, and recurring failure patterns, feeding insights into iterative improvements.",
      ],
      focusAreas: "Focus areas: ML inference reliability, retrieval quality, latency optimization, failure handling",
    },
    {
      title: "Software Engineer",
      company: "New Mek Solutions",
      location: "Hyderabad, India",
      period: "Jan 2022 – Dec 2023",
      highlights: [
        "Worked on backend and ML-powered services supporting internal NLP and analytics platforms.",
        "Developed and deployed ML-backed inference services using FastAPI and Docker, enabling consistent and reusable access to models across internal applications.",
        "Built and maintained REST APIs to serve ML inference results, supporting concurrent internal usage and reducing reliance on ad-hoc model execution.",
        "Created Python and SQL data pipelines for model training and evaluation, supporting repeatable experimentation on datasets ranging from tens of thousands to low millions of records.",
        "Implemented NLP pipelines with Hugging Face Transformers for document classification, summarization, and information extraction, enabling automated processing of unstructured data.",
        "Improved average API response times by 25–35% through async request handling and database query optimization.",
        "Collaborated with application teams to refine API contracts and data schemas, reducing integration issues in downstream ML applications.",
      ],
      focusAreas: "Focus areas: ML inference services, NLP pipelines, backend APIs, data pipelines, performance optimization",
    },
  ];

  const education = {
    degree: "Master of Science in Information Systems",
    school: "Saint Louis University",
    location: "St. Louis, MO",
    gpa: "GPA: 3.90",
  };

  return (
    <section id="experience" className="py-24 px-4 light-section" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 text-center">
          Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center" style={{ color: 'hsl(220 15% 20%)' }}>
          Professional Background
        </h2>

        {/* Work Experience */}
        <div className="mb-16 space-y-12">
          {experiences.map((experience, expIndex) => (
            <div key={expIndex} className={expIndex > 0 ? "pt-8 border-t" : ""} style={expIndex > 0 ? { borderColor: 'hsl(220 10% 85%)' } : {}}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif" style={{ color: 'hsl(220 15% 20%)' }}>
                    {experience.title} — {experience.company}
                  </h3>
                  {experience.location && (
                    <p className="text-primary font-medium">{experience.location}</p>
                  )}
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p style={{ color: 'hsl(220 10% 45%)' }}>{experience.period}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-4">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {experience.focusAreas && (
                <p className="text-sm font-semibold mt-4" style={{ color: 'hsl(220 15% 20%)' }}>
                  {experience.focusAreas}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="pt-8 border-t" style={{ borderColor: 'hsl(220 10% 85%)' }}>
          <h3 className="text-xl font-serif mb-6 uppercase tracking-wider" style={{ color: 'hsl(220 15% 20%)' }}>
            Education
          </h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-lg font-serif" style={{ color: 'hsl(220 15% 20%)' }}>
                {education.degree}
              </h4>
              <p className="text-primary font-medium">{education.school}</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p style={{ color: 'hsl(220 10% 45%)' }}>{education.gpa}</p>
              <p style={{ color: 'hsl(220 10% 55%)' }}>{education.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;