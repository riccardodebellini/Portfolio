"use client";

import * as React from "react";
import {
  BookHeart,
  ChevronDown,
  ChevronRight,
  ChevronsDown,
  Github as GitHubIcon,
  GraduationCap,
  Rocket,
  SquareArrowOutUpRight,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  siAndroidstudio,
  siDart,
  siFirebase,
  siFlutter,
  siFortran,
  siHtml5,
  siIntellijidea,
  siNextdotjs,
  siPycharm,
  siPython,
  siReact,
  siSupabase,
  siTailwindcss,
  siVercel,
  siWebstorm,
} from "simple-icons/icons";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"; // --- Components ---

// --- Components ---

interface SimpleIconProps {
  icon: typeof siFlutter;
  className?: string;
}

const SimpleIcon: React.FC<SimpleIconProps> = ({ icon, className }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>{icon.title}</title>
    <path d={icon.path} fill="currentColor" />
  </svg>
);

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100dvh-64px)] py-20 px-4 overflow-hidden">
        <div className="flex flex-col items-center  w-full max-w-5xl">
          <h1 className="flex flex-col items-center gap-2">
            <span className="font-black text-[clamp(3.5rem,12vw,8rem)] tracking-tight text-foreground leading-none uppercase">
              Necessità
            </span>
            <ChevronsDown className="w-15 h-15 animate-bounce" />
            <span className="font-black text-[clamp(3.5rem,12vw,8rem)] tracking-tight text-primary leading-none uppercase">
              Codice
            </span>
          </h1>
        </div>

        <div className="mt-12 text-center max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10 px-4">
            Ciao, sono{" "}
            <span className="hover:text-foreground hover:border-b-2 hover:border-primary/30 hover:font-bold transition ease-out duration-300">
              Riccardo 👋
            </span>
            <br />
            Trasformo idee e necessità in soluzioni digitali
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="transition-all hover:-translate-y-1"
              asChild
            >
              <Link href="/progetti">
                Guarda i progetti <Rocket className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              onClick={() => scrollToSection("chi-sono")}
              size="lg"
              className="transition-all hover:-translate-y-1"
              variant="outline"
            >
              Chi sono <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* --- CHI SONO SECTION --- */}
      <Separator />
      <div
        className="h-16 w-full  "
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--border), var(--border) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <Separator />
      <section id="chi-sono" className="scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[200px] w-full">
          {/* Colonna Sinistra: Intro & Mindset */}
          <div className="lg:col-span-2 space-y-6 pt-24 pb-12 lg:pb-24 px-8">
            <h2 className="text-4xl font-black tracking-tight leading-tight">
              Mi <span className="text-primary">presento</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ho 17 anni e frequento la 4ª Liceo Scientifico a Milano
              <br />
              <br />
              Mi considero una persona estremamente pratica. <br />
              Piuttosto che seguire passivamente dei tutorial, preferisco
              imparare sporcandomi le mani: costruisco progetti che nascono da
              necessità reali e che hanno un’utilità concreta. <br />
              <br />
              Se devo svolgere un compito che non mi entusiasma, divento un
              fanatico dell&apos;efficienza: odio sprecare minuti se esiste un
              modo più rapido per arrivare al risultato, ma quando qualcosa mi
              appassiona, perdo completamente la cognizione del tempo. <br />
              Mi basta aprire Wikipedia o voler implementare una piccola
              funzionalità per finire in un rabbit hole: posso passarci una
              settimana intera, approfondendo mille argomenti correlati e
              lasciandomi assorbire totalmente dalla ricerca.
            </p>
          </div>
          {/* Colonna Destra: 3 Righe Dettagli */}
          <div className="lg:col-span-3 flex flex-col lg:border-l border-border lg:pt-24 pb-12 lg:pb-24 divide-y divide-border w-full select-none">
            {/* Riga 1: Scuola */}
            <div className="flex-1 pb-10 first:pt-0 last:pb-0 group px-8">
              <div className="">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="w-8 h-8 text-foreground group-hover:text-primary group-hover:scale-110 group-active:text-primary group-active:scale-110 transition-transform " />
                  <h3 className="text-2xl font-black text-foreground group-hover:text-primary group-active:text-primary">
                    Scuola
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Frequento il Liceo Scientifico, e credo nel seguire le lezioni
                  in classe per ottimizzare lo studio.
                  <br />
                  Le mie materie preferite sono Fisica e Chimica, per conoscere
                  e approfondire quello che mi circonda.
                  <br />
                  In futuro mi piacerebbe frequentare{" "}
                  <strong>Ingegneria Informatica</strong> e lavorare in ambito{" "}
                  <strong>cybersecurity</strong> o <strong>intelligence</strong>
                  .
                </p>
              </div>
            </div>

            {/* Riga 2: Percorso Dev */}
            <div className="flex-1 py-10 group px-8">
              <div className="">
                <div className="flex items-center gap-4 mb-4">
                  <Terminal className="w-8 h-8 text-foreground group-hover:text-primary group-hover:scale-110 group-active:text-primary group-active:scale-110 transition ease-out duration-300 " />
                  <h3 className="text-2xl font-black text-foreground group-hover:text-primary group-active:text-primary transition ease-out duration-300">
                    Percorso Dev
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Ho iniziato con <strong>Flutter/Dart</strong>, passando per un
                  club di programmazione scolastico, i{" "}
                  <Link
                    href="http://binarybears.it"
                    className="underline hover:text-primary transition-colors"
                  >
                    BinaryBears
                  </Link>
                  , dove ho usato il malefico <strong>Fortran</strong>, le basi
                  di <strong>Python</strong> e <strong>Vanilla HTML</strong>.
                  Ora sto iniziando a imparare i linguaggi del web, come{" "}
                  <strong>React e Next.js</strong>.
                </p>
              </div>
            </div>

            {/* Riga 3: Vita Offline */}
            <div className="flex-1 pt-10 last:pb-0 group px-8">
              <div className="">
                <div className="flex items-center gap-4 mb-4">
                  <BookHeart className="w-8 h-8 text-foreground group-hover:text-primary group-hover:scale-110 group-active:text-primary group-active:scale-110 transition ease-out duration-300" />
                  <h3 className="text-2xl font-black text-foreground group-hover:text-primary group-active:text-primary transition ease-out duration-300">
                    Vita Offline
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Sono un lettore accanito (fan della saga di Jack Reacher),
                  parlo un inglese fluente (B2) e mi sto preparando per un esame{" "}
                  <strong>C1/C2</strong>.<br />
                  Faccio scherma e sono un educatore del gruppo preadolescenti
                  della mia comunità pastorale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <div
        className="h-16 w-full  "
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--border), var(--border) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <Separator />
      {/* --- TECH STACK --- */}
      <section id="stack" className="scroll-mt-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-5 w-full">
          {/* Colonna Testo - Ora sopra su mobile e a destra su desktop */}
          <div className="lg:col-span-2 lg:order-last space-y-6 pt-24 pb-12 lg:pb-24 px-8 lg:border-l border-border">
            <h2 className="text-4xl font-black tracking-tight leading-tight">
              Tech <span className="text-primary">Stack</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I linguaggi, gli strumenti e gli IDE che utilizzo per trasformare
              necessità in codice, con un focus su performance ed eleganza.
            </p>
          </div>

          {/* Colonna Grid delle tecnologie */}
          <div className="lg:col-span-3 lg:order-first grid grid-cols-3   border-border border-t lg:border-t-0">
            {[
              { name: "Flutter", icon: siFlutter, color: "#02569B" },
              { name: "Dart", icon: siDart, color: "#0175C2" },
              { name: "Python", icon: siPython, color: "#3776AB" },
              { name: "Vanilla HTML", icon: siHtml5, color: "#E34F26" },
              { name: "Fortran", icon: siFortran, color: "#734F96" },
              { name: "Next.js", icon: siNextdotjs, color: "#FFFFFF" },
              { name: "Tailwind", icon: siTailwindcss, color: "#06B6D4" },
              { name: "React", icon: siReact, color: "#61DAFB" },
              { name: "Supabase", icon: siSupabase, color: "#3ECF8E" },
              { name: "Firebase", icon: siFirebase, color: "#FFCA28" },
              { name: "Vercel", icon: siVercel, color: "#000000" },

              {
                name: "Android Studio",
                icon: siAndroidstudio,
                color: "#3DDC84",
              },

              { name: "Pycharm", icon: siPycharm, color: "#3DEA62" },
              { name: "Webstorm", icon: siWebstorm, color: "#07C3F2" },
              { name: "IntelliJ IDEA", icon: siIntellijidea, color: "#FF45ED" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group p-8 flex flex-col items-center justify-center gap-3 transition-all ease-out duration-300 relative overflow-hidden border-r border-b border-border [&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-0"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `radial-gradient(circle, ${tech.color}50 0%, transparent 50%)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.background = `radial-gradient(circle, ${tech.color}50 0%, transparent 50%)`;
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <SimpleIcon
                  icon={tech.icon}
                  className="w-10 h-10 transition-transform group-hover:scale-110 group-active:scale-110 text-foreground"
                />
                <span className="font-bold text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground group-active:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator />
      <div
        className="h-16 w-full  "
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--border), var(--border) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <Separator />
      {/* --- PROGETTI SECTION --- */}
      <section id="progetti" className="py-24 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black tracking-tight leading-tight mb-4">
              I miei <span className="text-primary">progetti</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Soluzioni digitali nate da necessità reali, focalizzate su
              usabilità e performance. Qui sotto trovi un paio di progetti
              recenti, ma non esitare a vederli tutti
            </p>
            <Button
              variant="default"
              size="lg"
              className="text-lg font-medium  hover:font-bold transition ease-out duration-500 mt-6 group"
              asChild
            >
              <Link href="/progetti">
                Vedi tutti i progetti{" "}
                <ChevronRight className="ml-2 w-5 h-5 -translate-x-0.5 group-hover:translate-x-0.5 transition ease-out duration-500" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1: Onboard */}
            <Card className="group relative overflow-hidden border backdrop-blur-sm transition-all hover:shadow-xl lg:col-span-2 flex flex-col">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,#2766ec33_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
              {/* Logo Silhouette to block gradient */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-5 translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0">
                <div
                  className="w-full h-full bg-card"
                  style={{
                    maskImage: "url(/Onboard.Icon.png)",
                    WebkitMaskImage: "url(/Onboard.Icon.png)",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </div>
              {/* Actual Logo */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-0 group-hover:opacity-15 transition-all duration-700 grayscale pointer-events-none z-10 translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0">
                <Image
                  src="/Onboard.Icon.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader className="relative z-20">
                <CardTitle className="text-3xl font-black mb-1">
                  Onboard
                </CardTitle>
                <CardDescription className="text-base font-bold text-foreground/80">
                  Ecosistema per il trasporto pubblico di Milano: API, App, SDK
                  e mappe in tempo reale.
                </CardDescription>
                <CardAction>
                  {/*TODO: Modifica link quando operativo*/}
                  <Button variant="ghost" asChild size="icon-sm">
                    <Link href="https://github.com/onboard-project/">
                      <SquareArrowOutUpRight />
                    </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="relative z-20 flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Progettato per rivoluzionare l&apos;esperienza del trasporto
                  pubblico a Milano, offrendo monitoraggio live, notifiche
                  programmate e informazioni sul servizio.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Dart", "Python"].map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-md font-bold text-[10px] opacity-70"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="relative z-20 flex-col">
                <Button variant="default" className="w-full mb-2" asChild>
                  <Link href="/progetti/onboard">
                    Scopri di più <GraduationCap className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full " asChild>
                  <Link href="https://github.com/onboard-project/">
                    Repository <GitHubIcon className="ml-2 w-4 h-4" />
                  </Link>
                </Button>{" "}
              </CardFooter>
            </Card>
            {/* Project 2: MyTomes */}
            <Card className="group relative overflow-hidden border backdrop-blur-sm transition-all hover:shadow-xl lg:col-span-1 flex flex-col">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,#10a79533_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
              {/* Logo Silhouette to block gradient */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-5 translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0">
                <div
                  className="w-full h-full bg-card"
                  style={{
                    maskImage: "url(/MyTomes.Icon.png)",
                    WebkitMaskImage: "url(/MyTomes.Icon.png)",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </div>
              {/* Actual Logo */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-0 group-hover:opacity-15 transition-all duration-700 grayscale pointer-events-none z-10 translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0">
                <Image
                  src="/MyTomes.Icon.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader className="relative z-20">
                <CardTitle className="text-3xl font-black mb-1">
                  MyTomes
                </CardTitle>
                <CardDescription className="text-base font-bold text-foreground/80">
                  Una app per gestire tutti i tuoi libri
                </CardDescription>
                <CardAction>
                  {/*TODO: Modifica link quando operativo*/}
                  <Button variant="ghost" asChild size="icon-sm">
                    <Link href="https://mytomes.vercel.app/">
                      <SquareArrowOutUpRight />
                    </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="relative z-20 flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Organizza e tieni traccia della tua collezione di libri
                  personale. Catalogare i tuoi libri non è mai stato così
                  facile.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Supabase"].map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-md font-bold text-[10px]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="relative z-20 flex-col">
                <Button variant="default" className="w-full mb-2" asChild>
                  <Link href="/progetti/mytomes">
                    Scopri di più <GraduationCap className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full " asChild>
                  <Link href="https://github.com/riccardodebellini/mytomes">
                    Repository <GitHubIcon className="ml-2 w-4 h-4" />
                  </Link>
                </Button>{" "}
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <Separator />
      <section
        className="py-24 text-foreground relative overflow-hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--border), var(--border) 1px, transparent 1px, transparent 12px)",
        }}
      >
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Hai un&apos;idea o una necessità?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-medium">
            Parliamone. Sono sempre alla ricerca di nuove sfide e collaborazioni
            stimolanti.
          </p>
          <div className="flex justify-center pt-4">
            <Button
              variant="default"
              size="lg"
              className="text-lg font-black shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/contatti">Contattami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
