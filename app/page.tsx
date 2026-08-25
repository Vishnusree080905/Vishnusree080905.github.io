const skills = [
  { title: "Programming", items: ["Python", "JavaScript", "HTML & CSS"] },
  { title: "Software", items: ["Next.js", "React", "Git & GitHub"] },
  { title: "AI & data", items: ["Machine Learning", "Data Analysis", "Problem Solving"] },
  { title: "Engineering", items: ["Mechatronics", "Automation", "Cloud Computing"] },
];

const projects = [
  { number: "01", title: "Personal Portfolio", summary: "A responsive portfolio website designed and built with Next.js, Tailwind CSS, and GitHub Pages.", stack: ["Next.js", "TypeScript", "Tailwind CSS"], status: "Live now" },
  { number: "02", title: "Your AI / Python Project", summary: "Add an AI, machine-learning, automation, or data project here. Explain the problem, your solution, and its outcome.", stack: ["Python", "AI / ML", "Coming soon"], status: "Add your project" },
  { number: "03", title: "Your Mechatronics Project", summary: "Show how you combine engineering and software—for example, an IoT dashboard, robotics system, or smart automation project.", stack: ["Mechatronics", "Software", "Coming soon"], status: "Add your project" },
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
          <p className="eyebrow enter-one"><span className="status-dot" /> Open to software internships</p>
          <h1 className="enter-two">Mechatronics student.<br /><em>Software-minded</em> builder.</h1>
          <p className="hero-copy enter-three">I&apos;m <strong>Vishnu S S</strong>—an aspiring software engineer exploring Python, AI/ML, cloud computing, and the systems that turn good ideas into useful technology.</p>
          <div className="hero-actions enter-four"><a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a><a className="button button-secondary" href="#contact">Let&apos;s connect <span aria-hidden="true">↗</span></a></div>
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
        <div className="projects-topline"><p className="section-kicker">03 / Selected work</p><p className="project-note">Replace the two “Your project” cards as you build them.</p></div>
        <div className="section-heading"><h2>Proof, not just potential.</h2><p>Projects are where I document what I built, how I approached it, and what I learned.</p></div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><p className="project-status">{project.status}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><span className="project-arrow" aria-hidden="true">↗</span></article>)}</div>
      </section>

      <section className="section education-section">
        <p className="section-kicker">04 / Education</p>
        <div className="education-card"><div><p className="card-label">Currently studying</p><h2>Mechatronics Engineering</h2><p>Add your college name, graduation year, achievements, certifications, and relevant coursework here.</p></div><span className="education-mark">ME</span></div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">05 / Contact</p><h2>Let&apos;s build something useful.</h2><p>I&apos;m open to internships, entry-level software roles, collaborations, and conversations about technology.</p>
        <a className="contact-email" href="mailto:your-email@example.com">your-email@example.com <span aria-hidden="true">↗</span></a>
        <div className="contact-links"><a href="https://github.com/vishnusree080905" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div>
      </section>
      <footer><span>© 2026 Vishnu S S</span><span>Designed &amp; built with Next.js</span></footer>
    </main>
  );
}
