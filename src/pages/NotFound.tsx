import { Link } from "react-router-dom"
import { useI18n } from "../i18n"

export function NotFound() {
  const { t } = useI18n()
  return (
    <section className="contact">
      <article className="panel contact-card">
        <p className="kicker">ERR 404</p>
        <h2>{t.notFoundTitle}</h2>
        <p>{t.notFoundBody}</p>
        <Link className="btn" to="/">
          {t.goHome}
        </Link>
      </article>
    </section>
  )
}
