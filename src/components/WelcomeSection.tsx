import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Settings, User, Heart } from 'lucide-react';

interface Profile {
  name: string;
  preferences: string[];
  supportNeeds: string[];
}

interface WelcomeSectionProps {
  profile: Profile;
  onPersonalize: () => void;
}

export function WelcomeSection({ profile, onPersonalize }: WelcomeSectionProps) {
  const currentHour = new Date().getHours();
  let greeting = 'Good morning';
  
  if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good afternoon';
  } else if (currentHour >= 17) {
    greeting = 'Good evening';
  }

  return (
    <Card className="card-gentle p-6 gradient-gentle">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-1">
              {greeting}, {profile.name}! 👋
            </h1>
            <p className="text-muted-foreground">
              Your personal neurodivergent support space
            </p>
          </div>
          
          <Button
            variant="outline"
            size="lg"
            onClick={onPersonalize}
            className="interactive-element"
            aria-label="Personalize your experience"
          >
            <Settings className="h-4 w-4 mr-2" />
            Personalize
          </Button>
        </div>

        {profile.supportNeeds.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Heart className="h-4 w-4 text-primary" />
              Your Support Preferences
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.supportNeeds.map((need) => (
                <Badge key={need} variant="secondary" className="text-xs">
                  {need}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground">
            Remember: You're in control. Adjust any settings, take breaks when needed, 
            and use the tools that work best for you today.
          </p>
        </div>
      </div>
    </Card>
  );
}