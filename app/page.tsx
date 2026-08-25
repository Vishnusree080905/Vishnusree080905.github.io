const skills = [
  { title: "Programming", items: ["Python", "JavaScript", "HTML & CSS"] },
  { title: "AI & data", items: ["Machine Learning", "TensorFlow", "Scikit-learn"] },
  { title: "Embedded & robotics", items: ["Arduino", "ROS2", "Microcontrollers"] },
  { title: "Tools", items: ["Git & GitHub", "VS Code"] },
];

const projects = [
  { number: "01", title: "Personal Portfolio", summary: "A responsive portfolio website designed and built with Next.js, Tailwind CSS, and GitHub Pages.", stack: ["Next.js", "TypeScript", "Tailwind CSS"], status: "Live now" },
  { number: "02", title: "Autonomous Vehicle Sensor Redundancy", summary: "Developed a sensor-redundancy prototype using LiDAR, radar, and cameras with real-time sensor fusion for safer autonomous-vehicle decisions.", stack: ["LiDAR", "Radar", "Sensor fusion"], status: "Mechatronics project" },
  { number: "03", title: "Personal Money Tracker", summary: "Built a responsive web-based money tracker with budget management, category sorting, and dynamic chart visualizations.", stack: ["HTML", "CSS", "JavaScript"], status: "Web application" },
  { number: "04", title: "Identity Misuse Prevention", summary: "Developed an AI-based application to detect and recognize faces from images, extracting key features to improve recognition accuracy.", stack: ["Python", "Machine learning", "Computer vision"], status: "AI project" },
];

const experiences = [
  ["Common Rocket", "Contributed to a robotic-arm project, gaining practical experience in embedded systems and robotics."],
  ["AICTE AI Internship", "Built experience with machine learning, neural networks, TensorFlow, Scikit-learn, and Python-based model development."],
  ["Titan Company Limited", "Learned through data analysis, process optimization, and teamwork in an industry environment."],
  ["Dia Infra Solutions Pvt. Ltd.", "Gained exposure to conceptual design, project planning, and IT workflows."],
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Vishnu S S home">VSS<span>.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow enter-one"><span className="status-dot" /> Open to internships and jobs</p>
          <h1 className="enter-two">Mechatronics student.</h1>
          <div className="hero-copy enter-three"><p className="intro-name">Vishnu S S,</p><p>An aspiring software engineer exploring Python, AI/ML, cloud computing, and the systems that turn good ideas into useful technology.</p></div>
          <div className="hero-actions enter-four"><a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a><a className="button button-secondary" href="/Vishnu-Resume.pdf" target="_blank">VIEW RESUME <span aria-hidden="true">↗</span></a></div>
        </div>
        
        <aside className="hero-card enter-four" aria-label="Focus areas"><p className="card-label">Current focus</p><ul><li>Python development</li><li>AI &amp; machine learning</li><li>Cloud computing</li><li>Engineering systems</li></ul></aside>
      </section>

      <section className="section about-section" id="about">
        <p className="section-kicker">01 / About me</p>
        <div className="section-heading split-heading"><h2>Engineering perspective.<br />Digital ambition.</h2><div><p>My mechatronics background taught me to think in systems: how hardware, data, automation, and people work together. I&apos;m now applying that mindset to software products and intelligent tools.</p><p>I&apos;m seeking opportunities where I can learn fast, contribute thoughtfully, and grow into a strong software engineer.</p></div></div>
      </section>

      <section className="section skills-section" id="skills">
        <p className="section-kicker">02 / Skills</p>
        <div className="section-heading"><h2>Tools I&apos;m building with.</h2><p>Focused on practical software skills, with an engineering foundation.</p></div>
        <div className="skill-grid">{skills.map((skill) => <article className="skill-card" key={skill.title}><h3>{skill.title}</h3><div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="projects-topline"><p className="section-kicker">03 / Selected work</p><p className="project-note">Projects across software, AI, and mechatronics.</p></div>
        <div className="section-heading"><h2>Proof, not just potential.</h2><p>Projects are where I document what I built, how I approached it, and what I learned.</p></div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><p className="project-status">{project.status}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><span className="project-arrow" aria-hidden="true">↗</span></article>)}</div>
      </section>

      <section className="section education-section">
        <p className="section-kicker">04 / Education</p>
        <div className="education-card"><div><p className="card-label">2023 - 2027 · Current CGPA 8.71 (through semester 5)</p><h2>B.E. Mechatronics Engineering</h2><p>SNS College of Technology, Coimbatore.</p></div><span className="education-mark">MCT</span></div>
      </section>

      <section className="section experience-section">
        <p className="section-kicker">05 / Experience &amp; credentials</p>
        <div className="section-heading"><h2>Learning in the real world.</h2><p>Hands-on exposure across AI, embedded systems, robotics, design, and industry workflows.</p></div>
        <div className="experience-grid">{experiences.map(([title, description]) => <article className="experience-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="section certification-section">
        <p className="section-kicker">06 / Certifications &amp; participation</p>
        <div className="section-heading"><h2>Always learning.<br />Always showing up.</h2><p>Experiences that reflect my commitment to technical learning, collaboration, and continuous growth.</p></div>
        <div className="certification-grid">
          <article className="certification-card featured"><p>Certification</p><h3>Microsoft Azure AI Fundamentals</h3><strong>AI-900 certified</strong></article>
          <article className="certification-card"><p>Event participation</p><h3>Wings of Fire</h3><span>SNS College of Technology · 18 October 2023</span></article>
          <article className="certification-card"><p>National quiz</p><h3>ROTA QUEST</h3><span>4-day national quizzarathon · 23 - 27 January 2025</span></article>
          <article className="certification-card"><p>Hackathon</p><h3>Kumaraswamy College of Engineering</h3><span>Participant</span></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">07 / Contact</p><h2>Let&apos;s build something useful.</h2><p>I&apos;m open to jobs, internships, entry-level roles, and conversations about technology.</p>
        <a className="contact-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=vishnuss0809@gmail.com" target="_blank" rel="noopener noreferrer">vishnuss0809@gmail.com <span aria-hidden="true">↗</span></a>
        <a className="linkedin-link" href="https://www.linkedin.com/in/vishnu-sreenath/" target="_blank" rel="noreferrer">linkedin.com/in/vishnu-sreenath ↗</a>
        <div className="contact-links"><a href="https://github.com/vishnusree080905" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/Vishnu-Resume.pdf" target="_blank">Résumé ↗</a><a href="#top">Back to top ↑</a></div>
      </section>
      <footer><span>© 2026 Vishnu S S</span><span>Designed &amp; built with Next.js</span></footer>
    </main>
  );
}
