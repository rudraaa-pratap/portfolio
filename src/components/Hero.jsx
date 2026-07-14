export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">hey there, i'm</p>
            <h1 className="hero-name">
              Rudra <span className="highlight">Pratap</span>
            </h1>
            <p className="hero-desc">
              I’m Rudra, a CS undergrad at NIT Patna, passionate about creating projects
              in web dev. I also have a growing interest in Web3 and decentralized tech.
              Alongside building, I've spent some time doing DSA and
              loves to continue that journey.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">
                Check what I’ve built ↓
              </a>
              <a href="#contact" className="btn-outline">
                Let’s build something
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/rudraaa-pratap"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ GitHub
              </a>
              <a
                href="https://linkedin.com/in/rudra-pratap-a856b7373"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/coding_rp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ LeetCode
              </a>
              <a
                href="https://codeforces.com/profile/Rudraaaa_pratap"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ Codeforces
              </a>
              <a href="mailto:ruddrrraaaaa@gmail.com">↗ Email</a>
            </div>
          </div>

          <div className="hero-photo">
            <img
              src="/profile.jpg"
              alt="Rudra Pratap"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
