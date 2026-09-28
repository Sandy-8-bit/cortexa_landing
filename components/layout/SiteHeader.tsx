'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigation, companyNavigation } from '@/data/navigation';
import { CortexaLogo } from '@/components/branding/CortexaLogo';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => header.current?.classList.toggle('is-scrolled', window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', keydown);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);
  const links = (start: number, end: number) =>
    navigation.slice(start, end).map((item) => (
      <Link
        key={item.href}
        href={item.href}
        aria-current={pathname === item.href ? 'page' : undefined}
      >
        {item.label}
      </Link>
    ));
  return (
    <header
      className="site-header sticky top-0 z-[40] [border-bottom:1px_solid_var(--line)]"
      ref={header}
    >
      <div className="page-container header-inner w-auto px-[var(--cx-page-padding)] mx-auto relative h-[72px] flex items-center justify-between">
        <Link
          className="header-brand absolute left-[50%] top-[50%] z-[1]"
          href="/"
          aria-label="Cortexa home"
          onClick={() => setOpen(false)}
        >
          <CortexaLogo />
        </Link>
        <nav
          className="desktop-nav flex justify-between w-full items-center"
          aria-label="Main navigation"
        >
          <div className="nav-cluster flex items-center gap-[clamp(18px,_2vw,_32px)]">
            {links(0, 4)}
          </div>
          <div className="nav-cluster flex items-center gap-[clamp(18px,_2vw,_32px)]">
            {links(5, 6)}
            <Link href="/trust" aria-current={pathname === '/trust' ? 'page' : undefined}>
              Trust
            </Link>
            <Link
              className="nav-cta ml-[8px] pl-[22px] [border-left:1px_solid_var(--line)]"
              href="/contact"
            >
              Run a corpus
            </Link>
          </div>
        </nav>
        <button
          ref={toggle}
          className="menu-toggle hidden items-center gap-[12px] min-h-[44px] [border:0] [background:none] text-(--ink) text-[11px]"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'CLOSE' : 'MENU'}
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`mobile-nav hidden ${open ? 'is-open' : ''}`}
        inert={!open}
      >
        {[...navigation, ...companyNavigation.slice(2)].map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            <span className="menu-number">{String(i + 1).padStart(2, '0')}</span>
            {item.label}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
