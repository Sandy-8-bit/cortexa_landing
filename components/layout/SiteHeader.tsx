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
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <Link
          className="header-brand"
          href="/"
          aria-label="Cortexa home"
          onClick={() => setOpen(false)}
        >
          <CortexaLogo />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-cluster">{links(0, 3)}</div>
          <div className="nav-cluster">
            {links(3, 6)}
            <Link className="nav-cta" href="/contact">
              Start with Cortexa
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </nav>
        <button
          ref={toggle}
          className="menu-toggle"
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
        className={`mobile-nav ${open ? 'is-open' : ''}`}
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
