const skillData = [
  {
    category: '⟨/⟩ Languages',
    skills: ['C', 'C++', 'Java', 'JavaScript'],
  },
  {
    category: '🌐 Web Dev',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },

  {
    category: '🔧 Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Firebase'],
  },
  {
    category: '📐 Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOP'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">// what i work with</p>
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skillData.map((cat) => (
            <div className="skill-category fade-in" key={cat.category}>
              <h3>{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
