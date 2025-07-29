import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Users, MessageSquare, Heart, Calendar, Search, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const supportGroups = [
  {
    id: '1',
    name: 'ADHD Adults Support Circle',
    members: 1247,
    description: 'A supportive community for adults navigating ADHD in work, relationships, and daily life.',
    tags: ['ADHD', 'Adults', 'Workplace'],
    activity: 'Very Active',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: '2',
    name: 'Autism Self-Advocacy Network',
    members: 892,
    description: 'Autistic people supporting each other and advocating for neurodivergent rights.',
    tags: ['Autism', 'Self-Advocacy', 'Rights'],
    activity: 'Active',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: '3',
    name: 'Dyslexia Reading Strategies',
    members: 567,
    description: 'Share tips, tools, and encouragement for reading challenges.',
    tags: ['Dyslexia', 'Reading', 'Education'],
    activity: 'Moderate',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: '4',
    name: 'Parent Support Network',
    members: 2134,
    description: 'Parents and caregivers supporting neurodivergent children and teens.',
    tags: ['Parents', 'Children', 'Support'],
    activity: 'Very Active',
    color: 'bg-purple-100 text-purple-800'
  }
];

const discussionTopics = [
  {
    id: '1',
    title: 'Managing sensory overload at work',
    author: 'Sarah M.',
    replies: 23,
    lastActivity: '2 hours ago',
    tags: ['Sensory', 'Workplace', 'Strategies']
  },
  {
    id: '2',
    title: 'Best ADHD-friendly planning apps?',
    author: 'Alex K.',
    replies: 41,
    lastActivity: '4 hours ago',
    tags: ['ADHD', 'Apps', 'Organization']
  },
  {
    id: '3',
    title: 'Celebrating small wins thread',
    author: 'Community Bot',
    replies: 156,
    lastActivity: '1 hour ago',
    tags: ['Positivity', 'Success', 'Community']
  }
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Monthly ADHD Support Meetup',
    date: 'Tomorrow, 7:00 PM',
    type: 'Virtual',
    attendees: 34
  },
  {
    id: '2',
    title: 'Autism Awareness Workshop',
    date: 'Mar 15, 2:00 PM',
    type: 'In-Person',
    attendees: 12
  },
  {
    id: '3',
    title: 'Dyslexia Reading Group',
    date: 'Mar 18, 6:30 PM',
    type: 'Virtual',
    attendees: 8
  }
];

export default function Community() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

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
              <h1 className="text-xl font-semibold">Community</h1>
              <p className="text-sm text-muted-foreground">
                Connect, share, and support each other
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Search */}
          <Card className="card-gentle p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search groups, discussions, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          <Tabs defaultValue="groups" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="groups" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Support Groups
              </TabsTrigger>
              <TabsTrigger value="discussions" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="groups" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {supportGroups.map((group) => (
                  <Card key={group.id} className="card-gentle p-6 hover:shadow-focus transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold">{group.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            {group.members.toLocaleString()} members
                            <Badge variant="secondary" className={group.color}>
                              {group.activity}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Join
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {group.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {group.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="card-gentle p-6">
                <div className="text-center space-y-4">
                  <Heart className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold mb-2">Create a New Group</h3>
                    <p className="text-muted-foreground mb-4">
                      Start a support group for your specific needs or interests.
                    </p>
                    <Button size="lg">
                      Create Group
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="discussions" className="space-y-6">
              <div className="space-y-4">
                {discussionTopics.map((topic) => (
                  <Card key={topic.id} className="card-gentle p-6 hover:shadow-focus transition-shadow cursor-pointer">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{topic.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>by {topic.author}</span>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {topic.replies} replies
                            </div>
                            <span>{topic.lastActivity}</span>
                          </div>
                        </div>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {topic.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="card-gentle p-6">
                <div className="text-center space-y-4">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold mb-2">Start a Discussion</h3>
                    <p className="text-muted-foreground mb-4">
                      Share your thoughts, ask questions, or offer support to others.
                    </p>
                    <Button size="lg">
                      New Discussion
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="card-gentle p-6 hover:shadow-focus transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </div>
                            <Badge variant="outline">
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          RSVP
                        </Button>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="card-gentle p-6">
                <div className="text-center space-y-4">
                  <Calendar className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold mb-2">Host an Event</h3>
                    <p className="text-muted-foreground mb-4">
                      Organize a meetup, workshop, or social gathering for the community.
                    </p>
                    <Button size="lg">
                      Create Event
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}