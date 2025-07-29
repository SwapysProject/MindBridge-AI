import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Zap, Moon, AlertTriangle } from 'lucide-react';

const moodLevels = [
  { value: 1, label: 'Very Low', color: 'bg-stressed', icon: AlertTriangle },
  { value: 2, label: 'Low', color: 'bg-warning', icon: Moon },
  { value: 3, label: 'Okay', color: 'bg-muted', icon: Heart },
  { value: 4, label: 'Good', color: 'bg-calm', icon: Brain },
  { value: 5, label: 'Excellent', color: 'bg-happy', icon: Zap },
];

const moodCategories = [
  { id: 'energy', label: 'Energy Level', description: 'How energetic do you feel?' },
  { id: 'focus', label: 'Focus', description: 'How well can you concentrate?' },
  { id: 'social', label: 'Social Battery', description: 'How do you feel about social interactions?' },
  { id: 'sensory', label: 'Sensory Comfort', description: 'How comfortable are you with sounds, lights, textures?' },
];

export function MoodTracker() {
  const [ratings, setRatings] = useState<Record<string, number>>({});

  const handleRatingChange = (category: string, value: number) => {
    setRatings(prev => ({ ...prev, [category]: value }));
  };

  return (
    <Card className="card-gentle p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">How are you feeling today?</h2>
          <p className="text-muted-foreground">
            Track your mood to better understand your patterns and needs.
          </p>
        </div>

        <div className="space-y-6">
          {moodCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <div>
                <h3 className="font-medium">{category.label}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>

              <div className="flex gap-2 justify-between">
                {moodLevels.map((level) => {
                  const Icon = level.icon;
                  const isSelected = ratings[category.id] === level.value;
                  
                  return (
                    <Button
                      key={level.value}
                      variant={isSelected ? "default" : "outline"}
                      size="lg"
                      onClick={() => handleRatingChange(category.id, level.value)}
                      className={`flex-1 h-16 flex-col gap-1 interactive-element ${
                        isSelected ? level.color : ''
                      }`}
                      aria-label={`Rate ${category.label} as ${level.label}`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="text-xs">{level.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(ratings).length > 0 && (
          <div className="pt-4 border-t">
            <Button size="lg" className="w-full interactive-element">
              Save Today's Check-in
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}