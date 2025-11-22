import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "rose" | "blue" | "green" | "orange" | "violet" | "slate" | "teal" | "indigo" | "red" | "yellow" | "zinc" | "stone" | "emerald" | "cyan" | "fuchsia"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    // Remove all previous theme classes
    root.classList.remove("light", "dark", "rose", "blue", "green", "orange", "violet", "slate", "teal", "indigo", "red", "yellow", "zinc", "stone", "emerald", "cyan", "fuchsia")

    // Add the current theme class
    // For "light", we might not need a class if it's the default, 
    // but explicit is better if we have overrides.
    // Based on index.css, :root is default (light).
    // .dark is dark mode.
    // We will treat "light" as default (remove other classes).
    
    if (theme !== "light") {
      root.classList.add(theme)
    }
    
    // Set data attribute for consistency
    root.setAttribute("data-theme", theme)

  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
