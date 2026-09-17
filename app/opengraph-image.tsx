import { ImageResponse } from 'next/og';
export const alt = 'Cortexa — Your research has more to say.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#07090b',
        color: '#eef2f4',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ color: '#4fe3c1', fontSize: 30, marginBottom: 50 }}>cortexa.</div>
      <div style={{ fontSize: 78, lineHeight: 1.1, letterSpacing: -4 }}>Your research has more</div>
      <div style={{ fontSize: 78, lineHeight: 1.1, letterSpacing: -4, color: '#4fe3c1' }}>
        to say.
      </div>
      <div style={{ fontSize: 25, color: '#9aa6ad', marginTop: 32 }}>
        Find the inventions hiding inside it.
      </div>
    </div>,
    size,
  );
}
