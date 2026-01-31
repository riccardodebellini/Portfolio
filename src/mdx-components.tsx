import type { MDXComponents } from "mdx/types";
import { Separator } from "@/components/ui/separator";
import { JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="leading-7">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="ml-6 list-disc">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="ml-6 list-decimal">
        {children}
      </ol>
    ),
    hr: () => <Separator className="my-8" />,
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-primary underline underline-offset-4"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    pre: ({ children }) => (
      <pre className="not-prose p-6 overflow-x-auto rounded-lg border  bg-muted py-4 font-mono text-sm">
        {children}
      </pre>
    ),
    code: ({ children, className }) => {
      const isLanguageClass = className?.startsWith("language-");
      if (isLanguageClass) {
        return (
          <code
            className={`${className} ${jetbrains_mono.className} font-mono text-sm font-semibold before:content-none after:content-none`}
          >
            {children}
          </code>
        );
      }
      return (
        <code
          className={`rounded bg-muted px-[0.2rem] py-[0.1rem] ${jetbrains_mono.className}  font-mono font-semibold before:content-none after:content-none`}
        >
          {children}
        </code>
      );
    },
    ...components,
  };
}
