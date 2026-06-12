import experience from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience">
      {/* Section label */}
      <div className="sec-label">
        <span className="sec-label-prefix">~/</span>experience.log
      </div>
      <h2 className="sec-title">Experience</h2>

      {/* Timeline */}
      <div className="timeline">
        {experience.map((entry) => (
          <div key={entry.id} className="exp-item">
            <div className="exp-row">
              <span className="exp-role">{entry.role}</span>
              <span className="exp-date">{entry.dateRange}</span>
            </div>
            <div className="exp-org">{entry.organization}</div>
            <ul className="exp-bullets">
              {entry.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}