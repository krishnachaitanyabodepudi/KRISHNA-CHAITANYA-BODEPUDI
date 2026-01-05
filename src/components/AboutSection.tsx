import img5591 from "@/assets/img5591.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 light-section">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 text-center">
          About
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center" style={{ color: 'hsl(220 15% 20%)' }}>
          Let me introduce myself.
        </h2>

        {/* Hero intro with photo */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
            <img 
              src={img5591} 
              alt="Krishna Chaitanya Bodepudi" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
              I build ML inference and LLM-backed backend systems where incorrect outputs are treated as failures, not acceptable tradeoffs. My focus is on turning models into API-driven services that behave predictably under load, malformed inputs, and partial context.
            </p>
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
              My work centers on FastAPI-based inference services, embedding-based retrieval pipelines, and strict validation and failure handling. In applied systems, this approach has reduced inference latency by 20–25% and cut malformed or partial responses by ~30% through batching, validation, and fallback strategies.
            </p>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-16">
          <h3 className="text-xl font-serif mb-4 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
            Profile
          </h3>
          <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
            Applied AI / ML Engineer specializing in production-grade ML inference services and LLM-powered backend systems, with a strong emphasis on correctness, reliability, and predictable API behavior.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="mb-16">
          <h3 className="text-xl font-serif mb-6 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
            Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                ML Inference & APIs
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Building FastAPI-based inference services optimized for latency and parallel execution, with explicit input validation, batching, and safe failure behavior.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                LLM & Retrieval Systems
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Designing embedding-based retrieval pipelines with strict scoping and relevance control to ensure consistent, non-misleading context injection.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Reliability & Failure Handling
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Treating malformed inputs, low-confidence outputs, and edge cases as first-class failure conditions rather than silent degradations.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Backend for Applied ML
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Developing Python-based backend services and data pipelines that integrate machine learning cleanly into larger systems with clear operational boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'hsl(220 15% 20%)' }}>Fullname:</p>
            <p style={{ color: 'hsl(220 10% 45%)' }}>Krishna Chaitanya Bodepudi</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'hsl(220 15% 20%)' }}>Location:</p>
            <p style={{ color: 'hsl(220 10% 45%)' }}>St. Louis, MO (Open to Relocate)</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'hsl(220 15% 20%)' }}>Email:</p>
            <a href="mailto:kcbodepudi@gmail.com" className="text-primary hover:underline">kcbodepudi@gmail.com</a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'hsl(220 15% 20%)' }}>LinkedIn:</p>
            <a href="https://www.linkedin.com/in/krishna-chaitanya-bodepudi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">krishna-chaitanya-bodepudi</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;