"use client";

import { useState } from "react";
import { MessageCircle, Send, Heart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { listenerMessages } from "@/lib/data";

export default function OyentesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Mensajes de los Oyentes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un espacio para que los fans compartan su gratitud, recuerdos y 
            experiencias con el programa. ¡Tu voz cuenta!
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Messages List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold">Todos los Mensajes</h2>
                <Badge variant="secondary" className="ml-auto">
                  {listenerMessages.length} mensajes
                </Badge>
              </div>

              <div className="space-y-4">
                {listenerMessages.map((msg) => (
                  <Card key={msg.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-muted-foreground mb-3 italic">
                            &ldquo;{msg.message}&rdquo;
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">{msg.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {new Date(msg.date).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="h-5 w-5 text-primary" />
                      Envía tu Mensaje
                    </CardTitle>
                    <CardDescription>
                      Comparte tu experiencia con el programa.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="text-center py-8 space-y-4">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                          <Heart className="h-8 w-8 text-green-600 fill-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-green-700">
                          ¡Gracias por tu mensaje!
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Tu apoyo y sintonía significan mucho para toda la tripulación. 
                          ¡Seguimos en el aire gracias a oyentes como tú!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Tu Nombre
                          </label>
                          <Input
                            placeholder="¿Cómo te llamas?"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Correo Electrónico
                          </label>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Tu Mensaje
                          </label>
                          <Textarea
                            placeholder="Escribe tu mensaje para el programa..."
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensaje
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          Tu correo no será publicado. Solo se mostrará tu nombre y mensaje.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>

                {/* Stats Card */}
                <Card className="mt-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {listenerMessages.length}
                        </div>
                        <div className="text-xs text-muted-foreground">Mensajes</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          5+
                        </div>
                        <div className="text-xs text-muted-foreground">Años Online</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4 fill-red-500" />
          <h2 className="text-2xl font-bold mb-4">
            Gracias por su Sintonía
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada mensaje, cada llamada, cada compartida en redes sociales nos 
            motiva a seguir mejorando y trayendo el mejor contenido a sus vidas. 
            Ustedes son la razón de nuestro éxito.
          </p>
        </div>
      </section>
    </div>
  );
}
