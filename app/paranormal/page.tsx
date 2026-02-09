"use client";

import { useState } from "react";
import { Ghost, BookOpen, MessageSquare, ChevronDown, ChevronUp, Moon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { paranormalStories } from "@/lib/data";

interface Story {
  id: number;
  title: string;
  stories: string[];
  listenerTales: string[];
  summary: string;
}

function StoryCard({ story }: { story: Story }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Ghost className="h-6 w-6 text-purple-500" />
            <CardTitle className="text-xl">{story.title}</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            Paranormal
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Main Stories */}
        <div>
          <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-muted-foreground" />
            Historias del Programa
          </h4>
          <ul className="space-y-2">
            {story.stories.map((item, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {isExpanded && (
          <>
            <Separator />
            
            {/* Listener Tales */}
            <div>
              <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                Relatos de Oyentes
              </h4>
              <div className="space-y-2">
                {story.listenerTales.map((tale, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground bg-muted p-3 rounded-lg italic">
                    &ldquo;{tale}&rdquo;
                  </p>
                ))}
              </div>
            </div>

            <Separator />

            {/* Summary */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Resumen del Programa</h4>
              <p className="text-sm text-muted-foreground">{story.summary}</p>
            </div>
          </>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Ver menos
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Ver más detalles
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function ParanormalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-purple-900/20 to-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Ghost className="h-16 w-16 text-purple-500 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Sección Paranormal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Historias de misterio, fenómenos inexplicables y relatos sobrenaturales 
            contados por oyentes y explorados en el programa.
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center gap-3">
            <Moon className="h-5 w-5 text-amber-600" />
            <p className="text-sm text-amber-800">
              <strong>Advertencia:</strong> Las siguientes historias pueden ser inquietantes 
              para algunos lectores. Se recomienda discreción.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {paranormalStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-purple-900/10 to-purple-900/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="max-w-2xl mx-auto border-purple-200">
            <CardContent className="p-8">
              <Ghost className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">¿Tienes una historia paranormal?</h2>
              <p className="text-muted-foreground mb-6">
                Si has vivido una experiencia sobrenatural y quieres compartirla, 
                escríbenos. Las mejores historias podrían ser contadas en el programa.
              </p>
              <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                Compartir mi historia
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
