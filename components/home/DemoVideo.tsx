'use client';

import { Button, Section, SectionHeading } from '@/components/ui/Primitives';

const demoVideoUrl = 'https://www.youtube.com/embed/tRXJ3PiyShY';

export function DemoVideo() {
  return (
    <Section id="demo-video" className="py-12 md:py-16">
      <div className="mx-auto ">

        <SectionHeading
          label="PRODUCT WALKTHROUGH"
          title="See research become opportunity."
          description="A 60–90 second tour from source documents to ranked invention candidates."
        />

        {/* YouTube Video */}
        <div className="mt-6 overflow-hidden rounded-lg border border-(--line) bg-(--surface)">
          <iframe
            src={demoVideoUrl}
            title="Cortexa Product Walkthrough"
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* CTA */}
        <div className="mt-4 flex justify-end">
          <Button href="/product" variant="ghost">
            Try the interactive sample →
          </Button>
        </div>

      </div>
    </Section>
  );
}