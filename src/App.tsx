import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Boot } from "./components/Boot"
import { Layout } from "./components/Layout"
import { I18nProvider } from "./i18n"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { NotFound } from "./pages/NotFound"
import { Projects } from "./pages/Projects"
import { Stack } from "./pages/Stack"

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <I18nProvider>
      {!booted && <Boot onDone={() => setBooted(true)} />}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<About />} />
            <Route path="proyectos" element={<Projects />} />
            <Route path="projects" element={<Navigate to="/proyectos" replace />} />
            <Route path="stack" element={<Stack />} />
            <Route path="trayectoria" element={<Navigate to="/stack" replace />} />
            <Route path="experience" element={<Navigate to="/stack" replace />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="contact" element={<Navigate to="/contacto" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}
