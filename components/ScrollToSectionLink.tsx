"use client";

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { scrollToElement } from '@/lib/scrollUtils';

interface ScrollToSectionLinkProps {
  href: string;
  sectionId: string;
  children: ReactNode;
  className?: string;
}

const ScrollToSectionLink = ({ href, sectionId, children, className }: ScrollToSectionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If already on the homepage, just scroll
    if (pathname === '/') {
      scrollToElement(sectionId);
    } else {
      // Store section ID in sessionStorage for after navigation
      sessionStorage.setItem('scrollToSection', sectionId);
      // Navigate to homepage
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ScrollToSectionLink;
