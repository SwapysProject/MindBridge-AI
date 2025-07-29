import { useState } from 'react';
import { ConditionSpecificTools } from '@/components/neurodivergent/ConditionSpecificTools';
import { QuickAccess } from '@/components/QuickAccess';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function Tools() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleToolSelect = (toolId: string, toolName: string) => {
    toast({
      title: `${toolName} activated`,
      description: "This specialized tool is being prepared for you. Coming soon!",
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
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="interactive-element"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-xl font-semibold">Accessibility Tools</h1>
              <p className="text-sm text-muted-foreground">
                Specialized tools for different neurodivergent needs
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Quick Access Tools */}
          <QuickAccess onItemClick={handleQuickAccess} />

          {/* Condition-Specific Tools */}
          <ConditionSpecificTools onToolSelect={handleToolSelect} />

          {/* Additional Resources */}
          <Card className="card-gentle p-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Additional Resources</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h3 className="font-medium mb-2">Accessibility Settings</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Customize your experience with themes, font sizes, and motion preferences.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Open Settings
                  </Button>
                </Card>

                <Card className="p-4">
                  <h3 className="font-medium mb-2">Community Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Connect with others who share similar experiences and challenges.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Join Community
                  </Button>
                </Card>

                <Card className="p-4">
                  <h3 className="font-medium mb-2">Professional Resources</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Find qualified professionals and evidence-based resources.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Browse Resources
                  </Button>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}