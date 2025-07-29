import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Palette, Eye, Sun } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Calm & Gentle', class: '', icon: Sun },
  { id: 'high-contrast', name: 'High Contrast', class: 'high-contrast', icon: Eye },
  { id: 'dyslexia-friendly', name: 'Dyslexia Friendly', class: 'dyslexia-friendly', icon: Palette },
  { id: 'dark', name: 'Dark Mode', class: 'dark', icon: Sun },
];

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="interactive-element"
        aria-label="Change color theme"
        aria-expanded={isOpen}
      >
        <Palette className="h-5 w-5 mr-2" />
        Themes
      </Button>

      {isOpen && (
        <Card className="absolute top-full mt-2 right-0 z-50 p-4 min-w-64 bg-popover border border-border shadow-card">
          <h3 className="font-medium mb-3 text-popover-foreground">Choose Your Theme</h3>
          <div className="space-y-2">
            {themes.map((theme) => {
              const Icon = theme.icon;
              return (
                <Button
                  key={theme.id}
                  variant={currentTheme === theme.id ? "default" : "ghost"}
                  size="lg"
                  onClick={() => {
                    onThemeChange(theme.id);
                    setIsOpen(false);
                  }}
                  className="w-full justify-start interactive-element"
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {theme.name}
                </Button>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}