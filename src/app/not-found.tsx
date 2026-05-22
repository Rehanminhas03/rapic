import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-ink-900 text-cream">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(212,175,55,0.15), transparent 60%), radial-gradient(60% 60% at 0% 100%, rgba(6,95,70,0.45), transparent 60%)",
        }}
      />
      <Container className="relative">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold-300">
          Error · 404
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl text-balance">
          This listing doesn&apos;t exist —{" "}
          <span className="gradient-gold-text">but the right one does.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75">
          The page you were looking for has moved or never existed. Head back to
          the directory and find your next address.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            href="/properties"
            variant="gold"
            iconRight={<Icon name="arrow-right" size={16} />}
          >
            Browse properties
          </Button>
          <Button
            href="/"
            variant="ghost"
            className="text-cream hover:bg-cream/10"
          >
            Back to home
          </Button>
        </div>
      </Container>
    </section>
  );
}
