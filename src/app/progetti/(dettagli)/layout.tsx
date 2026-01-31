export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-stone dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  );
}
