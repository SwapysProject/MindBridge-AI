import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, User, Settings, Heart, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const neurodivergentConditions = [
  'Autism Spectrum Disorder (ASD)',
  'ADHD',
  'Dyslexia',
  'Dyspraxia (DCD)',
  'Dyscalculia',
  'Dysgraphia',
  'Tourette Syndrome',
  'OCD',
  'Auditory Processing Disorder',
  'Meares-Irlen Syndrome',
  'Hyperlexia',
  'Synesthesia'
];

const accessibilityPreferences = [
  { id: 'reduced-motion', label: 'Reduce motion and animations', description: 'Minimize visual movement' },
  { id: 'high-contrast', label: 'High contrast mode', description: 'Increase color contrast for better visibility' },
  { id: 'large-text', label: 'Large text size', description: 'Increase font size throughout the app' },
  { id: 'sound-alerts', label: 'Sound alerts and notifications', description: 'Audio feedback for interactions' },
  { id: 'haptic-feedback', label: 'Haptic feedback', description: 'Vibration feedback on mobile devices' },
  { id: 'simplified-ui', label: 'Simplified interface', description: 'Reduce visual complexity' }
];

export default function Profile() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedConditions, setSelectedConditions] = useState<string[]>(['ADHD', 'Dyslexia']);
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    'reduced-motion': false,
    'high-contrast': false,
    'large-text': true,
    'sound-alerts': true,
    'haptic-feedback': false,
    'simplified-ui': false
  });

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const togglePreference = (prefId: string) => {
    setPreferences(prev => ({ ...prev, [prefId]: !prev[prefId] }));
  };

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your preferences have been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-4">
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
              <h1 className="text-xl font-semibold">Your Profile</h1>
              <p className="text-sm text-muted-foreground">
                Customize your NeuroSupport experience
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-4xl mx-auto px-4 py-6">
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Personal</span>
            </TabsTrigger>
            <TabsTrigger value="conditions" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">Conditions</span>
            </TabsTrigger>
            <TabsTrigger value="accessibility" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Accessibility</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Support</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <Card className="card-gentle p-6">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Johnson" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="alex.johnson@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">About You (Optional)</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us a bit about yourself, your interests, or anything that helps us provide better support..."
                    className="min-h-24"
                  />
                </div>

                <Button onClick={handleSave} size="lg" className="w-full sm:w-auto">
                  Save Changes
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="conditions" className="space-y-6">
            <Card className="card-gentle p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Neurodivergent Conditions</h2>
                  <p className="text-muted-foreground">
                    Select the conditions that apply to you. This helps us provide relevant tools and support.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {neurodivergentConditions.map((condition) => (
                    <Card 
                      key={condition}
                      className={`p-4 cursor-pointer transition-colors ${
                        selectedConditions.includes(condition) 
                          ? 'bg-primary/10 border-primary/30' 
                          : 'bg-card border-border hover:bg-muted/50'
                      }`}
                      onClick={() => toggleCondition(condition)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border-2 transition-colors ${
                          selectedConditions.includes(condition)
                            ? 'bg-primary border-primary'
                            : 'border-muted-foreground'
                        }`}>
                          {selectedConditions.includes(condition) && (
                            <div className="w-full h-full rounded bg-primary" />
                          )}
                        </div>
                        <span className="font-medium">{condition}</span>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-3">Your Selected Conditions:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedConditions.map((condition) => (
                      <Badge key={condition} variant="secondary">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button onClick={handleSave} size="lg" className="w-full sm:w-auto">
                  Update Conditions
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <Card className="card-gentle p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Accessibility Preferences</h2>
                  <p className="text-muted-foreground">
                    Customize how the app looks and behaves to suit your needs.
                  </p>
                </div>

                <div className="space-y-4">
                  {accessibilityPreferences.map((pref) => (
                    <div key={pref.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="space-y-1 flex-1">
                        <div className="font-medium">{pref.label}</div>
                        <div className="text-sm text-muted-foreground">{pref.description}</div>
                      </div>
                      <Switch
                        checked={preferences[pref.id]}
                        onCheckedChange={() => togglePreference(pref.id)}
                      />
                    </div>
                  ))}
                </div>

                <Button onClick={handleSave} size="lg" className="w-full sm:w-auto">
                  Save Preferences
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <Card className="card-gentle p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Support Network</h2>
                  <p className="text-muted-foreground">
                    Connect with professionals, family, and community support.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h3 className="font-medium mb-2">Emergency Contacts</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Add trusted contacts for crisis situations.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Manage Contacts
                    </Button>
                  </Card>

                  <Card className="p-4">
                    <h3 className="font-medium mb-2">Healthcare Providers</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Keep track of your healthcare team.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Add Providers
                    </Button>
                  </Card>

                  <Card className="p-4">
                    <h3 className="font-medium mb-2">Support Groups</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Find and join relevant support communities.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Find Groups
                    </Button>
                  </Card>

                  <Card className="p-4">
                    <h3 className="font-medium mb-2">Crisis Resources</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Quick access to crisis and mental health resources.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Resources
                    </Button>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}