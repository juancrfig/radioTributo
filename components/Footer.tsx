"use client";

import Link from "next/link";
import { Radio, Facebook, Instagram, Twitter, Youtube, Twitch } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Twitch", icon: Twitch, href: "#" },
];

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Tripulación", href: "/tripulacion" },
  { name: "Secciones", href: "/secciones" },
  { name: "Paranormal", href: "/paranormal" },
  { name: "Oyentes", href: "/oyentes" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Radio className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">La Mega Tributo</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Un homenaje creado por oyentes para celebrar el programa de radio que nos ha acompañado durante años.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navegación</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} La Mega Tributo. Sitio creado por fans.
          </p>
          <p className="text-sm text-muted-foreground">
            No es un sitio oficial. Todos los derechos pertenecen a sus respectivos dueños.
          </p>
        </div>
      </div>
    </footer>
  );
}
