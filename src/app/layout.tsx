import type { Metadata } from "next";
import { JetBrains_Mono, Onest } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Item, ItemHeader, ItemMedia } from "@/components/ui/item";
import { CustomSidebarTrigger } from "@/components/sidebar-trigger";
import { siGithub } from "simple-icons/icons";
import { Separator } from "@/components/ui/separator";
import { Analytics } from "@vercel/analytics/react";

interface SimpleIconProps {
  icon: {
    title: string;
    path: string;
  };
  className?: string;
}

const SimpleIcon: React.FC<SimpleIconProps> = ({ icon, className }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riccardo Debellini | Portfolio",
  description: "Il portfolio di Riccardo Debellini",
  authors: [{ name: "Riccardo Debellini" }, { name: "Riccardo Debellini", url: "https://riccardo.is-a.dev" }],
  keywords: ["portfolio", "Riccardo Debellini", "developer", "react", "next.js", "typescript", "web development"],
  openGraph: {
    title: "Riccardo Debellini | Portfolio",
    description: "Il portfolio di Riccardo Debellini",
    url: "https://riccardo.is-a.dev",
    siteName: "Riccardo Debellini Portfolio",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riccardo Debellini | Portfolio",
    description: "Il portfolio di Riccardo Debellini",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${onest.className} ${jetbrains_mono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <SidebarInset>
              <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-4">
                  <div className="flex justify-between items-center h-16">
                    <div className="flex-1 flex justify-start">
                      <Item>
                        <ItemHeader>
                          <ItemMedia>
                            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                              <Image
                                src="/avatar.png"
                                alt={"Avatar"}
                                width="100"
                                height="100"
                                className="rounded-lg"
                              />
                            </div>
                          </ItemMedia>
                          <Link href="/">
                            <code
                              className={`bg-muted relative  rounded px-[0.3rem] py-[0.2rem] ${jetbrains_mono.className} text-sm font-black`}
                            >
                              Riccardo Debellini
                            </code>
                          </Link>
                        </ItemHeader>
                      </Item>
                    </div>

                    <div className="flex-none hidden md:block">
                      <nav className="flex items-center gap-1">
                        <Button variant="ghost" asChild>
                          <Link href="/">Home</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                          <Link href="/progetti">Progetti</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                          <Link href="/contatti">Contatti</Link>
                        </Button>
                      </nav>
                    </div>
                    <div className="flex-none md:flex-1 flex justify-end items-center">
                      <div className="hidden md:block">
                        <ThemeToggle />
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="hidden md:inline-flex"
                      >
                        <Link href="https://github.com/riccardodebellini">
                          GitHub
                          <SimpleIcon icon={siGithub} className="size-4 ml-2" />
                        </Link>
                      </Button>
                      <CustomSidebarTrigger />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 px-8 md:px-16 lg:px-32">
                <Separator orientation="vertical" className="hidden sm:block" />
                <div className="flex-1">{children}</div>
                <Separator orientation="vertical" className="hidden sm:block" />
              </div>
              <footer className="bg-background border-t py-8">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                  <p>
                    &copy; {new Date().getFullYear()} Riccardo Debellini. All
                    rights reserved.
                  </p>
                  <div className="mt-2 flex justify-center gap-4">
                    <Link
                      href="https://github.com/riccardodebellini"
                      className="hover:underline"
                    >
                      GitHub Profile
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </footer>
              <Sidebar side="right" className="md:hidden">
                <SidebarHeader>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <Item className="w-fit">
                        <ItemHeader>
                          <ItemMedia>
                            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                              <Image
                                src="/avatar.png"
                                alt={"Avatar"}
                                width="100"
                                height="100"
                                className="rounded-lg"
                              />
                            </div>
                          </ItemMedia>
                          <Link href="/">
                            <code
                              className={`bg-muted relative  rounded px-[0.3rem] py-[0.2rem] ${jetbrains_mono.className} text-sm font-black`}
                            >
                              Riccardo Debellini
                            </code>
                          </Link>
                        </ItemHeader>
                      </Item>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link href="/" className="font-medium">
                              Home
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <a href="/progetti" className="font-medium">
                              Progetti
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <a href="/contatti" className="font-medium">
                              Contatti
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                  <SidebarMenuItem className="flex items-center gap-2 px-2 py-1.5">
                    <ThemeToggle />
                    <span className="text-sm font-medium">Cambia tema</span>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg" asChild>
                      <a href="https://github.com/riccardodebellini">
                        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                          <SimpleIcon icon={siGithub} className="size-4" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-medium">Github</span>
                          <span className="truncate text-xs">
                            /riccardodebellini
                          </span>
                        </div>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarFooter>
              </Sidebar>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
