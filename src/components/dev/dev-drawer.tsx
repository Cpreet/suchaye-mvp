import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { cn } from "@/lib/utils"
import { useRegion } from "@/lib/region-context"
import type { Region, Language } from "@/lib/types"

export function DevDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { region, setRegion, language, setLanguage, currency } = useRegion()

  useEffect(() => {
    const showDrawer = import.meta.env.VITE_SHOW_DEV_DRAWER === 'true'
    setIsVisible(showDrawer)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[100] bg-card border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out",
        isOpen ? "translate-y-0" : "translate-y-[calc(100%-40px)]"
      )}
    >
      {/* Handle/Toggle */}
      <div 
        className="h-10 flex items-center justify-between px-4 cursor-pointer bg-secondary/50 hover:bg-secondary/80 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <Settings className="h-3.5 w-3.5" />
          <span>Developer Tools</span>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-xs text-muted-foreground">
            {region.toUpperCase()} ({currency}) • {language.toUpperCase()}
          </span>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 h-[250px] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Feature: Theme Switcher */}
          <div className="space-y-2 p-3 border border-border rounded-lg bg-background">
            <h4 className="text-sm font-medium">Theme Selector</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Test different color palettes and modes.
            </p>
            <ThemeSwitcher />
          </div>

          {/* Feature: Region/Currency Switcher */}
          <div className="space-y-2 p-3 border border-border rounded-lg bg-background">
            <h4 className="text-sm font-medium">Region & Currency</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Switch region to change currency and collection.
            </p>
            <div className="flex flex-wrap gap-2">
              {(['india', 'gulf', 'america', 'europe'] as Region[]).map((r) => (
                <Button
                  key={r}
                  variant={region === r ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRegion(r)}
                  className="capitalize text-xs"
                >
                  {r}
                </Button>
              ))}
            </div>
          </div>

          {/* Feature: Language Switcher */}
          <div className="space-y-2 p-3 border border-border rounded-lg bg-background">
            <h4 className="text-sm font-medium">Language</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Test localization (placeholder).
            </p>
            <div className="flex flex-wrap gap-2">
              {(['en', 'hi', 'bn', 'te', 'ta', 'ar', 'fr', 'de'] as Language[]).map((l) => (
                <Button
                  key={l}
                  variant={language === l ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage(l)}
                  className="uppercase text-xs"
                >
                  {l}
                </Button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
