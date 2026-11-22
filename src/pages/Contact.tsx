import { profile } from "../content"
import { BrandIcon } from "../components/BrandIcon"
import { useI18n } from "../i18n"

export function Contact() {
  const { t } = useI18n()
  return (
    <section className="contact">
      <article className="panel contact-card">
        <p className="status big">
          <i /> {t.available}
        </p>
        <h2>{t.contactTitle}</h2>
        <p className="bio">{t.contactBody}</p>
        <div className="contact-actions">
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <BrandIcon brand="linkedin" />
            LinkedIn
          </a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
            <BrandIcon brand="github" />
            GitHub
          </a>
          <a className="btn ghost" href={profile.cv} target="_blank" rel="noreferrer">
            {t.downloadCv}
          </a>
        </div>
      </article>
    </section>
  )
}
