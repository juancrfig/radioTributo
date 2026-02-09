import { ListMusic, Clock, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sections } from "@/lib/data";

export default function SeccionesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ListMusic className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Secciones del Programa
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Las secciones que han marcado la historia de La Mega. Desde las más 
            populares hasta las que dejaron huella en el corazón de los oyentes.
          </p>
        </div>
      </section>

      {/* Active Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-green-500 rounded-full" />
            <h2 className="text-2xl font-bold">Secciones al Aire</h2>
            <Badge variant="default" className="ml-2">Activas</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections
              .filter(s => s.years.includes("Presente"))
              .map((section) => (
              <Card key={section.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{section.icon}</span>
                      <div>
                        <CardTitle className="text-xl">{section.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {section.years}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">Activa</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-amber-500 rounded-full" />
            <h2 className="text-2xl font-bold">Secciones Históricas</h2>
            <Badge variant="secondary" className="ml-2">Archivadas</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections
              .filter(s => !s.years.includes("Presente"))
              .map((section) => (
              <Card key={section.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{section.icon}</span>
                      <div>
                        <CardTitle className="text-xl">{section.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {section.years}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">Archivada</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-4" />
              <blockquote className="text-xl italic text-muted-foreground mb-4">
                &ldquo;Cada sección es un mundo diferente, pero todas comparten la magia 
                de conectar con miles de personas que nos escuchan día tras día.&rdquo;
              </blockquote>
              <p className="font-semibold">— El Equipo de La Mega</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
