"use client";

import * as React from "react";
import {
  ArrowLeft,
  Github as GitHubIcon,
  Globe,
  GraduationCap,
  Instagram,
  Mail,
  SquareArrowOutUpRight,
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
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      {/* --- HERO SECTION --- */}
      <section className="w-full max-w-2xl px-4 pt-20 pb-12 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary/20 p-1">
          <Image
            src="/avatar.png"
            alt="Riccardo"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <h1 className="text-4xl font-black tracking-tight mb-2 uppercase">
          Riccardo <span className="text-primary">Debellini</span>
        </h1>
        <p className="text-xl text-muted-foreground font-medium mb-8">
          Trasformo idee e necessità in soluzioni digitali
        </p>

        <div className="flex flex-col w-full gap-4">
          <Button
            variant="default"
            size="lg"
            className="w-full h-14 text-lg font-bold transition-all hover:-translate-y-1"
            asChild
          >
            <Link href="/">
              <Globe className="mr-2 w-5 h-5" /> Sito Web Personale
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full h-14 text-lg font-bold transition-all hover:-translate-y-1"
            asChild
          >
            <Link
              href="https://instagram.com/riccardodebellini"
              target="_blank"
            >
              <Instagram className="mr-2 w-5 h-5" /> Instagram
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full h-14 text-lg font-bold transition-all hover:-translate-y-1"
            asChild
          >
            <Link href="https://github.com/riccardodebellini">
              <GitHubIcon className="mr-2 w-5 h-5" /> GitHub
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full h-14 text-lg font-bold transition-all hover:-translate-y-1"
            asChild
          >
            <Link href="/contatti">
              <Mail className="mr-2 w-5 h-5" /> Contattami
            </Link>
          </Button>
        </div>
      </section>

      <div className="w-full x">
        <Separator />
        <div
          className="h-8 w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--border), var(--border) 1px, transparent 1px, transparent 12px)",
          }}
        />
        <Separator />
      </div>

      {/* --- PROGETTI SECTION --- */}
      <section className="w-full max-w-2xl px-4 py-12">
        <h2 className="text-2xl font-black tracking-tight mb-8 uppercase text-center">
          Progetti <span className="text-primary">In Evidenza</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Project 1: Onboard */}
          <Card className="group relative overflow-hidden border backdrop-blur-sm transition-all hover:shadow-xl flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,#2766ec33_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
            <CardHeader className="relative z-20">
              <CardTitle className="text-2xl font-black mb-1">
                Onboard
              </CardTitle>
              <CardDescription className="text-sm font-bold text-foreground/80">
                Ecosistema per il trasporto pubblico di Milano.
              </CardDescription>
              <CardAction>
                <Button variant="ghost" asChild size="icon-sm">
                  <Link href="https://github.com/onboard-project/">
                    <SquareArrowOutUpRight />
                  </Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="relative z-20 flex-grow">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Monitoraggio live, notifiche programmate e informazioni sul
                servizio ATM.
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
                <Link href="https://github.com/onboard-project">
                  Repository <GitHubIcon className="ml-2 w-4 h-4" />
                </Link>
              </Button>{" "}
            </CardFooter>
          </Card>

          {/* Project 2: MyTomes */}
          <Card className="group relative overflow-hidden border backdrop-blur-sm transition-all hover:shadow-xl flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,#10a79533_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
            <CardHeader className="relative z-20">
              <CardTitle className="text-2xl font-black mb-1">
                MyTomes
              </CardTitle>
              <CardDescription className="text-sm font-bold text-foreground/80">
                Gestione della tua collezione di libri.
              </CardDescription>
              <CardAction>
                <Button variant="ghost" asChild size="icon-sm">
                  <Link href="https://mytomes.vercel.app/">
                    <SquareArrowOutUpRight />
                  </Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="relative z-20 flex-grow">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Organizza e tieni traccia della tua libreria personale in modo
                semplice.
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
      </section>

      <footer className="w-full max-w-2xl px-4 py-12 text-center">
        <Button variant="ghost" asChild className="group">
          <Link href="/">
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />{" "}
            Torna alla Home
          </Link>
        </Button>
      </footer>
    </div>
  );
}
