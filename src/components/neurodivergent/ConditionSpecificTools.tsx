import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Zap, 
  BookOpen, 
  Target, 
  Calculator, 
  PenTool, 
  Volume2, 
  Music,
  Eye,
  Palette,
  Timer,
  Heart,
  Settings,
  Activity
} from 'lucide-react';

const conditionTools = {
  'asd': {
    name: 'Autism Spectrum Disorder',
    icon: Brain,
    color: 'bg-blue-100 text-blue-800',
    tools: [
      { id: 'social-scripts', name: 'Social Scripts', icon: BookOpen, description: 'Practice conversations and social interactions' },
      { id: 'sensory-profile', name: 'Sensory Profile', icon: Activity, description: 'Track and manage sensory needs' },
      { id: 'routine-builder', name: 'Visual Routines', icon: Target, description: 'Create step-by-step visual guides' },
      { id: 'special-interests', name: 'Special Interests Tracker', icon: Heart, description: 'Explore and organize your interests' }
    ]
  },
  'adhd': {
    name: 'ADHD',
    icon: Zap,
    color: 'bg-orange-100 text-orange-800',
    tools: [
      { id: 'pomodoro-timer', name: 'Focus Timer', icon: Timer, description: 'Structured work sessions with breaks' },
      { id: 'task-breakdown', name: 'Task Breakdown', icon: Target, description: 'Break large tasks into manageable steps' },
      { id: 'fidget-tools', name: 'Digital Fidgets', icon: Activity, description: 'Interactive tools for movement and focus' },
      { id: 'hyperfocus-guard', name: 'Hyperfocus Alerts', icon: Zap, description: 'Gentle reminders to take breaks' }
    ]
  },
  'dyslexia': {
    name: 'Dyslexia',
    icon: BookOpen,
    color: 'bg-green-100 text-green-800',
    tools: [
      { id: 'reading-ruler', name: 'Reading Ruler', icon: Eye, description: 'Visual guide for reading text' },
      { id: 'text-to-speech', name: 'Text-to-Speech', icon: Volume2, description: 'Audio support for reading' },
      { id: 'font-optimizer', name: 'Dyslexia Fonts', icon: PenTool, description: 'Optimized fonts for easier reading' },
      { id: 'word-prediction', name: 'Word Prediction', icon: BookOpen, description: 'Writing assistance tools' }
    ]
  },
  'dyspraxia': {
    name: 'Dyspraxia (DCD)',
    icon: Target,
    color: 'bg-purple-100 text-purple-800',
    tools: [
      { id: 'motor-planning', name: 'Motor Planning', icon: Target, description: 'Step-by-step movement guides' },
      { id: 'coordination-games', name: 'Coordination Practice', icon: Activity, description: 'Fun exercises for motor skills' },
      { id: 'organization-tools', name: 'Organization Helper', icon: Settings, description: 'Structure for daily tasks' },
      { id: 'typing-support', name: 'Typing Assistant', icon: PenTool, description: 'Keyboard and typing aids' }
    ]
  },
  'dyscalculia': {
    name: 'Dyscalculia',
    icon: Calculator,
    color: 'bg-red-100 text-red-800',
    tools: [
      { id: 'visual-math', name: 'Visual Math', icon: Calculator, description: 'Visual representations of numbers' },
      { id: 'number-line', name: 'Interactive Number Line', icon: Target, description: 'Visual number relationships' },
      { id: 'math-games', name: 'Math Games', icon: Activity, description: 'Fun practice with numbers' },
      { id: 'calculation-tools', name: 'Calculation Aids', icon: Calculator, description: 'Step-by-step math help' }
    ]
  },
  'dysgraphia': {
    name: 'Dysgraphia',
    icon: PenTool,
    color: 'bg-indigo-100 text-indigo-800',
    tools: [
      { id: 'handwriting-practice', name: 'Letter Formation', icon: PenTool, description: 'Guided handwriting practice' },
      { id: 'speech-to-text', name: 'Speech-to-Text', icon: Volume2, description: 'Voice input for writing' },
      { id: 'word-processor', name: 'Writing Tools', icon: BookOpen, description: 'Assistive writing software' },
      { id: 'graphic-organizers', name: 'Graphic Organizers', icon: Target, description: 'Visual planning for writing' }
    ]
  },
  'tourettes': {
    name: 'Tourette Syndrome',
    icon: Activity,
    color: 'bg-yellow-100 text-yellow-800',
    tools: [
      { id: 'tic-tracker', name: 'Tic Tracker', icon: Activity, description: 'Monitor tic patterns and triggers' },
      { id: 'relaxation-techniques', name: 'Relaxation Tools', icon: Heart, description: 'Stress reduction techniques' },
      { id: 'mindfulness-breaks', name: 'Mindfulness Breaks', icon: Brain, description: 'Short meditation sessions' },
      { id: 'trigger-awareness', name: 'Trigger Awareness', icon: Eye, description: 'Identify and manage triggers' }
    ]
  },
  'ocd': {
    name: 'OCD',
    icon: Brain,
    color: 'bg-cyan-100 text-cyan-800',
    tools: [
      { id: 'exposure-therapy', name: 'Exposure Practice', icon: Target, description: 'Gradual exposure exercises' },
      { id: 'thought-challenging', name: 'Thought Challenges', icon: Brain, description: 'CBT-based thought tools' },
      { id: 'ritual-tracker', name: 'Ritual Tracker', icon: Activity, description: 'Monitor compulsive behaviors' },
      { id: 'mindfulness-ocd', name: 'OCD Mindfulness', icon: Heart, description: 'Specialized mindfulness for OCD' }
    ]
  },
  'apd': {
    name: 'Auditory Processing Disorder',
    icon: Volume2,
    color: 'bg-pink-100 text-pink-800',
    tools: [
      { id: 'sound-filtering', name: 'Sound Filtering', icon: Volume2, description: 'Filter background noise' },
      { id: 'visual-cues', name: 'Visual Audio Cues', icon: Eye, description: 'Visual representations of audio' },
      { id: 'listening-exercises', name: 'Listening Practice', icon: Music, description: 'Auditory processing exercises' },
      { id: 'noise-control', name: 'Noise Control', icon: Settings, description: 'Environmental sound management' }
    ]
  },
  'irlen': {
    name: 'Meares-Irlen Syndrome',
    icon: Eye,
    color: 'bg-teal-100 text-teal-800',
    tools: [
      { id: 'color-overlays', name: 'Color Overlays', icon: Palette, description: 'Customizable reading overlays' },
      { id: 'contrast-adjustment', name: 'Contrast Control', icon: Eye, description: 'Adjust text contrast and brightness' },
      { id: 'font-spacing', name: 'Font Spacing', icon: PenTool, description: 'Customize text spacing and size' },
      { id: 'background-colors', name: 'Background Colors', icon: Palette, description: 'Reduce visual stress with colors' }
    ]
  },
  'hyperlexia': {
    name: 'Hyperlexia',
    icon: BookOpen,
    color: 'bg-emerald-100 text-emerald-800',
    tools: [
      { id: 'comprehension-tools', name: 'Reading Comprehension', icon: BookOpen, description: 'Tools to improve understanding' },
      { id: 'vocabulary-builder', name: 'Vocabulary Builder', icon: Target, description: 'Expand word understanding' },
      { id: 'context-clues', name: 'Context Practice', icon: Eye, description: 'Learn to use context for meaning' },
      { id: 'social-reading', name: 'Social Reading', icon: Heart, description: 'Practice reading social cues in text' }
    ]
  },
  'synesthesia': {
    name: 'Synesthesia',
    icon: Palette,
    color: 'bg-violet-100 text-violet-800',
    tools: [
      { id: 'color-association', name: 'Color Associations', icon: Palette, description: 'Map your unique color connections' },
      { id: 'synesthetic-calendar', name: 'Synesthetic Calendar', icon: Target, description: 'Use your synesthesia for organization' },
      { id: 'memory-palace', name: 'Memory Palace', icon: Brain, description: 'Leverage synesthesia for memory' },
      { id: 'creative-tools', name: 'Creative Expression', icon: Activity, description: 'Express your synesthetic experiences' }
    ]
  }
};

interface ConditionSpecificToolsProps {
  onToolSelect: (toolId: string, toolName: string) => void;
}

export function ConditionSpecificTools({ onToolSelect }: ConditionSpecificToolsProps) {
  return (
    <Card className="card-gentle p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Condition-Specific Tools</h2>
          <p className="text-muted-foreground">
            Specialized tools designed for different neurodivergent conditions and needs.
          </p>
        </div>

        <Tabs defaultValue="asd" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 h-auto p-1">
            {Object.entries(conditionTools).map(([key, condition]) => {
              const Icon = condition.icon;
              return (
                <TabsTrigger 
                  key={key} 
                  value={key} 
                  className="flex flex-col gap-1 h-auto py-3 px-2 text-xs"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:block">{condition.name.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(conditionTools).map(([key, condition]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <condition.icon className="h-6 w-6" />
                  <div>
                    <h3 className="font-semibold">{condition.name}</h3>
                    <Badge variant="secondary" className={condition.color}>
                      {condition.tools.length} tools available
                    </Badge>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {condition.tools.map((tool) => {
                    const ToolIcon = tool.icon;
                    return (
                      <Card key={tool.id} className="p-4 hover:shadow-focus transition-shadow">
                        <Button
                          variant="ghost"
                          className="w-full h-auto p-0 flex flex-col items-start gap-3"
                          onClick={() => onToolSelect(tool.id, tool.name)}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <div className={`p-2 rounded-lg ${condition.color.replace('text-', 'bg-').replace('-800', '-200')}`}>
                              <ToolIcon className="h-4 w-4" />
                            </div>
                            <div className="text-left">
                              <h4 className="font-medium">{tool.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {tool.description}
                              </p>
                            </div>
                          </div>
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Card>
  );
}