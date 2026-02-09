// Data for the radio tribute website

export const crewMembers = {
  current: [
    {
      id: 1,
      name: "Carlos 'El Loco'",
      role: "DJ Principal",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop",
      startYear: 2015,
      djInfo: "Experto en música urbana y electrónica. Ha mezclado en los clubes más importantes del país.",
      broadcasterInfo: "Conocido por su energía contagiosa y su capacidad para conectar con la audiencia.",
      relevantData: "Creador de la sección 'Caza Infieles'. Ha recibido múltiples premios como locutor del año."
    },
    {
      id: 2,
      name: "María 'La Voz'",
      role: "Locutora",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      startYear: 2017,
      djInfo: "Especialista en música latina y baladas románticas.",
      broadcasterInfo: "Voz oficial del programa. Su carisma ha conquistado a millones de oyentes.",
      relevantData: "Responsable de la sección 'Serenatas'. Ha entrevistado a las estrellas más grandes del país."
    },
    {
      id: 3,
      name: "Pedro 'Tripas'",
      role: "Co-Locutor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      startYear: 2016,
      djInfo: "Apasionado por el rock clásico y la música alternativa.",
      broadcasterInfo: "El alma cómica del programa. Siempre tiene un chiste o anécdota que contar.",
      relevantData: "Creador de 'Tripas Corazón' y 'Huesitos de Marrano'. Su humor irreverente es icónico."
    },
    {
      id: 4,
      name: "Ana 'Paranormal'",
      role: "Especialista en Misterio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      startYear: 2018,
      djInfo: "Curadora de música ambiental y soundtracks de terror.",
      broadcasterInfo: "Experta en fenómenos paranormales. Su voz misteriosa cautiva a los oyentes.",
      relevantData: "Conductora de la sección 'Paranormal'. Ha investigado cientos de casos sobrenaturales."
    }
  ],
  former: [
    {
      id: 5,
      name: "Javier 'El Maestro'",
      role: "Fundador",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      startYear: 2010,
      endYear: 2018,
      djInfo: "Pionero de la radio moderna. Su estilo marcó una época.",
      broadcasterInfo: "Fundador del programa. Su legado sigue vivo en cada transmisión.",
      relevantData: "Creó el formato del programa que conocemos hoy. Actualmente tiene su propio podcast."
    },
    {
      id: 6,
      name: "Lucía 'La Rebelde'",
      role: "Locutora",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      startYear: 2012,
      endYear: 2019,
      djInfo: "Revolucionó la selección musical del programa.",
      broadcasterInfo: "Conocida por su estilo directo y sin filtros.",
      relevantData: "Ahora es directora de programación en una cadena internacional."
    }
  ]
};

export const sections = [
  {
    id: 1,
    name: "Caza Infieles",
    description: "La sección más popular del programa. Oyentes llaman para descubrir si su pareja les es infiel. Drama, suspenso y revelaciones impactantes en cada episodio.",
    years: "2016 - Presente",
    icon: "🔍"
  },
  {
    id: 2,
    name: "Huesitos de Marrano",
    description: "Concurso gastronómico donde los oyentes compiten por preparar los mejores huesitos de marrano. Sabrosamente divertido.",
    years: "2017 - Presente",
    icon: "🍖"
  },
  {
    id: 3,
    name: "Tripas Corazón",
    description: "Pedro 'Tripas' responde las preguntas más íntimas y embarazosas de los oyentes con humor y consejos sinceros.",
    years: "2016 - Presente",
    icon: "❤️"
  },
  {
    id: 4,
    name: "Serenatas",
    description: "María dedica canciones románticas a los oyentes. El amor se siente en el aire cada tarde.",
    years: "2017 - Presente",
    icon: "🎵"
  },
  {
    id: 5,
    name: "La Llamada de la Madrugada",
    description: "Historias de insomnes, trabajadores nocturnos y soñadores que encuentran compañía en las horas más oscuras.",
    years: "2018 - 2022",
    icon: "🌙"
  },
  {
    id: 6,
    name: "Pérdida de Tiempo",
    description: "Debates absurdos sobre temas sin importancia que terminan siendo las conversaciones más entretenidas.",
    years: "2015 - 2019",
    icon: "⏰"
  }
];

export const paranormalStories = [
  {
    id: 1,
    title: "La Casa de los Lamentos",
    stories: [
      "Una familia escuchaba gemidos cada noche a las 3 AM",
      "Objetos se movían solos en la cocina",
      "La presencia de una mujer de blanco aparecía en fotos"
    ],
    listenerTales: [
      "Pedro de Bogotá: 'Mi abuela vivía en esa casa y siempre decía que había un alma en pena'",
      "María de Medellín: 'Pasé una noche allí y escuché los lamentos con mis propios oídos'"
    ],
    summary: "El programa investigó esta casa embrujada durante una semana completa. Los oyentes compartieron sus propias experiencias paranormales y se descubrió que el lugar había sido un hospital durante la guerra."
  },
  {
    id: 2,
    title: "El Puente del Conductor",
    stories: [
      "Camioneros reportaban ver a un hombre caminando en la carretera",
      "Al detenerse, la figura desaparecía",
      "Varios conductores sufrieron accidentes misteriosos"
    ],
    listenerTales: [
      "Carlos de Cali: 'Soy camionero y vi esa sombra. Casi pierdo el control del vehículo'",
      "Anónimo: 'Mi tío murió en ese puente en los 80s. Creo que es su espíritu'"
    ],
    summary: "Historia de un puente donde se dice que aparece el fantasma de un conductor que murió en un accidente. Muchos camioneros afirman haberlo visto."
  },
  {
    id: 3,
    title: "La Niña del Espejo",
    stories: [
      "Una niña aparecía en los espejos de una casa antigua",
      "Jugaba con los habitantes, especialmente con otros niños",
      "Fotos antiguas revelaron que vivió allí en los años 50"
    ],
    listenerTales: [
      "Familia Rodríguez: 'Nuestra hija hablaba sola frente al espejo. Decía que jugaba con una amiga'",
      "Luis de Barranquilla: 'Investigué la historia. La niña murió de fiebre en esa casa'"
    ],
    summary: "El caso de un espíritu infantil que parece no saber que ha fallecido. Familias que han vivido en la casa reportan interacciones pacíficas pero inquietantes."
  },
  {
    id: 4,
    title: "La Radio Fantasma",
    stories: [
      "Señal misteriosa que interrumpe la transmisión a medianoche",
      "Una voz antigua anuncia programas de hace 50 años",
      "La frecuencia no existe en ningún registro oficial"
    ],
    listenerTales: [
      "Técnico de radio: 'He intentado rastrear la señal. Viene de todas partes y de ninguna'",
      "Oyente veterano: 'Esa es la voz del locutor que murió en el terremoto de 1975'"
    ],
    summary: "Una misteriosa interferencia en la frecuencia del programa que parece venir del pasado. Los ingenieros no han podido explicar el fenómeno."
  }
];

export const listenerMessages = [
  {
    id: 1,
    name: "Sofía M.",
    message: "Gracias por acompañarme durante mis noches de estudio. Son mi familia lejana. ❤️",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Andrés P.",
    message: "Desde que descubrí el programa en 2019, no he dejado de escucharlos. Son lo mejor de mis mañanas.",
    date: "2024-01-14"
  },
  {
    id: 3,
    name: "Carmen R.",
    message: "Mi mamá y yo escuchamos juntas todos los días. Han creado hermosos momentos entre nosotras.",
    date: "2024-01-13"
  },
  {
    id: 4,
    name: "Diego L.",
    message: "La sección Paranormal me tiene atrapado. ¡Nunca dejen de contar esas historias!",
    date: "2024-01-12"
  },
  {
    id: 5,
    name: "Valentina G.",
    message: "Gracias por hacerme reír en los días difíciles. Ustedes son terapia gratuita.",
    date: "2024-01-11"
  },
  {
    id: 6,
    name: "Juan C.",
    message: "Conductor de camión aquí. El programa me mantiene despierto en las carreteras largas.",
    date: "2024-01-10"
  },
  {
    id: 7,
    name: "Laura M.",
    message: "Caza Infieles es adictivo. He aprendido más de relaciones escuchándolos que en terapia 😂",
    date: "2024-01-09"
  },
  {
    id: 8,
    name: "Felipe A.",
    message: "Soy oyente desde el primer día. Han crecido tanto y yo he crecido con ustedes. Gracias.",
    date: "2024-01-08"
  },
  {
    id: 9,
    name: "Daniela S.",
    message: "Los extraño los fines de semana. ¿Por qué no hacen sábados también? 😅",
    date: "2024-01-07"
  },
  {
    id: 10,
    name: "Roberto N.",
    message: "Mi esposa pensó que les estaba siendo infiel porque me reía tanto escuchando. ¡Son los mejores!",
    date: "2024-01-06"
  },
  {
    id: 11,
    name: "Isabella T.",
    message: "El ambiente en el estudio se siente tan acogedor. Quisiera visitarlos algún día.",
    date: "2024-01-05"
  },
  {
    id: 12,
    name: "Mateo H.",
    message: "Su programa me ayudó a superar la depresión. Gracias por existir.",
    date: "2024-01-04"
  }
];

export const socialLinks = {
  facebook: "https://facebook.com/lamegaradio",
  instagram: "https://instagram.com/lamegaradio",
  twitter: "https://twitter.com/lamegaradio",
  youtube: "https://youtube.com/lamegaradio",
  twitch: "https://twitch.tv/lamegaradio"
};

export const streamingPlatforms = [
  { name: "La Mega FM", url: "#", icon: "📻" },
  { name: "TuneIn", url: "#", icon: "🎧" },
  { name: "Spotify Podcasts", url: "#", icon: "🎵" },
  { name: "Apple Podcasts", url: "#", icon: "🍎" },
  { name: "YouTube Live", url: "#", icon: "📺" }
];
