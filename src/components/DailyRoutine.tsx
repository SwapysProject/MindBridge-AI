import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle, Clock, ChevronRight } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  estimatedTime?: string;
  steps?: string[];
}

const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Morning Routine',
    description: 'Get ready for the day',
    completed: false,
    estimatedTime: '30 minutes',
    steps: ['Brush teeth', 'Take medication', 'Eat breakfast', 'Check calendar']
  },
  {
    id: '2',
    title: 'Review Today\'s Schedule',
    description: 'Plan out the day ahead',
    completed: false,
    estimatedTime: '10 minutes',
    steps: ['Check calendar', 'Review priorities', 'Set intentions']
  },
  {
    id: '3',
    title: 'Focus Block 1',
    description: 'Deep work session',
    completed: false,
    estimatedTime: '90 minutes',
    steps: ['Clear workspace', 'Turn off notifications', 'Set timer', 'Start work']
  },
  {
    id: '4',
    title: 'Sensory Break',
    description: 'Recharge and regulate',
    completed: false,
    estimatedTime: '15 minutes',
    steps: ['Find quiet space', 'Deep breathing', 'Stretch or movement', 'Hydrate']
  }
];

export function DailyRoutine() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleExpanded = (taskId: string) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  return (
    <Card className="card-gentle p-6">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Today's Routine</h2>
            <span className="text-sm text-muted-foreground">
              {completedCount} of {tasks.length} completed
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <Card key={task.id} className={`p-4 border transition-colors ${
              task.completed ? 'bg-success/10 border-success/20' : 'bg-card border-border'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleTask(task.id)}
                    className="p-0 h-auto interactive-element"
                    aria-label={task.completed ? `Mark ${task.title} as incomplete` : `Mark ${task.title} as complete`}
                  >
                    {task.completed ? (
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    ) : (
                      <Circle className="h-6 w-6 text-muted-foreground" />
                    )}
                  </Button>

                  <div className="flex-1">
                    <h3 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    )}
                  </div>

                  {task.estimatedTime && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {task.estimatedTime}
                    </div>
                  )}

                  {task.steps && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(task.id)}
                      className="p-1 interactive-element"
                      aria-label={`${expandedTask === task.id ? 'Hide' : 'Show'} steps for ${task.title}`}
                    >
                      <ChevronRight className={`h-4 w-4 transition-transform ${
                        expandedTask === task.id ? 'rotate-90' : ''
                      }`} />
                    </Button>
                  )}
                </div>

                {task.steps && expandedTask === task.id && (
                  <div className="ml-9 space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Steps:</h4>
                    <ul className="space-y-1">
                      {task.steps.map((step, index) => (
                        <li key={index} className="text-sm flex items-center gap-2">
                          <Circle className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {progressPercentage === 100 && (
          <Card className="p-4 bg-success/10 border-success/20">
            <div className="text-center">
              <h3 className="font-medium text-success mb-1">Great job today! 🎉</h3>
              <p className="text-sm text-success/80">You've completed all your routine tasks.</p>
            </div>
          </Card>
        )}
      </div>
    </Card>
  );
}