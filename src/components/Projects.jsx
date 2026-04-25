const projects = [
  {
    title: 'NexusForce',
    badge: 'Blockchain / Web3',
    description:
      'A trustless, decentralized P2P dispute resolution system built on Polygon. Think of it as a digital courtroom where code is the judge.',
    points: [
      'Built a 3-layer conflict resolution engine — Smart Contract Escrow, Auto-Resolution, and a DAO Juror Tribunal.',
      'Engineered Solidity 0.8.x smart contracts that auto-settle ~80% of disputes instantly.',
      'Integrated Chainlink VRF for provably random juror selection and IPFS as a tamper-proof evidence vault.',
      'Frontend built with Next.js 14, Tailwind CSS, and Framer Motion. Wallet connectivity via RainbowKit + Wagmi v2.',
      'Designed the NXF Token economy — stake to earn juror rights, vote on disputes, get slashed for bad behavior.',
    ],
    tech: [
      'Solidity',
      'Next.js',
      'Polygon',
      'Chainlink VRF',
      'IPFS',
      'ethers.js',
      'RainbowKit',
      'Tailwind',
    ],
    links: [{ label: 'Live Demo', url: '#' }, { label: 'GitHub', url: 'https://github.com/AdityaKumar1511/NexusForce' }],
  },
  {
    title: 'Stubble Connect',
    badge: 'Hackathon Project',
    description:
      'Built for the GDG TechSprint Hackathon. A responsive web platform tackling the hackathon\'s problem statement with clean UI and solid functionality.',
    points: [
      'Developed interactive UI using HTML, CSS, and vanilla JavaScript.',
      'Implemented dynamic components for better usability and performance.',
      'Deployed and managed via Firebase Hosting.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    links: [{ label: 'Live Demo', url: '#' }, { label: 'GitHub', url: 'https://github.com/AdityaKumar1511/Stubble_Connect' }],
  },
  {
    title: 'Robotics Club Website — NIT Patna',
    badge: 'Web Dev',
    description:
      'The official website for our college robotics club. Events, team showcase, project highlights — all in one place.',
    points: [
      'Designed and developed from scratch with sections for events, team members, and project showcases.',
      'Fully responsive design for seamless cross-device compatibility.',
      'Deployed and maintained on Firebase.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    links: [{ label: 'Live Demo', url: '#' }, { label: 'GitHub', url: 'https://github.com/AdityaKumar1511/robotics-club-website' }],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-label">// things i've built</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects-list">
          {projects.map((p) => (
            <div className="project-card fade-in" key={p.title}>
              <div className="project-header">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-badge">{p.badge}</span>
              </div>
              <p className="project-desc">{p.description}</p>
              <ul className="project-points">
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
