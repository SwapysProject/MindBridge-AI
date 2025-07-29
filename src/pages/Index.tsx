import { useState, useEffect } from 'react';
import { WelcomeSection } from '@/components/WelcomeSection';
import { MoodTracker } from '@/components/MoodTracker';
import { DailyRoutine } from '@/components/DailyRoutine';
import { QuickAccess } from '@/components/QuickAccess';
import { ThemeSelector } from '@/components/ThemeSelector';
import { AuthDialog } from '@/components/auth/AuthDialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Settings, Heart } from 'lucide-react';

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const { toast } = useToast();
  const navigate = useNavigate();

  // Enhanced user profile with neurodivergent conditions
  const userProfile = {
    name: 'Alex',
    preferences: ['Visual schedules', 'Quiet environment', 'Text-to-speech'],
    supportNeeds: ['ADHD Focus Support', 'Sensory Regulation', 'Executive Function'],
    conditions: ['ADHD', 'Dyslexia'],
    accessibility: {
      highContrast: false,
      largeText: true,
      reducedMotion: false
    }
  };

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove('high-contrast', 'dyslexia-friendly', 'dark');
    
    // Add new theme class if not default
    if (currentTheme !== 'default') {
      root.classList.add(currentTheme);
    }
  }, [currentTheme]);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    toast({
      title: "Theme updated",
      description: `Switched to ${theme === 'default' ? 'Calm & Gentle' : theme.replace('-', ' ')} theme`,
    });
  };

  const handlePersonalize = () => {
    toast({
      title: "Personalization",
      description: "This feature is coming soon! You'll be able to customize your support preferences.",
    });
  };

  const handleQuickAccess = (itemId: string) => {
    const itemNames: Record<string, string> = {
      'text-to-speech': 'Text to Speech',
      'pomodoro': 'Focus Timer',
      'ai-chat': 'AI Companion',
      'reading-overlay': 'Reading Helper',
      'ambient-sounds': 'Calm Sounds',
      'quick-notes': 'Quick Notes',
      'breathing': 'Breathing Exercise',
      'schedule': 'Visual Schedule'
    };

    toast({
      title: `${itemNames[itemId]} activated`,
      description: "This feature is in development. Coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ND</span>
              </div>
              <h1 className="text-xl font-semibold">NeuroSupport</h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />
              <AuthDialog>
                <Button variant="outline" size="lg" className="interactive-element">
                  Sign In
                </Button>
              </AuthDialog>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-6">
          <WelcomeSection 
            profile={userProfile} 
            onPersonalize={handlePersonalize}
          />

          {/* Quick Navigation */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/tools')}
              className="h-auto p-6 flex flex-col gap-3 interactive-element hover:shadow-focus"
            >
              <Settings className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="font-semibold">Accessibility Tools</div>
                <div className="text-xs text-muted-foreground">Specialized neurodivergent tools</div>
              </div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/community')}
              className="h-auto p-6 flex flex-col gap-3 interactive-element hover:shadow-focus"
            >
              <Users className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="font-semibold">Community</div>
                <div className="text-xs text-muted-foreground">Support groups & discussions</div>
              </div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/resources')}
              className="h-auto p-6 flex flex-col gap-3 interactive-element hover:shadow-focus"
            >
              <BookOpen className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="font-semibold">Resources</div>
                <div className="text-xs text-muted-foreground">Educational & professional</div>
              </div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/profile')}
              className="h-auto p-6 flex flex-col gap-3 interactive-element hover:shadow-focus"
            >
              <Heart className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="font-semibold">Profile</div>
                <div className="text-xs text-muted-foreground">Personalize your experience</div>
              </div>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <MoodTracker />
              <QuickAccess onItemClick={handleQuickAccess} />
            </div>
            
            <div className="space-y-6">
              <DailyRoutine />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>Built with accessibility and neurodivergent needs in mind</p>
            <p className="mt-1">Your data is private and secure</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
