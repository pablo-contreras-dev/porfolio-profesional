import { useI18n } from "../i18n"

export function Projects() {
  const { t } = useI18n()
  return (
    <section>
      <header className="section-head">
        <h2>{t.projectsTitle}</h2>
        <p>{t.projectsIntro}</p>
      </header>
      <div className="cards">
        {t.projects.map((p) => (
          <article className="panel project" key={p.id}>
            <div className="project-preview" aria-hidden="true">
              <div className="preview-console">
                <div className="preview-topline">
                  <span>PROJECT / {p.id}</span>
                  <span>{p.tag}</span>
                </div>
                <span className="preview-title">{p.title}</span>
                <div className="preview-stack">
                  {p.stack.slice(0, 3).map((technology) => (
                    <em key={technology}>{technology}</em>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-body">
              <p className="kicker">
                #{p.id} · {p.tag}
              </p>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <p className="did">
                <span>{t.whatIDid}:</span> {p.did}
              </p>
              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <a href={p.repo} target="_blank" rel="noreferrer">
                {t.viewRepo}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
