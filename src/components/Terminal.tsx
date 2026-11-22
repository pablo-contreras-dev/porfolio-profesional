import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { profile } from "../content"
import { useI18n } from "../i18n"

const ROUTES: Record<string, string> = {
  about: "/",
  home: "/",
  projects: "/proyectos",
  stack: "/stack",
  contact: "/contacto",
}

export function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [lines, setLines] = useState<string[]>([])
  const [input, setInput] = useState("")
  const field = useRef<HTMLInputElement>(null)
  const scroller = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      setLines([t.terminal.welcome, t.terminal.help])
      window.setTimeout(() => field.current?.focus(), 50)
    }
  }, [open, t.terminal.help, t.terminal.welcome])

  useEffect(() => {
    scroller.current?.scrollTo(0, scroller.current.scrollHeight)
  }, [lines])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    const next = [...lines, `> ${raw}`]
    if (cmd === "clear") {
      setLines([])
      return
    }
    if (cmd === "help") next.push(t.terminal.help)
    else if (cmd === "whoami") next.push(`${profile.name} · ${t.role}`)
    else if (cmd === "github") window.open(profile.github, "_blank")
    else if (cmd === "linkedin") window.open(profile.linkedin, "_blank")
    else if (cmd === "cv") window.open(profile.cv, "_blank")
    else if (cmd === "mail" || cmd === "email") window.open(`mailto:${profile.email}`)
    else if (ROUTES[cmd]) {
      navigate(ROUTES[cmd])
      onClose()
    } else next.push(t.terminal.unknown)
    setLines(next)
  }

  if (!open) return null

  return (
    <div className="term-overlay" onClick={onClose}>
      <div
        className="term"
        role="dialog"
        aria-label="terminal"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="term-bar">
          <span>root@dossier:~</span>
          <button type="button" onClick={onClose} aria-label="close">
            ×
          </button>
        </header>
        <div className="term-body" ref={scroller}>
          {lines.map((line, i) => (
            <p key={`${i}-${line}`}>{line}</p>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              run(input)
              setInput("")
            }}
          >
            <label className="term-row">
              <span className="prompt">&gt;</span>
              <input
                ref={field}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}
