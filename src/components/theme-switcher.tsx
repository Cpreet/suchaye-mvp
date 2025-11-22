import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  
  // Feature flag check - Theme Switcher logic remains independent of Dev Drawer flag
  // However, the user requested the theme changer to be IN the dev drawer which is flagged.
  // But the theme switcher component itself handles the multi-toggle vs simple toggle logic based on its own flag.
  const showAllThemes = import.meta.env.VITE_ENABLE_THEME_SELECTOR === 'true'
  
  if (showAllThemes) {
     return (
         <div className="flex flex-col gap-2">
             <div className="flex items-center gap-1 bg-secondary/50 p-1 rounded-lg border border-border flex-wrap max-w-[300px]">
                 <button
                    onClick={() => setTheme('light')}
                    className={cn(
                        "p-1.5 rounded-full transition-all hover:scale-110", 
                        theme === 'light' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                    )}
                    title="Light"
                 >
                    <Sun className="h-4 w-4" />
                 </button>

                 <button
                    onClick={() => setTheme('dark')}
                    className={cn(
                        "p-1.5 rounded-full transition-all hover:scale-110", 
                        theme === 'dark' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                    )}
                    title="Dark"
                 >
                    <Moon className="h-4 w-4" />
                 </button>

                 <div className="w-px h-4 bg-border mx-1" />

                 {[
                    { name: 'rose', color: 'bg-rose-600' },
                    { name: 'blue', color: 'bg-blue-600' },
                    { name: 'green', color: 'bg-green-600' },
                    { name: 'orange', color: 'bg-orange-600' },
                    { name: 'violet', color: 'bg-violet-600' },
                    { name: 'slate', color: 'bg-slate-600' },
                    { name: 'teal', color: 'bg-teal-600' },
                    { name: 'indigo', color: 'bg-indigo-600' },
                    { name: 'red', color: 'bg-red-600' },
                    { name: 'yellow', color: 'bg-yellow-600' },
                    { name: 'zinc', color: 'bg-zinc-600' },
                    { name: 'stone', color: 'bg-stone-600' },
                    { name: 'emerald', color: 'bg-emerald-600' },
                    { name: 'cyan', color: 'bg-cyan-600' },
                    { name: 'fuchsia', color: 'bg-fuchsia-600' },
                 ].map((t) => (
                    <button
                        key={t.name}
                        onClick={() => setTheme(t.name as "light" | "dark" | "rose" | "blue" | "green" | "orange" | "violet" | "slate" | "teal" | "indigo" | "red" | "yellow" | "zinc" | "stone" | "emerald" | "cyan" | "fuchsia")}
                        className={cn(
                            "w-7 h-7 flex items-center justify-center rounded-full transition-all hover:scale-110", 
                            theme === t.name ? "bg-background shadow-sm ring-1 ring-border" : "hover:bg-background/50"
                        )}
                        title={t.name.charAt(0).toUpperCase() + t.name.slice(1)}
                    >
                        <div className={cn("h-3 w-3 rounded-full", t.color)} />
                    </button>
                 ))}
             </div>
             <div className="text-xs text-muted-foreground text-center">
                Current: <span className="font-medium text-foreground capitalize">{theme}</span>
             </div>
         </div>
     )
  }

  // Binary Switch
  const isDark = theme === 'dark'
  
  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch 
        checked={isDark} 
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} 
        aria-label="Toggle theme" 
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}
