import { ImageResponse } from 'next/og';
export const alt = 'Cortexa — Your research has more to say.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#050505',
        color: '#f5f5f3',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '64px 72px',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 20,
          borderBottom: '1px solid #444',
          paddingBottom: 24,
        }}
      >
        <span>Cortexa</span>
        <span style={{ fontSize: 13, color: '#aaa' }}>INVENTION DISCOVERY, EVIDENCE FIRST</span>
      </div>
      <div style={{ height: 1, background: '#145cff', marginTop: 48, opacity: 0.7 }} />
      <div style={{ fontSize: 92, lineHeight: 1.02, letterSpacing: -5, marginTop: 52 }}>
        Your research
      </div>
      <div style={{ fontSize: 92, lineHeight: 1.02, letterSpacing: -5 }}>has more to say.</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 22,
          color: '#b2b2af',
          marginTop: 38,
        }}
      >
        <span>Find the inventions hiding inside it.</span>
        <span style={{ fontSize: 16 }}>cortexa.co ↗</span>
      </div>
    </div>,
    size,
  );
}
