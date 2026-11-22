import { useEffect, useState } from "react"
import { useI18n } from "../i18n"

export function Boot({ onDone }: { onDone: () => void }) {
  const { t } = useI18n()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= t.bootLines.length) {
      const id = window.setTimeout(onDone, 250)
      return () => window.clearTimeout(id)
    }
    const id = window.setTimeout(() => setCount((c) => c + 1), 150)
    return () => window.clearTimeout(id)
  }, [count, onDone, t.bootLines.length])

  return (
    <div className="boot" role="dialog" aria-label="boot">
      <div className="boot-inner">
        <p className="boot-kicker">EXPT://BACKEND</p>
        {t.bootLines.slice(0, count).map((line) => (
          <p key={line} className="boot-line">
            <span className="prompt">&gt;</span> {line}
          </p>
        ))}
        {count >= t.bootLines.length && <p className="boot-ok">{t.access}</p>}
        <span className="cursor" aria-hidden="true" />
      </div>
      <button className="skip" type="button" onClick={onDone}>
        {t.skip}
      </button>
    </div>
  )
}
