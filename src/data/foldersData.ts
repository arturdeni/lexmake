// Folders Data
export interface FolderData {
  id: number;
  title: string;
  color: string;
  tabPosition: string;
  content: {
    header: string;
    heading: string;
    description: string;
    advice: string;
    image: string;
    imageAlt: string;
    link: {
      text: string;
      url: string;
    };
  };
}

export const foldersData: FolderData[] = [
  {
    id: 1,
    title: "DISEÑO GRÁFICO",
    color: "white",
    tabPosition: "0%",
    content: {
      header: "01",
      heading: "Diseño Gráfico",
      description:
        "Si tu marca necesita una identidad visual sólida, coherente y memorable, este servicio de diseño gráfico es para ti. Desde la creación o actualización de tu branding hasta el diseño de piezas visuales para redes, web o impresión, te ayudo a construir una presencia visual que refleje quién eres y conecte con tu audiencia. Incluye desarrollo de identidad (logotipo, paleta de colores, tipografía), piezas gráficas clave y una ronda de ajustes.",
      advice:
        "Este servicio es ideal si quieres aclarar y fortalecer tu marca, y estás listo para colaborar con confianza y apertura creativa.",
      image: "/assets/solutionsFolders/folder1-illustration.png",
      imageAlt: "Diseño gráfico",
      link: {
        text: "QUIERO CONTACTAR",
        url: "/contact",
      },
    },
  },
  {
    id: 2,
    title: "REDES SOCIALES",
    color: "#D5FF00",
    tabPosition: "calc(33.33% - 66.66px)",
    content: {
      header: "02",
      heading: "Redes Sociales",
      description:
        "Si tu marca necesita comunicar con claridad, estilo y coherencia en redes sociales, este servicio de diseño y planificación es para ti. Desde la creación de templates personalizados hasta la organización estratégica del contenido, te ayudo a construir un feed atractivo, alineado con tu identidad visual y pensado para conectar con tu audiencia. Incluye planificación de publicaciones, diseño gráfico para redes y una ronda de ajustes.",
      advice:
        "Este servicio es ideal si quieres profesionalizar tu presencia en redes, atraer con contenido visualmente impactante y estás listo para colaborar con confianza y apertura creativa.",
      image: "/assets/solutionsFolders/folder2-illustration.png",
      imageAlt: "Redes sociales",
      link: {
        text: "QUIERO CONTACTAR",
        url: "/contact",
      },
    },
  },
  {
    id: 3,
    title: "DISEÑO WEB",
    color: "black",
    tabPosition: "calc(66.66% - 133.32px)",
    content: {
      header: "03",
      heading: "Diseño Web",
      description:
        "Si tu marca necesita moverse, hablar y destacar, este servicio es para ti. Desde motion graphics hasta edición de video y animaciones con identidad de marca, creo contenido dinámico que da vida a tus visuales en diversas plataformas. Incluye planificación, edición y una ronda de ajustes.",
      advice:
        "Este servicio es ideal si buscas contenido audaz y llamativo, y estás listo para colaborar con confianza y apertura creativa.",
      image: "/assets/solutionsFolders/folder3-illustration.png",
      imageAlt: "Diseño web",
      link: {
        text: "QUIERO CONTACTAR",
        url: "/contact",
      },
    },
  },
  {
    id: 4,
    title: "MULTIMEDIA",
    color: "#D9D9D9",
    tabPosition: "calc(100% - 200px)",
    content: {
      header: "04",
      heading: "Multimedia",
      description:
        "Si tu marca necesita una presencia digital clara, atractiva y funcional, este servicio de diseño web es para ti. Desde el diseño de sitios web modernos hasta la estructura visual de landing pages y portfolios, creo experiencias digitales que reflejan tu identidad de marca y guían al usuario de forma intuitiva. Incluye planificación, diseño visual, adaptación a dispositivos móviles y una ronda de ajustes.",
      advice:
        "Este servicio es ideal si quieres construir o renovar tu presencia online con una estética coherente y estratégica, y estás listo para colaborar con confianza y apertura creativa.",
      image: "/assets/solutionsFolders/folder4-illustration.png",
      imageAlt: "Multimedia",
      link: {
        text: "QUIERO CONTACTAR",
        url: "/contact",
      },
    },
  },
];
