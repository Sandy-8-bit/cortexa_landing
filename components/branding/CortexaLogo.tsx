export function CortexaLogo() {
  return (
    <span className="brand">
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" aria-hidden="true">
        <path d="M23 5 9 5 2 16l7 11h14l7-11L23 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="m23 5-7 11 7 11M9 5l7 11-7 11M2 16h28" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
      <span>
        cortexa<span className="brand-period">.</span>
      </span>
    </span>
  );
}
