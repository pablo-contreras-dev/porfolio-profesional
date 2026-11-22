import { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { profile } from "../content"
import { useI18n } from "../i18n"
import { BrandIcon } from "./BrandIcon"
import { Terminal } from "./Terminal"

const links = [
  { to: "/", key: "about" as const, end: true },
  { to: "/proyectos", key: "projects" as const, end: false },
  { to: "/stack", key: "stack" as const, end: false },
  { to: "/contacto", key: "contact" as const, end: false },
]

export function Layout() {
  const { t, lang, toggle } = useI18n()
  const [term, setTerm] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        setTerm(true)
      }
      if (e.key === "Escape") setTerm(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const path =
    location.pathname === "/"
      ? t.pathHome
      : `DOSSIER:/${location.pathname.toUpperCase()}`

  return (
    <div className="shell">
      <div className="grid-bg" aria-hidden="true" />
      <header className="topbar">
        <div className="brand">
          <span>{t.dossier}</span>
          <small>{path}</small>
        </div>
        <nav className="nav" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {t.nav[l.key]}
            </NavLink>
          ))}
          <a className="nav-cv" href={profile.cv} target="_blank" rel="noreferrer">
            CV <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <div className="top-actions">
          <button type="button" className="chip" onClick={toggle} aria-label={t.langToggle}>
            {lang === "es" ? "ES" : "EN"}
          </button>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="foot">
        <div className="contact-row">
          <span>CONTACT</span>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <BrandIcon brand="github" /> GITHUB
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <BrandIcon brand="linkedin" /> LINKEDIN
          </a>
          <a href={`mailto:${profile.email}`}>MAIL</a>
          <a href={profile.cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
        <button type="button" className="term-btn" onClick={() => setTerm(true)}>
          {t.terminalHint} <kbd>/</kbd>
        </button>
      </footer>
      <Terminal open={term} onClose={() => setTerm(false)} />
    </div>
  )
}
