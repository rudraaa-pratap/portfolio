const projects = [
  {
    title: 'SnapURL',
    badge: 'Full-Stack URL Shortener',
    description:
      'A full-stack URL shortener that generates unique short links and redirects users to original URLs with low latency.',
    points: [
      'Engineered a full-stack URL shortener with low-latency redirects.',
      'Implemented click analytics, tracking total click counts and timestamped visit history for each shortened link.',
      'Designed a Mongoose schema and RESTful API to create short URLs and serve per-link analytics on demand.',
      'Deployed the backend on Render and the frontend on Vercel, using MongoDB Atlas as the persistent data store.',
    ],
    tech: ['Node.js', 'Express', 'MongoDB'],
    links: [{ label: 'Live Demo', url: 'https://snap-url-rho.vercel.app' }, { label: 'Backend API', url: 'https://snap-url-v2ta.onrender.com' }, { label: 'GitHub', url: 'https://github.com/rudraaa-pratap/snap-url' }],
  },
  {
    title: 'NexusForce',
    badge: 'Blockchain Dispute Resolution',
    description:
      'A trustless, decentralized P2P dispute resolution system built on Polygon. Think of it as a digital courtroom where code is the judge.',
    points: [
      'Architected a decentralized peer-to-peer dispute resolution platform on Polygon using escrow-based smart contracts.',
      'Developed a three-layer conflict resolution system comprising escrow, auto-resolution, and DAO juror voting mechanisms.',
      'Integrated Chainlink VRF for provably fair juror selection and IPFS for immutable, tamper-proof evidence storage.',
      'Implemented wallet connectivity using RainbowKit, Wagmi, ethers.js, and MetaMask for seamless Web3 interaction.',
      'Designed token-based staking and slashing mechanisms to incentivize honest participation and deter malicious behavior.',
    ],
    tech: [
      'Solidity',
      'Polygon',
      'React.js',
      'Chainlink VRF',
      'IPFS',
      'ethers.js',
      'RainbowKit',
    ],
    links: [{ label: 'Live Demo', url: 'https://nexus-force.vercel.app' }, { label: 'GitHub', url: 'https://github.com/rudraaa-pratap/NexusForce' }],
  },
  {
    title: 'Decentralised Drive',
    badge: 'Blockchain Cloud Storage',
    description:
      'A decentralized cloud storage platform leveraging IPFS and blockchain technology for tamper-resistant storage.',
    points: [
      'Developed a decentralized cloud storage platform leveraging IPFS and blockchain technology for tamper-resistant storage.',
      'Enabled secure file uploads and content-addressable retrieval through distributed storage infrastructure.',
      'Implemented wallet-based authentication and smart-contract-driven access management for file permissions.',
      'Built a responsive, user-friendly interface using React.js to streamline file upload and retrieval workflows.',
    ],
    tech: ['IPFS', 'Solidity', 'React.js'],
    links: [{ label: 'Live Demo', url: 'https://decentralised-drive.vercel.app' }, { label: 'GitHub', url: 'https://github.com/rudraaa-pratap/Decentralised_Drive' }],
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
