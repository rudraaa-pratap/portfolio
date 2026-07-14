export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="section-label">// let's connect</p>
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-inner">
          <div className="contact-text">
            <p>
              If you're building something interesting, I'd love to be part of it.
              Whether it's a project, an idea, or just a technical discussion — I'm always up for meaningful conversations.
              I'm especially interested in web and Web3 projects where I can contribute and learn by building.
            </p>

            <div className="contact-links">
              <a
                className="contact-link"
                href="mailto:ruddrrraaaaa@gmail.com"
              >
                <span className="link-icon">✉</span>
                ruddrrraaaaa@gmail.com
              </a>
              
              <a
                className="contact-link"
                href="https://linkedin.com/in/rudra-pratap-a856b7373"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-icon">in</span>
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                const mailto = `mailto:ruddrrraaaaa@gmail.com?subject=${encodeURIComponent(
                  data.get('subject')
                )}&body=${encodeURIComponent(data.get('message'))}`;
                window.open(mailto);
              }}
            >
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                placeholder="Your message..."
                required
              />
              <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
                Send message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
