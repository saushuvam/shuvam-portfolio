import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Icon = ({ children, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const icons = {
  github: <Icon><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7a5.5 5.5 0 0 0-1.5-3.9A5.1 5.1 0 0 0 19.2 0S18 0 15.4 1.7a13.4 13.4 0 0 0-7 0C5.8 0 4.6 0 4.6 0a5.1 5.1 0 0 0-.1 3.6A5.5 5.5 0 0 0 3 7.5c0 5.4 3.5 6.6 6.8 7a4.8 4.8 0 0 0-1 3.5v4"/><path d="M8 19c-3 .9-3-1.4-4.2-1.8"/></Icon>,
  linkedin: <Icon><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></Icon>,
  arrow: <Icon><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></Icon>,
  external: <Icon size={16}><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></Icon>,
  mail: <Icon><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Icon>,
  code: <Icon><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></Icon>,
  database: <Icon><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></Icon>,
  terminal: <Icon><path d="m4 17 6-5-6-5M12 19h8"/></Icon>,
  trophy: <Icon><path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/></Icon>,
  graduation: <Icon><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 11v5c2.7 2.1 7.3 2.1 10 0v-5M21 10v6"/></Icon>,
  check: <Icon size={15}><path d="m5 12 4 4L19 6"/></Icon>
};

const skills = [
  ['Languages', ['Java', 'Python', 'C', 'JavaScript', 'SQL']],
  ['Frameworks & Libraries', ['React', 'Node.js', 'Express', 'Vite']],
  ['Databases', ['MySQL', 'Oracle', 'Redis', 'MongoDB']],
  ['Tools & Platforms', ['Git', 'GitHub Actions', 'Docker', 'REST APIs', 'AWS', 'Gemini API']]
];

const projects = [
  {
    name: 'CodeSense AI',
    type: 'Featured · Full Stack + AI',
    desc: 'A production-style AI code review platform that streams actionable feedback on pasted code, GitHub repositories, and pull request diffs.',
    stack: ['React', 'Node.js', 'Express', 'Gemini API', 'Redis', 'Docker'],
    metrics: ['44 automated tests', 'Real-time streaming', 'GitHub PR analysis', 'CI + Docker'],
    bullets: [
      'Real-time streaming pipeline using Node.js async generators and the Fetch Streams API.',
      'Redis caching with SHA-256 content hashing and a fail-open design for resilient reviews.',
      '44 automated tests with Jest/Vitest plus GitHub Actions CI against a live Redis container.',
      'Docker + docker-compose for reproducible one-command local setup.'
    ],
    github: 'https://github.com/saushuvam/ai-code-reviewer'
  },
  {
    name: 'Simon Says Game',
    type: 'Minor Project · Frontend',
    desc: 'An interactive memory game focused on browser-side logic, event handling, sequence generation and responsive interactions.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    metrics: ['Dynamic sequences', 'Score tracking'],
    bullets: [
      'Dynamic color sequences and score tracking.',
      'Game state, event handling and responsive user interactions implemented in vanilla JavaScript.'
    ],
    github: 'https://github.com/saushuvam/Simon-Says-Game'
  }
];

function App() {
  const [active, setActive] = useState('home');
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let id = 'home';
      for (const section of ['about', 'projects', 'skills', 'education', 'contact']) {
        const el = document.getElementById(section);
        if (el && window.scrollY + 180 >= el.offsetTop) id = section;
      }
      setActive(id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };

  return (
    <div className="site">
      <div className="noise" />
      <header>
        <div className="nav">
          <button className="brand" onClick={() => go('home')} aria-label="Go to home">
            <span className="brandMark">SS</span>
            <span>Shuvam Sau</span>
          </button>
          <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Open navigation menu">☰</button>
          <nav className={menu ? 'open' : ''}>
            {['about', 'projects', 'skills', 'education', 'contact'].map((x) => (
              <button key={x} className={active === x ? 'active' : ''} onClick={() => go(x)}>
                {x[0].toUpperCase() + x.slice(1)}
              </button>
            ))}
            <a className="navResume" href="/Resume-Shuvam-Sau.pdf" download>Resume ↗</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroGrid">
            <div className="heroCopy">
              <div className="eyebrow"><span className="pulse" /> Open to software development opportunities</div>
              <h1>Building software<br /><span>that solves real problems.</span></h1>
              <p className="lead">Aspiring Software Developer with a strong foundation in <b>Java, DSA, OOPs</b> and full-stack development. I build practical applications across <b>React, Node.js, Express and AI</b>.</p>
              <div className="targetLine"><span>{icons.check}</span> Targeting software development · full-stack opportunities</div>
              <div className="heroActions">
                <button className="primary" onClick={() => go('projects')}>Explore my work {icons.arrow}</button>
                <a className="secondary" href="/Resume-Shuvam-Sau.pdf" download>Download resume</a>
              </div>
              <div className="socials">
                <a href="https://github.com/saushuvam" target="_blank" rel="noreferrer">{icons.github} GitHub</a>
                <a href="https://linkedin.com/in/shuvam-sau-87318b361" target="_blank" rel="noreferrer">{icons.linkedin} LinkedIn</a>
                <a href="mailto:saushuvam@gmail.com">{icons.mail} Email</a>
              </div>
            </div>

            <div className="heroVisual">
              <div className="orb orb1" />
              <div className="orb orb2" />
              <div className="terminal">
                <div className="termTop"><span /><span /><span /><small>shuvam@dev ~ /portfolio</small></div>
                <div className="termBody">
                  <p><i>$</i> whoami</p>
                  <h3>shuvam_sau</h3>
                  <p><i>$</i> focus</p>
                  <h4>full_stack_development</h4>
                  <p><i>$</i> strongest_project</p>
                  <h4>CodeSense_AI</h4>
                  <p><i>$</i> stack --primary</p>
                  <div className="chips"><span>Java</span><span>React</span><span>Node.js</span><span>Express</span><span>Redis</span><span>Docker</span></div>
                  <p><i>$</i> status</p>
                  <div className="status"><span className="green" /> open_to_opportunities<span className="cursor">▋</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="scrollHint">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section id="about" className="section about">
          <div className="sectionHead"><span>01 / ABOUT</span><h2>Engineering mindset,<br /><em>continuous growth.</em></h2></div>
          <div className="aboutGrid">
            <div className="aboutText">
              <p>I’m a B.Tech Computer Science & Engineering student at <b>Future Institute of Engineering and Management</b>, building a strong base in software engineering fundamentals while turning ideas into working products.</p>
              <p>My recent work combines full-stack engineering with AI integration, testing, caching, CI and containerization — giving me hands-on exposure beyond just writing application code.</p>
              <p>I’m a quick learner who enjoys understanding how systems work, improving implementation quality, and contributing to real engineering teams.</p>
              <div className="achievementCallout">
                <div className="calloutIcon">{icons.trophy}</div>
                <div><span>ACHIEVEMENT</span><strong>3rd position · Innovate & Present 2026</strong><small>Departmental Group Project Competition · March 30, 2026</small></div>
              </div>
            </div>
            <div className="stats">
              <div><strong>7.75</strong><span>CGPA · till 6th sem</span></div>
              <div><strong>44</strong><span>automated tests</span></div>
              <div><strong>3rd</strong><span>project competition · 2026</span></div>
              <div><strong>2027</strong><span>expected graduation</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="sectionHead row"><div><span>02 / PROJECTS</span><h2>Work I’m proud of.</h2></div><a href="https://github.com/saushuvam" target="_blank" rel="noreferrer" className="textLink">View GitHub {icons.arrow}</a></div>
          <div className="projectList">
            {projects.map((p, i) => (
              <article className={'project ' + (i === 0 ? 'featured' : '')} key={p.name}>
                <div className="projectTop">
                  <div><div className="projectIndex">0{i + 1}</div><h3>{p.name}</h3><span className="projectType">{p.type}</span></div>
                  <a href={p.github} target="_blank" rel="noreferrer" className="iconLink" aria-label={'Open ' + p.name}>{icons.external}</a>
                </div>
                <p>{p.desc}</p>
                <div className="tagRow">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                {i === 0 && <div className="projectMetrics">{p.metrics.map((m) => <div key={m}><span>{icons.check}</span>{m}</div>)}</div>}
                {i !== 0 && <div className="projectMetrics compact">{p.metrics.map((m) => <div key={m}><span>{icons.check}</span>{m}</div>)}</div>}
                <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <a className="projectLink" href={p.github} target="_blank" rel="noreferrer">View source {icons.arrow}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="sectionHead"><span>03 / TOOLKIT</span><h2>Technologies I work with.</h2></div>
          <div className="skillGrid">
            {skills.map(([title, list], i) => (
              <div className="skillCard" key={title}>
                <div className="skillIcon">{i === 2 ? icons.database : i === 3 ? icons.terminal : icons.code}</div>
                <h3>{title}</h3>
                <div className="skillItems">{list.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="interestBar"><div className="interestIcon">{icons.database}</div><div><span>AREAS OF INTEREST</span><strong>Database Management Systems · Operating Systems</strong></div></div>
        </section>

        <section id="education" className="section education">
          <div className="sectionHead"><span>04 / JOURNEY</span><h2>Education & milestones.</h2></div>
          <div className="timeline">
            <div className="timelineItem"><div className="dot" /><div className="time">2023 — 2027</div><div><h3>B.Tech · Computer Science & Engineering</h3><p>Future Institute of Engineering and Management · MAKAUT</p><b>CGPA 7.75 <small>(till 6th semester)</small></b></div></div>
            <div className="timelineItem"><div className="dot" /><div className="time">2026</div><div><h3>3rd Place · Innovate & Present</h3><p>Departmental Group Project Competition · March 30, 2026</p></div></div>
            <div className="timelineItem"><div className="dot" /><div className="time">2021</div><div><h3>Higher Secondary · WBCHSE</h3><p>Vidyasagar Vidyapith · 81.33%</p></div></div>
            <div className="timelineItem"><div className="dot" /><div className="time">2019</div><div><h3>Secondary · WBBSE</h3><p>Ajodhyabarh Chandimata High School · 88%</p></div></div>
          </div>
          <div className="certs">
            <div><span>Certification</span><b>Full Stack Web Development using Python & Django</b><small>Ardent Computech Pvt. Ltd.</small></div>
            <div><span>Certification</span><b>Cloud Services Integration & Deployment with AWS</b><small>Jusense Technology Private Limited</small></div>
            <div><span>Achievement</span><b>Swami Vivekananda Merit-cum-Means Scholarship</b><small>Academic excellence</small></div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contactCard">
            <span>05 / CONTACT</span>
            <h2>Let’s build something<br /><em>useful together.</em></h2>
            <p>I’m interested in software development opportunities where I can learn quickly, contribute to real products and grow with an engineering team.</p>
            <div className="contactActions"><a className="primary" href="mailto:saushuvam@gmail.com">Say hello {icons.arrow}</a><a className="secondary" href="tel:+918145067179">+91 81450 67179</a></div>
            <div className="contactMeta"><span>Based in West Bengal, India</span><span>Available for opportunities</span><a href="https://linkedin.com/in/shuvam-sau-87318b361" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          </div>
        </section>
      </main>

      <footer><span>© 2026 Shuvam Sau</span><a href="https://github.com/saushuvam" target="_blank" rel="noreferrer">github.com/saushuvam</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
