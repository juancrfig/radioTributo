import Link from "next/link";
import Image from "next/image";
import { Radio, Heart, Users, Music, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { listenerMessages, streamingPlatforms, socialLinks } from "@/lib/data";

export default function HomePage() {
  const featuredMessages = listenerMessages.slice(0, 10);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Badge variant="secondary" className="text-sm">
                <Radio className="w-4 h-4 mr-1" />
                Homenaje de los Oyentes
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  La Mega
                </span>
                <br />
                <span className="text-2xl lg:text-4xl text-muted-foreground">
                  Un Legado en el Aire
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Un tributo al programa de radio que ha acompañado nuestras mañanas, 
                nuestras noches y todos los momentos importantes de nuestras vidas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/tripulacion">
                  <Button size="lg">
                    <Users className="mr-2 h-5 w-5" />
                    Conoce la Tripulación
                  </Button>
                </Link>
                <Link href="/oyentes">
                  <Button variant="outline" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Deja tu Mensaje
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl transform rotate-3" />
                <div className="relative bg-muted rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=800&fit=crop"
                    alt="Estudio de Radio La Mega"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2 text-white">
                      <Radio className="h-5 w-5 animate-pulse" />
                      <span className="font-semibold">EN EL AIRE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tribute Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="flex justify-center mb-6">
                <Heart className="h-12 w-12 text-red-500 fill-red-500" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">
                Un Mensaje de Gratitud
              </h2>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                Este sitio nace del cariño y agradecimiento de todos los oyentes que, 
                día tras día, sintonizan sus voces. Han sido cómplices de nuestras risas, 
                testigos de nuestras lágrimas y compañeros en los momentos de soledad. 
                Por cada mañana que nos despertaron con energía, por cada noche que nos 
                acompañaron hasta el sueño, por cada historia compartida y cada consejo dado: 
                <span className="font-semibold text-foreground"> ¡Gracias!</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Messages */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mensajes de los Oyentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Palabras de gratitud y cariño de quienes hacen de este programa algo especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredMessages.map((msg) => (
              <Card key={msg.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MessageCircle className="h-6 w-6 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4 italic">
                    &ldquo;{msg.message}&rdquo;
                  </p>
                  <p className="font-semibold text-sm">— {msg.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/oyentes">
              <Button variant="outline" size="lg">
                Ver todos los mensajes
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Streaming & Social */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Streaming Platforms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Music className="mr-2 h-5 w-5 text-primary" />
                  Dónde Escucharlos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {streamingPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <span className="text-2xl">{platform.icon}</span>
                      <span className="font-medium text-sm">{platform.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Networks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Redes Sociales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sigue al programa oficial en sus redes para contenido exclusivo, 
                  behind the scenes y más.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Facebook", icon: "📘" },
                    { name: "Instagram", icon: "📷" },
                    { name: "Twitter", icon: "🐦" },
                    { name: "YouTube", icon: "▶️" },
                    { name: "Twitch", icon: "🎮" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <span>{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
