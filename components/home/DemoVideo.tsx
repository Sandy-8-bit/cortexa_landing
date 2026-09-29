'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { Button, Section, SectionHeading } from '@/components/ui/Primitives';
import { DrawingSheet } from '@/components/visuals/DrawingSheet';

export function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <Section id="demo-video">
      <SectionHeading
        label="Product walkthrough"
        title="See research become opportunity."
        description="A tour from source documents to ranked invention candidates."
      />
      <div className="video-sheet">
        {playing ? (
          <iframe
            src="https://www.youtube.com/embed/tRXJ3PiyShY?autoplay=1"
            title="Cortexa Product Walkthrough"
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            className="video-preview"
            onClick={() => setPlaying(true)}
            aria-label="Play Cortexa product walkthrough"
          >
            <DrawingSheet kind="blueprint" />
            <span className="video-play">
              <Play size={18} fill="currentColor" aria-hidden="true" /> Watch the walkthrough
            </span>
          </button>
        )}
      </div>
      <div className="actions">
        <Button href="/product" variant="ghost">
          Try the interactive sample
        </Button>
      </div>
    </Section>
  );
}
