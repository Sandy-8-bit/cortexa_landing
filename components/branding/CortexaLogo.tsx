export function CortexaLogo() {
  const pixels = [2, 3, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 21, 22];
  return (
    <span className="cortexa-wordmark">
      <svg viewBox="0 0 40 40" width="32" height="32" fill="currentColor" aria-hidden="true">
        {pixels.map((i) => (
          <rect key={i} x={(i % 5) * 8} y={Math.floor(i / 5) * 8} width="6" height="6" />
        ))}
      </svg>
      <span>Cortexa</span>
    </span>
  );
}
