import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Search,
  ExternalLink,
  Star,
  Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const educationalResources = [
  {
    id: '1',
    title: 'Understanding ADHD in Adults',
    type: 'Article',
    description: 'Comprehensive guide to adult ADHD symptoms, diagnosis, and management strategies.',
    rating: 4.8,
    category: 'ADHD',
    url: '#',
    author: 'Dr. Sarah Johnson'
  },
  {
    id: '2',
    title: 'Autism Self-Advocacy Toolkit',
    type: 'PDF Guide',
    description: 'Resources for self-advocacy, workplace accommodations, and community support.',
    rating: 4.9,
    category: 'Autism',
    url: '#',
    author: 'Autistic Self Advocacy Network'
  },
  {
    id: '3',
    title: 'Dyslexia Reading Strategies',
    type: 'Video Series',
    description: '12-part video series on effective reading techniques and assistive technology.',
    rating: 4.7,
    category: 'Dyslexia',
    url: '#',
    author: 'Learning Differences Institute'
  }
];

const professionalDirectory = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    specialty: 'Neuropsychologist',
    credentials: 'PhD, Licensed Psychologist',
    focus: ['ADHD Assessment', 'Autism Diagnosis', 'Cognitive Testing'],
    location: 'San Francisco, CA',
    telehealth: true,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Dr. Michael Rodriguez',
    specialty: 'Occupational Therapist',
    credentials: 'OTR/L, MS',
    focus: ['Sensory Integration', 'Executive Function', 'Daily Living Skills'],
    location: 'Austin, TX',
    telehealth: true,
    rating: 4.8
  },
  {
    id: '3',
    name: 'Dr. Lisa Park',
    specialty: 'Speech-Language Pathologist',
    credentials: 'CCC-SLP, MA',
    focus: ['Social Communication', 'Language Processing', 'AAC'],
    location: 'Seattle, WA',
    telehealth: false,
    rating: 4.9
  }
];

const crisisResources = [
  {
    name: 'National Suicide Prevention Lifeline',
    number: '988',
    description: '24/7 crisis support for suicide prevention',
    type: 'Crisis Hotline'
  },
  {
    name: 'Crisis Text Line',
    number: 'Text HOME to 741741',
    description: '24/7 crisis intervention via text message',
    type: 'Text Support'
  },
  {
    name: 'NAMI Helpline',
    number: '1-800-950-NAMI',
    description: 'Mental health information and support',
    type: 'Information & Support'
  }
];

export default function Resources() {
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
              <h1 className="text-xl font-semibold">Resources</h1>
              <p className="text-sm text-muted-foreground">
                Educational content, professional directory, and crisis support
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
                placeholder="Search resources, professionals, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          <Tabs defaultValue="educational" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="educational" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Educational
              </TabsTrigger>
              <TabsTrigger value="professionals" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Professionals
              </TabsTrigger>
              <TabsTrigger value="crisis" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Crisis Support
              </TabsTrigger>
            </TabsList>

            <TabsContent value="educational" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {educationalResources.map((resource) => (
                  <Card key={resource.id} className="card-gentle p-6 hover:shadow-focus transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            {resource.type === 'Article' && <FileText className="h-4 w-4" />}
                            {resource.type === 'Video Series' && <Video className="h-4 w-4" />}
                            {resource.type === 'PDF Guide' && <Download className="h-4 w-4" />}
                            <Badge variant="outline" className="text-xs">
                              {resource.type}
                            </Badge>
                          </div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            By {resource.author}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          {resource.rating}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">
                          {resource.category}
                        </Badge>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          View Resource
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="card-gentle p-6">
                <div className="text-center space-y-4">
                  <BookOpen className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold mb-2">Suggest a Resource</h3>
                    <p className="text-muted-foreground mb-4">
                      Know of a helpful resource? Share it with the community.
                    </p>
                    <Button size="lg">
                      Submit Resource
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="professionals" className="space-y-6">
              <div className="space-y-4">
                {professionalDirectory.map((professional) => (
                  <Card key={professional.id} className="card-gentle p-6 hover:shadow-focus transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold">{professional.name}</h3>
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-primary">
                              {professional.specialty}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {professional.credentials}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {professional.location}
                            </p>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            {professional.rating}
                          </div>
                          {professional.telehealth && (
                            <Badge variant="outline" className="text-xs">
                              Telehealth
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Specializes in:</p>
                        <div className="flex flex-wrap gap-2">
                          {professional.focus.map((area) => (
                            <Badge key={area} variant="secondary" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                        <Button size="sm">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="card-gentle p-6">
                <div className="text-center space-y-4">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold mb-2">Join Our Directory</h3>
                    <p className="text-muted-foreground mb-4">
                      Are you a qualified professional? Join our directory to help others.
                    </p>
                    <Button size="lg">
                      Apply to Join
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="crisis" className="space-y-6">
              {/* Emergency Banner */}
              <Card className="border-destructive bg-destructive/10 p-6">
                <div className="text-center space-y-2">
                  <h2 className="text-xl font-semibold text-destructive">
                    If you're in immediate danger, call 911
                  </h2>
                  <p className="text-destructive/80">
                    For life-threatening emergencies, always contact local emergency services first.
                  </p>
                </div>
              </Card>

              {/* Crisis Resources */}
              <div className="space-y-4">
                {crisisResources.map((resource, index) => (
                  <Card key={index} className="card-gentle p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{resource.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {resource.description}
                          </p>
                        </div>
                        <Badge variant="outline">
                          {resource.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-mono font-bold text-primary">
                          {resource.number}
                        </div>
                        <Button size="sm" variant="outline">
                          More Info
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Additional Support */}
              <Card className="card-gentle p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Additional Mental Health Resources</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                      <span className="font-medium">Find Local Services</span>
                      <span className="text-xs text-muted-foreground">
                        SAMHSA Treatment Locator
                      </span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                      <span className="font-medium">Mental Health First Aid</span>
                      <span className="text-xs text-muted-foreground">
                        Learn how to help others
                      </span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                      <span className="font-medium">Peer Support Groups</span>
                      <span className="text-xs text-muted-foreground">
                        Connect with others
                      </span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                      <span className="font-medium">Safety Planning</span>
                      <span className="text-xs text-muted-foreground">
                        Create a crisis plan
                      </span>
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