import { useI18n } from "../i18n"

export function Stack() {
  const { t } = useI18n()
  return (
    <section>
      <header className="section-head stack-heading">
        <h2>{t.stackTitle}</h2>
      </header>
      <div className="stack-grid">
        {t.stack.map((group) => (
          <article className="panel" key={group.group}>
            <h3>{group.group}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="resume-section">
        <header className="section-head resume-heading">
          <h2>{t.experienceEducationTitle}</h2>
        </header>

        <section className="resume-block">
          <h3 className="resume-subtitle">{t.experienceTitle}</h3>
          <ol className="resume-list">
            {t.jobs.map((job) => (
              <li className="resume-row" key={`${job.place}-${job.title}`}>
                <p className="resume-date">{job.time}</p>
                <article className="resume-entry">
                  <div className="resume-entry-head">
                    <div>
                      <h4>{job.title}</h4>
                      <p className="resume-place">{job.place} · {job.location}</p>
                    </div>
                    <span className="resume-employment">{job.employment}</span>
                  </div>
                  <p className="resume-summary">{job.summary}</p>
                  <ul className="resume-points">
                    {job.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="resume-block education-block">
          <h3 className="resume-subtitle">{t.educationTitle}</h3>
          <div className="education-grid">
            {t.education.map((item) => (
              <article className="panel education-card" key={item.place}>
                <h4>{item.title}</h4>
                <p className="resume-place">{item.place}</p>
                <p className="resume-summary">{item.time}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </section>
  )
}
