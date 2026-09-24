'use client';
import { useState } from 'react';
import { Button, Section, SectionHeading } from '@/components/ui/Primitives';

// Replace with the final 60–90 second Cortexa recording when available.
const demoVideoUrl = 'https://example.com/cortexa-demo.mp4';

export function DemoVideo() {
  const [unavailable, setUnavailable] = useState(false);
  return (
    <Section id="demo-video">
      <SectionHeading label="PRODUCT WALKTHROUGH" title="See research become opportunity." description="A 60–90 second tour from source documents to ranked invention candidates." />
      <video className="aspect-video w-full border border-(--line) bg-(--surface)" controls preload="none" aria-label="Cortexa demo video placeholder" aria-describedby="demo-video-note" onError={() => setUnavailable(true)}>
        <source src={demoVideoUrl} type="video/mp4" onError={() => setUnavailable(true)} />
        Your browser does not support video playback.
      </video>
      <p id="demo-video-note" role="status" className="mt-4 text-sm text-(--muted)">
        {unavailable ? 'The demo recording is not available yet. Try the interactive sample below.' : ''}
      </p>
      <Button href="/product" variant="ghost">Try the interactive sample</Button>
    </Section>
  );
}
