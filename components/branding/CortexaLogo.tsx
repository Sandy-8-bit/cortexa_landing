import Image from "next/image";

export function CortexaLogo() {
  return (
    <Image
      src="/cortexa_logo.svg"
      alt="Cortexa"
      width={90}
      height={30}
      className="h-[30px] w-auto object-contain"
      priority
    />
  );
}