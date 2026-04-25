export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <p className="section-label">// about me</p>
        <h2 className="section-title">A bit more context</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I’m Rudra, a first-year Computer Science undergraduate at NIT Patna, focused on building and understanding real-world web applications.
            </p>
            <p>
              I enjoy working across the full stack and turning ideas into functional products. Recently, I co-built NexusForce, a decentralized dispute resolution platform on Polygon, where I explored smart contracts and practical blockchain use cases.
            </p>
            <p>
              Alongside development, I actively practice Data Structures and Algorithms to strengthen my problem-solving and core CS fundamentals.
            </p>
            <p>
              I’m always open to collaborating on meaningful projects and learning from people who are building interesting things.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <div className="value">📍 <strong>Based in:</strong> Patna, India</div>
            </div>
            <div className="detail-card">
              <div className="value">🎓 <strong>Studying at:</strong> NIT Patna</div>
            </div>
            <div className="detail-card">
              <div className="value">💻 <strong>Focus:</strong> Full Stack + Web3</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
