
import type { ProdexyBrandConfig } from './types'

const cssVarMap: Record<string, string> = {
  background: '--background',
  foreground: '--foreground',
  card: '--card',
  cardForeground: '--card-foreground',
  popover: '--popover',
  popoverForeground: '--popover-foreground',
  primary: '--primary',
  primaryForeground: '--primary-foreground',
  secondary: '--secondary',
  secondaryForeground: '--secondary-foreground',
  muted: '--muted',
  mutedForeground: '--muted-foreground',
  accent: '--accent',
  accentForeground: '--accent-foreground',
  destructive: '--destructive',
  destructiveForeground: '--destructive-foreground',
  border: '--border',
  input: '--input',
  ring: '--ring',
  sidebar: '--sidebar',
  sidebarForeground: '--sidebar-foreground',
  sidebarPrimary: '--sidebar-primary',
  sidebarPrimaryForeground: '--sidebar-primary-foreground',
  sidebarAccent: '--sidebar-accent',
  sidebarAccentForeground: '--sidebar-accent-foreground',
  sidebarBorder: '--sidebar-border',
  sidebarRing: '--sidebar-ring',
}

export function applyProdexyBrand(config: ProdexyBrandConfig) {
  if (typeof document === 'undefined') return
  const root = document.documentElement

  if (config.fontSans) root.style.setProperty('--font-sans', config.fontSans)
  if (config.fontMono) root.style.setProperty('--font-mono', config.fontMono)

  for (const [key, value] of Object.entries(config.colors ?? {})) {
    const cssVar = cssVarMap[key]
    if (cssVar && value) root.style.setProperty(cssVar, value)
  }
}
