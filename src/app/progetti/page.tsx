import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  BadgeEuro,
  BookOpen,
  ExternalLink,
  FileCode,
  Gamepad2,
  Github,
  KeyRound,
  Palette,
  ShoppingBag,
  Smartphone,
  Trophy,
} from "lucide-react";

// --- 1. Project Configuration ---

type Project = {
  slug: string;
  title: string;
  description: string;
  date: string;
  importance: 3 | 2 | 1.5 | 1;
  tech: string[];
  status: "ongoing" | "finished" | "planned" | "archived";
  links: {
    repo?: string;
    live?: string;
  };
  logo?: string;
  icon: React.ElementType;
};

const projects: Project[] = [
  {
    slug: "onboard",
    title: "Onboard",
    description:
      "Ecosistema per il trasporto pubblico di Milano: API, App, SDK e mappe in tempo reale.",
    date: "Mar 25 - Attivo",
    importance: 3,
    status: "ongoing",
    tech: ["Flutter", "Python", "Dart"],
    links: { repo: "https://github.com/onboard-project/" },
    logo: "/Onboard.Icon.png",
    icon: Smartphone,
  },
  {
    slug: "mytomes",
    title: "MyTomes",
    description:
      "Una app per tenere traccia di tutte le tue letture e i libri che possiedi",
    date: "Giu 24 - Apr 25",
    importance: 2,
    status: "finished",
    tech: ["Flutter", "Supabase"],
    links: {
      repo: "https://github.com/riccardodebellini/mytomes",
      live: "https://mytomes.vercel.app",
    },
    logo: "/MyTomes.Icon.png",
    icon: BookOpen,
  },
  {
    slug: "alverde",
    title: "AlVerde",
    description:
      "Gestisci il tuo denaro: portafogli, grafici e prestiti, resi semplici",
    date: "Futuro",
    importance: 2,
    status: "planned",
    tech: ["Flutter", "Supabase"],
    links: {},
    icon: BadgeEuro,
  },
  {
    slug: "olimpia-bottoni",
    title: "Olimpia Bottoni",
    description:
      "Il sito ufficiale della squadra di basket del Liceo Statale Pietro Bottoni",
    date: "Dic 2025",
    importance: 1.5,
    status: "finished",
    tech: ["Next.js", "TS", "Shadcn"],
    links: {
      repo: "https://github.com/riccardodebellini/olimpiabottoni-sito",
      live: "https://olimpiabottoni.vercel.app",
    },
    icon: Trophy,
  },
  {
    slug: "fc-palazzolo",
    title: "Gestionale FC Palazzolo",
    description:
      "Un modulo per gestire gli ordini del materiale per l'FC Palazzolo",
    date: "Nov 2025",
    importance: 1.5,
    status: "finished",
    tech: ["Next.js", "GAS", "TS"],
    links: {},
    icon: ShoppingBag,
  },
  {
    slug: "login-terminal",
    title: "Login Terminal",
    description: "Experimental CLI-style login interface.",
    date: "Lug 2024",
    importance: 1,
    status: "archived",
    tech: ["Flutter"],
    links: {
      repo: "https://github.com/riccardodebellini/login-terminal",
      live: "https://labs.riccardo.is-a.dev/login-terminal",
    },
    icon: KeyRound,
  },
  {
    slug: "material-components",
    title: "Material CSS",
    description: "Pure CSS implementation of Material Design 3.",
    date: "Mar 2024",
    importance: 1,
    status: "archived",
    tech: ["CSS", "HTML"],
    links: { repo: "https://github.com/riccardodebellini/material-components" },
    icon: Palette,
  },
  {
    slug: "html-portfolio",
    title: "Legacy Portfolio",
    description: "V1 Portfolio built with vanilla web technologies.",
    date: "Mar 2024",
    importance: 1,
    status: "archived",
    tech: ["HTML", "JS"],
    links: {
      repo: "https://github.com/riccardodebellini/html-portfolio",
      live: "https://riccardo.is-a.dev/html-portfolio/",
    },
    icon: FileCode,
  },
  {
    slug: "rd-games",
    title: "RD Games",
    description: "Collection of scratch games from middle school.",
    date: "Mag 2022",
    importance: 1,
    status: "archived",
    tech: ["Scratch", "Google Sites"],
    links: { live: "https://sites.google.com/view/rdgames" },
    icon: Gamepad2,
  },
];

// --- 2. Page Component ---

export default function ProjectsPage() {
  const activeProjects = projects.filter((p) => p.status !== "archived");
  const archivedProjects = projects.filter((p) => p.status === "archived");

  return (
    <div className="min-h-screen bg-background py-12 ">
      <div className="max-w-[1400px] mx-auto space-y-12 px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight lg:text-6xl">
            Progetti
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">
            Un elenco curato di applicazioni, siti web ed esperimenti che ho
            realizzato nel corso del tempo.
          </p>
        </div>

        {/* Bento Grid - Active */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {activeProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="py-12">
        <Separator />
        <div
          className="h-16 w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--border), var(--border) 1px, transparent 1px, transparent 12px)",
          }}
        />
        <Separator />
      </div>
      <div className="max-w-[1400px] mx-auto space-y-12 px-4 md:px-8">
        {/* Header Archivio */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Archivio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">
            Vecchi progetti ed esperimenti, che ora ho accantonato.
          </p>
        </div>

        {/* Bento Grid - Archived */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {archivedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

// --- 3. Card Component ---

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  // Grid Logic
  const gridClasses = cn(
    project.importance === 3 && "md:col-span-2 md:row-span-2 min-h-[400px]",
    project.importance === 2 && "md:col-span-1 md:row-span-2 min-h-[400px]",
    project.importance === 1.5 && "md:col-span-2 md:row-span-1 min-h-[220px]",
    project.importance === 1 && "md:col-span-1 md:row-span-1 min-h-[200px]",
  );

  return (
    <div
      className={cn(
        "group relative block h-full w-full rounded-xl transition-all duration-500",
        gridClasses,
      )}
    >
      <Card className="touch:bg-red relative h-full w-full overflow-hidden border backdrop-blur-sm transition-all hover:shadow-xl flex flex-col justify-between">
        {/* === MAIN LINK OVERLAY === */}
        {/* This sits at z-10. Clicks pass through the higher z-index headers (pointer-events-none) to hit this. */}
        <Link
          href={`/progetti/${project.slug}`}
          className="absolute inset-0 z-10 focus:outline-none"
        >
          <span className="sr-only">View {project.title}</span>
        </Link>

        {/* --- Background Gradient --- */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,var(--primary)_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-0 pointer-events-none" />

        {/* --- Visual Layer (Logo or Icon) --- */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 pointer-events-none z-0 translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out">
          {project.logo ? (
            <div
              className={cn(
                "relative w-full h-full p-10 transition-all duration-700 ease-out",
                "opacity-20 grayscale rotate-12",
                "group-hover:opacity-50 group-hover:grayscale-0 group-hover:rotate-0",
              )}
            >
              <Image
                src={project.logo}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <Icon
              strokeWidth={1}
              className={cn(
                "w-full h-full p-8 transition-all duration-700 ease-out",
                "text-foreground/5 rotate-12",
                "group-hover:text-primary/20 group-hover:rotate-0",
              )}
            />
          )}
        </div>

        {/* --- Content Header --- */}
        {/* z-20 puts this visually on top. pointer-events-none lets clicks pass through to the Link at z-10. */}
        <CardHeader className="relative z-20 pointer-events-none">
          <div className="flex justify-between items-start">
            <Badge variant="default">{project.date}</Badge>

            {/* Hover Actions */}
            {/* pointer-events-auto allows this specific child to capture clicks, overriding the parent's none. */}
            <div className="flex gap-2 md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-auto relative z-30">
              {project.links.repo && (
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                </Button>
              )}
              {project.links.live && (
                <Button size="icon" variant="default" asChild>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <CardTitle
            className={cn(
              "font-black tracking-tight mt-2",
              project.importance >= 2 ? "text-3xl md:text-4xl" : "text-xl",
            )}
          >
            {project.title}
          </CardTitle>

          {project.importance >= 1.5 && (
            <CardDescription className="text-base font-medium text-muted-foreground/90 line-clamp-3 mt-1">
              {project.description}
            </CardDescription>
          )}
        </CardHeader>

        {/* --- Content Footer --- */}
        <CardFooter className="relative z-20 pt-0 mt-auto pointer-events-none">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-md font-bold text-[10px] opacity-70 bg-secondary/50 backdrop-blur-sm border border-transparent group-hover:border-border/50 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
