# 🎙️ La Mega Tributo

Un sitio web homenaje creado por oyentes para celebrar el programa de radio **La Mega**. Este proyecto rinde tributo a la historia del programa, sus presentadores, secciones icónicas y la participación de los oyentes.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Características

- 🏠 **Inicio** - Hero section, mensaje de homenaje, mensajes destacados de oyentes
- 👥 **Tripulación** - Perfiles de presentadores actuales y ex tripulantes con modales informativos
- 📻 **Secciones** - Listado de secciones históricas del programa (activas y archivadas)
- 👻 **Paranormal** - Historias de misterio y fenómenos sobrenaturales
- 💬 **Oyentes** - Todos los mensajes de los fans con formulario para enviar nuevos

## 🚀 Tecnologías

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Estilos utilitarios
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI
- [Lucide React](https://lucide.dev/) - Iconos

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
my-app/
├── app/              # Páginas de Next.js
│   ├── page.tsx      # Inicio
│   ├── tripulacion/  # Página de tripulación
│   ├── secciones/    # Página de secciones
│   ├── paranormal/   # Página paranormal
│   └── oyentes/      # Página de oyentes
├── components/       # Componentes React
│   ├── ui/          # Componentes shadcn/ui
│   ├── Header.tsx   # Navegación
│   └── Footer.tsx   # Pie de página
├── lib/             # Utilidades y datos
│   └── data.ts      # Contenido del sitio
└── dist/            # Build estático
```

## 🌐 Despliegue

El proyecto está configurado para exportación estática (`output: 'export'`). El build se genera en la carpeta `dist/`.

## 📝 Licencia

Este es un proyecto de fans sin fines de lucro. Todo el contenido relacionado con "La Mega" pertenece a sus respectivos dueños.

---

*Sitio creado con ❤️ por los oyentes de La Mega*
