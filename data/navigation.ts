export const navigation = [
  { href: '/product', label: 'Product' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/engines', label: 'Engines' },
  { href: '/evidence', label: 'Evidence' },
  { href: '/agencies', label: 'For agencies' },
  { href: '/pricing', label: 'Pricing' },
];
export const companyNavigation = [
  ...navigation.slice(4),
  { href: '/trust', label: 'Trust & data' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];
export const routes = ['/', ...navigation.map((item) => item.href), '/trust', '/faq', '/contact'];
