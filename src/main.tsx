import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider'
import { RegionProvider } from './lib/region-context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="suchaye-theme">
      <RegionProvider>
      <App />
      </RegionProvider>
    </ThemeProvider>
  </StrictMode>,
)
