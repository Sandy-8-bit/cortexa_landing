import Image from 'next/image';

export function CortexaLogo() {
  return (
    <span className="cortexa-wordmark">
      <Image
        src="/cortexa_logo.svg"
        alt="Cortexa"
        width={376}
        height={76}
        className="cortexa-logo"
        loading="eager"
      />
    </span>
  );
}
