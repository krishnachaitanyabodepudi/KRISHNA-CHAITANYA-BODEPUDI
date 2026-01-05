const ExperienceSection = () => {
  const experiences = [
    {
      title: "ML Engineer Intern",
      company: "Melotech",
      period: "January 2024 – Present",
      highlights: [
        "Worked on ML-backed backend services supporting internal content and product experimentation workflows, focusing on inference reliability and predictable system behavior rather than model novelty.",
        "Implemented FastAPI-based APIs for model inference and embedding-based retrieval, ensuring strict request validation and safe handling of malformed or incomplete inputs.",
        "Built and tested vector embedding pipelines to surface relevant contextual information for downstream ML and creative processes, while avoiding cross-request and cross-session leakage.",
        "Assisted with inference-time optimization tasks, including batching strategies and response-size control, to keep latency and cost within acceptable bounds during internal iteration.",
        "Evaluated model outputs against real media samples to identify failure modes such as semantic drift, low-confidence retrieval, and incorrect context injection.",
        "Added defensive handling in inference and retrieval paths so that failures returned safe fallbacks instead of partial, misleading, or unstable results.",
        "Collaborated with engineers and product stakeholders to refine system behavior based on observed edge cases and real usage patterns, helping transition prototype ideas into deployable services.",
      ],
    },
    {
      title: "Software Engineer",
      company: "New Mek Solutions",
      period: "January 2022 – December 2023",
      highlights: [
        "Built and maintained ML-backed backend services supporting internal NLP, analytics, and data-processing workflows used by product and business teams.",
        "Designed and deployed FastAPI-based inference endpoints, handling concurrent requests with stable latency and predictable response behavior under parallel access.",
        "Developed Python and SQL data pipelines for model training and evaluation, processing datasets ranging from tens of thousands to low millions of records depending on use case.",
        "Implemented NLP pipelines using Hugging Face Transformers for document classification, summarization, and information extraction, replacing brittle rule-based approaches.",
        "Optimized API performance by introducing async request handling, improving database access patterns, and reducing redundant computation, lowering average response latency by 25–35%.",
        "Containerized services using Docker and supported CI/CD workflows, improving deployment consistency and reducing environment-related issues across releases.",
        "Investigated production issues related to data quality, model outputs, and service regressions, contributing to post-deployment stability and reliability.",
        "Worked closely with downstream consumers of ML services to refine API contracts, adjust data schemas, and resolve integration issues, improving the usability of ML outputs in dependent applications.",
      ],
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
                    {experience.title}
                  </h3>
                  <p className="text-primary font-medium">{experience.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p style={{ color: 'hsl(220 10% 45%)' }}>{experience.period}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>{highlight}</span>
                  </li>
                ))}
              </ul>
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