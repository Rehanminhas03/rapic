import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 pt-16 pb-24 text-cream sm:pt-24 sm:pb-32">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(212,175,55,0.15), transparent 60%), radial-gradient(60% 60% at 0% 100%, rgba(6,95,70,0.45), transparent 60%)",
        }}
      />
      <Container className="relative">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-gold-300">
            <span className="inline-block h-px w-8 bg-gold-500/60" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  );
}
