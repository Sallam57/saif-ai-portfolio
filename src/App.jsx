import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  TerminalSquare,
  Users,
} from "lucide-react";

const assetBase = import.meta.env.BASE_URL;

const links = {
  github: "https://github.com/Sallam57",
  linkedin: "https://www.linkedin.com/in/saif-sallam-674138298/",
  substack: "https://substack.com/@sallam1875",
  research: "https://substack.com/@sallam1875",
  email: "mailto:saif.tamer.sallam@gmail.com",
  phone: "tel:+201069490967",
  whatsapp: "https://wa.me/201069490967",
  resume: `${assetBase}assets/Saif-Eldin-Tamer-Sallam-Resume.pdf`,
  avatar: `${assetBase}assets/avatar.png`,
};

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Research", "#research"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const services = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    text: "Regression modeling, data cleaning, EDA, feature engineering, and model tuning for practical predictive systems.",
  },
  {
    icon: Code2,
    title: "Front-End Engineering",
    text: "Responsive React interfaces with clean component systems, strong UX flow, and polished interaction design.",
  },
  {
    icon: Layers3,
    title: "AI-Integrated Apps",
    text: "Bridging model logic with usable web products through Python workflows and modern JavaScript interfaces.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    text: "Recruitment, onboarding, project planning, team engagement, and cross-functional execution in student-led organizations.",
  },
];

const experiences = [
  {
    role: "Head of Human Resources",
    org: "Microsoft Learning Ambassadors, O6U",
    date: "Nov 2025 - Present",
    icon: Users,
    bullets: [
      "Directed end-to-end talent acquisition, recruitment cycles, and onboarding for new ambassadors within the university chapter.",
      "Developed engagement strategies and organized professional development workshops for a collaborative, high-performing team.",
    ],
  },
  {
    role: "Project Management Director",
    org: "Enactus O6U",
    date: "Oct 2024 - Nov 2025",
    icon: BriefcaseBusiness,
    bullets: [
      "Directed the full lifecycle of entrepreneurial and community-based projects through strategic planning and resource optimization.",
      "Coordinated cross-functional teams to meet critical milestones under deadline pressure while maximizing social and economic outcomes.",
    ],
  },
  {
    role: "Technical Training and Professional Development",
    org: "IBM SkillsBuild and Huawei ICT Academy",
    date: "Nov 2025",
    icon: BadgeCheck,
    bullets: [
      "Completed professional-level training in AI Fundamentals through IBM SkillsBuild.",
      "Completed advanced coursework in Artificial Intelligence and 5G technologies through Huawei ICT Academy.",
    ],
  },
];

const certifications = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Nov 2025",
  },
  {
    title: "5G and Artificial Intelligence",
    issuer: "Huawei ICT Academy",
    date: "Nov 2025",
  },
  {
    title: "Professional Front-End Web Development",
    issuer: "Professional Coursework",
    date: "Completed",
  },
];

const skillGroups = [
  {
    title: "Programming",
    skills: ["C++", "Python", "JavaScript"],
  },
  {
    title: "Front-End",
    skills: ["React.js", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "AI and Data",
    skills: ["Scikit-Learn", "XGBoost", "Pandas", "EDA", "Regression", "RandomizedSearchCV"],
  },
  {
    title: "Infrastructure",
    skills: ["Spark", "MapReduce", "Big Data Concepts", "IoT Foundations"],
  },
  {
    title: "Leadership",
    skills: ["Talent Acquisition", "Onboarding", "Team Engagement", "Project Management"],
  },
];

function ButtonLink({ href, children, variant = "primary", icon: Icon, download = false }) {
  return (
    <a className={`btn btn-${variant}`} href={href} download={download}>
      {Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </a>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function FigureCard({ title, caption, sourcePath, variant }) {
  const [hasError, setHasError] = useState(false);
  const src = `${assetBase}${sourcePath.replace("./", "")}`;

  return (
    <article className="glass-panel figure-card">
      <div className="figure-frame">
        {!hasError && (
          <img
            src={src}
            alt={title}
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
        {hasError && <ChartPlaceholder variant={variant} title={title} />}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{caption}</p>
        <span className="source-path">Source: {sourcePath}</span>
      </div>
    </article>
  );
}

function ChartPlaceholder({ variant, title }) {
  if (variant === "bars") {
    return (
      <div className="chart-placeholder bar-visual" role="img" aria-label={`${title} placeholder`}>
        <span style={{ "--h": "72%" }} />
        <span style={{ "--h": "48%" }} />
        <span style={{ "--h": "86%" }} />
        <span style={{ "--h": "64%" }} />
        <span style={{ "--h": "92%" }} />
        <span style={{ "--h": "58%" }} />
        <div className="chart-label">Model comparison</div>
      </div>
    );
  }

  return (
    <div className="chart-placeholder heatmap-visual" role="img" aria-label={`${title} placeholder`}>
      {Array.from({ length: 36 }).map((_, index) => (
        <span key={index} style={{ "--i": index }} />
      ))}
      <div className="chart-label">Correlation heatmap</div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell min-h-screen">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Saif Sallam home">
          <span className="brand-mark">SS</span>
          <span>Saif Sallam</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-resume" href={links.resume} download>
          <Download size={17} aria-hidden="true" />
          Resume
        </a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <span className="status-pill">
              <span />
              AI Engineer in training, builder by practice
            </span>
            <h1>Saif Eldin Tamer Sallam</h1>
            <p className="hero-kicker">AI Engineer | Writing Code That Thinks</p>
            <p className="hero-text">
              Artificial Intelligence student at October 6 University, building
              machine learning pipelines, React interfaces, and research-backed
              technical projects with a leadership mindset.
            </p>
            <div className="hero-meta" aria-label="Profile details">
              <span>
                <MapPin size={18} aria-hidden="true" />
                6th of October, Egypt
              </span>
              <span>
                <BrainCircuit size={18} aria-hidden="true" />
                ML, React, Python
              </span>
            </div>
            <div className="hero-actions">
              <ButtonLink href={links.resume} icon={Download} download>
                Download Resume
              </ButtonLink>
              <ButtonLink href="#projects" icon={Rocket} variant="secondary">
                View Projects
              </ButtonLink>
              <ButtonLink href={links.email} icon={Mail} variant="ghost">
                Contact Me
              </ButtonLink>
            </div>
            <div className="social-strip" aria-label="Social links">
              <a href={links.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                <Github size={20} />
              </a>
              <a href={links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={links.substack} aria-label="Substack" target="_blank" rel="noreferrer">
                <FileText size={20} />
              </a>
              <a href={links.phone} aria-label="Phone">
                <Phone size={20} />
              </a>
              <a href={links.email} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Saif avatar portrait">
            <div className="avatar-frame">
              <img src={links.avatar} alt="Vector portrait of Saif Eldin Tamer Sallam" />
            </div>
            <div className="signal-card">
              <TerminalSquare size={18} aria-hidden="true" />
              <span>AI systems, clean interfaces, real-world execution</span>
            </div>
          </div>
        </section>

        <section className="section stat-band" aria-label="Portfolio highlights">
          <div>
            <strong>0.91</strong>
            <span>House price model R2 score</span>
          </div>
          <div>
            <strong>44</strong>
            <span>Research survey participants</span>
          </div>
          <div>
            <strong>2027</strong>
            <span>Expected AI degree graduation</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Core tracks: AI, Web, Leadership</span>
          </div>
        </section>

        <section className="section split-section" id="about">
          <SectionHeader
            eyebrow="About"
            title="Technical builder with a leadership operating system."
            text="I combine AI engineering fundamentals, front-end product thinking, and team leadership to move ideas from research and planning into usable systems."
          />
          <div className="about-grid">
            <article className="glass-panel">
              <h3>Profile</h3>
              <p>
                Saif El Din Tamer Sallam is a highly motivated Artificial Intelligence
                student with a strong technical foundation in software development
                and front-end technologies. He is currently Head of Human Resources
                for Microsoft Learning Ambassadors and previously served as Project
                Management Director at Enactus.
              </p>
            </article>
            <article className="glass-panel">
              <h3>Focus</h3>
              <p>
                His work sits at the intersection of machine learning, React-based
                interface engineering, and cross-functional execution. He is actively
                expanding into predictive modeling, neural networks, big data
                infrastructure, and AI-powered web experiences.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="services">
          <SectionHeader
            eyebrow="What I Do"
            title="End-to-end thinking for intelligent products."
            text="A portfolio hub for AI credibility, internship opportunities, freelance work, research presence, and technical leadership."
          />
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="glass-panel service-card" key={title}>
                <Icon size={26} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Machine learning depth with product-grade presentation."
            text="The projects section is designed as the center of the site: practical ML, private React case studies, and research that connects AI with real human behavior."
          />

          <div className="project-grid">
            <article className="glass-panel project-showcase">
              <div className="project-topline">
                <span className="project-type">Machine Learning</span>
                <a href="https://github.com/Sallam57/ames-house-price-prediction/tree/main" target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <h3>House Price Prediction</h3>
              <p>
                End-to-end regression project predicting house prices through data
                cleaning, exploratory analysis, feature engineering, model selection,
                and RandomizedSearchCV tuning.
              </p>
              <div className="metric-row">
                <span><strong>R2</strong> 0.91</span>
                <span><strong>RMSE</strong> 0.12 log</span>
                <span><strong>Role</strong> AI Engineer</span>
              </div>
              <div className="pipeline" aria-label="Machine learning pipeline">
                {["Raw data", "Cleaning", "EDA", "Feature engineering", "Model tuning", "Prediction"].map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
              <pre className="code-window" aria-label="Machine learning code snippet">
                <code>{`pipeline = Pipeline([
    ("preprocess", feature_transformer),
    ("model", XGBRegressor(random_state=42))
])

search = RandomizedSearchCV(
    pipeline,
    param_distributions=params,
    cv=5,
    scoring="neg_root_mean_squared_error"
)`}</code>
              </pre>
            </article>

            <FigureCard
              title="Correlation Heatmap"
              caption="A visual summary of feature relationships used to guide EDA and feature selection."
              sourcePath="./outputs/figures/correlation_heatmap.png"
              variant="heatmap"
            />
            <FigureCard
              title="Model Comparison"
              caption="A comparison view for evaluating tuned model performance and selecting the final approach."
              sourcePath="./outputs/figures/model_comparison.png"
              variant="bars"
            />

            <article className="glass-panel project-card">
              <div className="project-icon">
                <Code2 size={24} aria-hidden="true" />
              </div>
              <span className="project-type">React Development</span>
              <h3>Modern Interactive React Web Applications</h3>
              <p>
                Responsive interfaces focused on connecting backend logic and AI
                workflows with clean, reusable, cross-device UI components.
              </p>
              <div className="tag-row">
                {["React.js", "JavaScript", "HTML5", "CSS3"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="muted-note">Private case studies available upon request.</p>
            </article>

            <article className="glass-panel project-card">
              <div className="project-icon">
                <FileText size={24} aria-hidden="true" />
              </div>
              <span className="project-type">Research</span>
              <h3>AI and Social Media Behavioral Research</h3>
              <p>
                A 14-page academic paper analyzing how AI algorithms and social
                media usage affect user behavior, built from survey design and
                data analysis across 44 participants.
              </p>
              <a className="text-link" href={links.research} target="_blank" rel="noreferrer">
                Read on Substack <ExternalLink size={15} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="section research-section" id="research">
          <SectionHeader
            eyebrow="Research and Writing"
            title="Analyzing AI impact beyond the codebase."
            text="A polished academic presence for technical writing, survey-driven research, and applied AI thinking."
          />
          <div className="research-grid">
            <article className="glass-panel research-card">
              <span className="project-type">Research Paper</span>
              <h3>Analyzing the Effect of Social Media Usage and Artificial Intelligence on User Behavior</h3>
              <p>
                This research examines how social media platforms and AI-powered
                recommendation systems influence user behavior, attention, and
                decision-making. The study combines survey methodology with data
                analysis to identify patterns in how users perceive algorithmic
                personalization and its social impact.
              </p>
              <p>
                As co-author, Saif helped define the study goals, design the
                survey structure, analyze responses from 44 participants, and
                synthesize practical conclusions on AI&apos;s behavioral influence.
              </p>
              <ButtonLink href={links.research} icon={FileText} variant="secondary">
                Read on Substack
              </ButtonLink>
            </article>
            <article className="glass-panel insight-card">
              <BarChart3 size={28} aria-hidden="true" />
              <h3>Key Finding Direction</h3>
              <p>
                AI-driven feeds can shape what users notice, trust, and repeatedly
                engage with, making transparent design and responsible technical
                choices central to future digital products.
              </p>
              <div className="tag-row">
                {["Survey Design", "Data Analysis", "AI Ethics", "User Behavior"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeader
            eyebrow="Experience"
            title="Leadership roles that sharpen technical execution."
            text="The experience section positions Saif as a technical leader who can coordinate people, projects, and delivery."
          />
          <div className="timeline">
            {experiences.map(({ role, org, date, icon: Icon, bullets }) => (
              <article className="glass-panel timeline-item" key={role}>
                <div className="timeline-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <span className="date-label">{date}</span>
                  <h3>{role}</h3>
                  <p className="org-label">{org}</p>
                  <ul>
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <SectionHeader
            eyebrow="Education"
            title="Formal AI foundation with active professional training."
          />
          <div className="education-grid">
            <article className="glass-panel degree-card">
              <GraduationCap size={30} aria-hidden="true" />
              <h3>Bachelor of Science in Artificial Intelligence</h3>
              <p>October 6 University</p>
              <span>Expected graduation: June 2027</span>
              <div className="tag-row">
                {["Machine Learning", "Data Structures", "Algorithms", "Operations Research", "Spark", "MapReduce", "IoT", "Full-Stack Web"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
            {certifications.map((cert) => (
              <article className="glass-panel cert-card" key={cert.title}>
                <ShieldCheck size={24} aria-hidden="true" />
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span>{cert.date}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeader
            eyebrow="Skills"
            title="A practical stack for intelligent web products."
            text="Grouped for scanning by recruiters, collaborators, and clients."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="glass-panel skill-card" key={group.title}>
                <div className="skill-heading">
                  <Database size={20} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div className="tag-row">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s build something intelligent.</h2>
            <p>
              Open to AI engineering internships, freelance web and AI integration
              projects, research conversations, and technical leadership opportunities.
            </p>
          </div>
          <div className="contact-actions">
            <ButtonLink href={links.email} icon={Mail}>
              saif.tamer.sallam@gmail.com
            </ButtonLink>
            <ButtonLink href={links.whatsapp} icon={Phone} variant="secondary">
              +20 106 949 0967
            </ButtonLink>
            <ButtonLink href={links.linkedin} icon={Linkedin} variant="ghost">
              LinkedIn
            </ButtonLink>
            <ButtonLink href={links.github} icon={Github} variant="ghost">
              GitHub
            </ButtonLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Saif Eldin Tamer Sallam</span>
        <span>AI Engineer | Writing Code That Thinks</span>
      </footer>
    </div>
  );
}

export default App;
