import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { cn } from "@/lib/utils"

export function DevDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

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
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 h-[200px] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Feature: Theme Switcher */}
          <div className="space-y-2 p-3 border border-border rounded-lg bg-background">
            <h4 className="text-sm font-medium">Theme Selector</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Test different color palettes and modes.
            </p>
            <ThemeSwitcher />
          </div>

          {/* Placeholder for future features */}
          <div className="space-y-2 p-3 border border-border/50 rounded-lg bg-background/50 opacity-50">
            <h4 className="text-sm font-medium">Feature Flags</h4>
            <p className="text-xs text-muted-foreground">Coming soon...</p>
          </div>

        </div>
      </div>
    </div>
  )
}

