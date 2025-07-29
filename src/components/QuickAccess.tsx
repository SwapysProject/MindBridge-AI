import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Volume2, 
  Timer, 
  MessageSquare, 
  Headphones, 
  Lightbulb,
  Heart,
  Calendar
} from 'lucide-react';

const quickAccessItems = [
  {
    id: 'text-to-speech',
    title: 'Text to Speech',
    description: 'Read any text aloud',
    icon: Volume2,
    color: 'bg-calm',
  },
  {
    id: 'pomodoro',
    title: 'Focus Timer',
    description: 'Pomodoro technique timer',
    icon: Timer,
    color: 'bg-focus',
  },
  {
    id: 'ai-chat',
    title: 'AI Companion',
    description: 'Chat with supportive AI',
    icon: MessageSquare,
    color: 'bg-primary',
  },
  {
    id: 'reading-overlay',
    title: 'Reading Helper',
    description: 'Dyslexia-friendly overlay',
    icon: BookOpen,
    color: 'bg-happy',
  },
  {
    id: 'ambient-sounds',
    title: 'Calm Sounds',
    description: 'White noise & nature sounds',
    icon: Headphones,
    color: 'bg-rest',
  },
  {
    id: 'quick-notes',
    title: 'Quick Notes',
    description: 'Voice or text notes',
    icon: Lightbulb,
    color: 'bg-warning',
  },
  {
    id: 'breathing',
    title: 'Breathing Exercise',
    description: 'Guided breathing for calm',
    icon: Heart,
    color: 'bg-success',
  },
  {
    id: 'schedule',
    title: 'Visual Schedule',
    description: 'See your day at a glance',
    icon: Calendar,
    color: 'bg-muted',
  },
];

interface QuickAccessProps {
  onItemClick: (itemId: string) => void;
}

export function QuickAccess({ onItemClick }: QuickAccessProps) {
  return (
    <Card className="card-gentle p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quick Access Tools</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickAccessItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <Button
                key={item.id}
                variant="outline"
                size="lg"
                onClick={() => onItemClick(item.id)}
                className="h-auto p-4 flex flex-col gap-2 interactive-element hover:shadow-focus"
                aria-label={`Open ${item.title}: ${item.description}`}
              >
                <div className={`p-3 rounded-lg ${item.color}/20 mb-1`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}