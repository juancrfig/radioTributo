"use client";

import Image from "next/image";
import { Users, Calendar, Mic2, Music, Star, UserX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { crewMembers } from "@/lib/data";

interface CrewMember {
  id: number;
  name: string;
  role: string;
  image: string;
  startYear: number;
  endYear?: number;
  djInfo: string;
  broadcasterInfo: string;
  relevantData: string;
}

function CrewCard({ member, isFormer = false }: { member: CrewMember; isFormer?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-white/80 text-sm">{member.role}</p>
            </div>
            {isFormer && (
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-black/50 text-white">
                  <UserX className="w-3 h-3 mr-1" />
                  Ex Tripulante
                </Badge>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Desde {member.startYear}
              </span>
              {isFormer && member.endYear && (
                <span>hasta {member.endYear}</span>
              )}
            </div>
            <p className="text-xs text-primary mt-2 text-center">
              Click para ver más información
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            <Image
              src={member.image}
              alt={member.name}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              {member.name}
              <p className="text-sm font-normal text-muted-foreground">{member.role}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span>
              <strong>Año de inicio:</strong> {member.startYear}
              {isFormer && member.endYear && (
                <span> | <strong>Año de salida:</strong> {member.endYear}</span>
              )}
            </span>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Music className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Como DJ</h4>
                <p className="text-sm text-muted-foreground">{member.djInfo}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mic2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Como Locutor</h4>
                <p className="text-sm text-muted-foreground">{member.broadcasterInfo}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Datos Relevantes</h4>
                <p className="text-sm text-muted-foreground">{member.relevantData}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function TripulacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            La Tripulación
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a las voces que nos acompañan cada día. Locutores, DJs y personalidades 
            que hacen de La Mega algo único.
          </p>
        </div>
      </section>

      {/* Current Crew */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold">Tripulación Actual</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crewMembers.current.map((member) => (
              <CrewCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Former Crew */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-muted-foreground rounded-full" />
            <h2 className="text-2xl font-bold">Ex Tripulantes</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Quienes formaron parte de la historia del programa y dejaron su huella 
            en cada transmisión. Siempre serán parte de la familia La Mega.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {crewMembers.former.map((member) => (
              <CrewCard key={member.id} member={member} isFormer />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
