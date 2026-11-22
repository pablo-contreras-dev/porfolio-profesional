import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { copy, type Copy, type Lang } from "./content"

type I18n = {
  lang: Lang
  t: Copy
  toggle: () => void
}

const I18nContext = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")
  const value = useMemo<I18n>(
    () => ({
      lang,
      t: copy[lang],
      toggle: () => setLang((prev) => (prev === "es" ? "en" : "es")),
    }),
    [lang],
  )
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
