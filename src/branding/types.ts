
export type ProdexyBrandConfig = {
  name?: string
  logoUrl?: string
  fontSans?: string
  fontMono?: string
  colors?: Partial<Record<
    | 'background'
    | 'foreground'
    | 'card'
    | 'cardForeground'
    | 'popover'
    | 'popoverForeground'
    | 'primary'
    | 'primaryForeground'
    | 'secondary'
    | 'secondaryForeground'
    | 'muted'
    | 'mutedForeground'
    | 'accent'
    | 'accentForeground'
    | 'destructive'
    | 'destructiveForeground'
    | 'border'
    | 'input'
    | 'ring'
    | 'sidebar'
    | 'sidebarForeground'
    | 'sidebarPrimary'
    | 'sidebarPrimaryForeground'
    | 'sidebarAccent'
    | 'sidebarAccentForeground'
    | 'sidebarBorder'
    | 'sidebarRing',
    string
  >>
}
