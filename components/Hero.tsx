type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
};

export default function Hero({
  eyebrow = 'Build what matters',
  title = 'Turn ambitious ideas into meaningful products.',
  description = 'Cortexa helps teams move from strategy to execution with clarity, speed, and confidence.',
  primaryAction = { label: 'Get started', href: '#get-started' },
  secondaryAction = { label: 'Learn more', href: '#about' },
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
          {eyebrow}
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex min-w-36 items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-300"
            href={primaryAction.href}
          >
            {primaryAction.label}
          </a>
          <a
            className="inline-flex min-w-36 items-center justify-center rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            href={secondaryAction.href}
          >
            {secondaryAction.label}
          </a>
        </div>
      </div>
    </section>
  );
}
