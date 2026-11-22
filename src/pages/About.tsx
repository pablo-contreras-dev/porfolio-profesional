import { BrandIcon } from "../components/BrandIcon"
import { profile } from "../content"
import { useI18n } from "../i18n"
import { Link } from "react-router-dom"

export function About() {
  const { t } = useI18n()
  return (
    <section className="about">
      <article className="panel hero">
        <header className="hero-head">
          <div>
            <h1>{profile.name}</h1>
            <p className="role">{t.role}</p>
          </div>
          <span className="handle">{profile.handle}</span>
        </header>

        <div className="hero-cta">
          <Link className="btn" to="/proyectos">
            {t.projectsTitle} <span aria-hidden="true">→</span>
          </Link>
          <a className="btn ghost" href={profile.cv} target="_blank" rel="noreferrer">
            {t.downloadCv}
          </a>
        </div>

        <div className="hero-grid">
          <div className="photo-wrap">
            <span className="badge">
              <i /> {t.openToWork}
            </span>
            <img src={profile.photo} alt={profile.name} />
            <div className="social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub de Pablo" title="GitHub">
                <BrandIcon brand="github" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Pablo" title="LinkedIn">
                <BrandIcon brand="linkedin" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Enviar correo" title="Correo">
                <span className="utility-icon" aria-hidden="true">@</span>
              </a>
              <a href={profile.cv} target="_blank" rel="noreferrer" aria-label="Abrir CV" title="CV">
                <span className="utility-icon" aria-hidden="true">CV</span>
              </a>
            </div>
          </div>

          <div className="focus-wrap">
            <p className="focus-heading">{t.focusTitle}</p>
            <div className="focus-groups">
              {t.stack.map((group) => (
                <div className="focus-group" key={group.group}>
                  <strong>{group.group}</strong>
                  <span>{group.items.slice(0, 3).join(" · ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-details">
          <dl className="meta">
            {t.meta.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>
                  {row.label === "ESTADO" || row.label === "STATUS" ? (
                    <span className="status">
                      <i /> {row.value}
                    </span>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="bio">{t.bio}</p>
        </div>
      </article>

      <aside className="side">
        <div className="panel stats">
          {t.stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <a className="panel cv-card" href={profile.cv} target="_blank" rel="noreferrer">
          <span className="cv-icon" aria-hidden="true" />
          <strong>{t.downloadCv}</strong>
          <small>{t.cvMeta}</small>
        </a>
        <div className="panel working">
          <p className="kicker">{t.workingOn}</p>
          {t.current.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
              <strong>
                {item.name} ↗
              </strong>
              <span>{item.blurb}</span>
            </a>
          ))}
        </div>
      </aside>
    </section>
  )
}
