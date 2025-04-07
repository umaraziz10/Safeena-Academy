'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    submenu: [
      { name: 'Counseling', href: '/services/counseling' },
      { name: 'Workshops', href: '/services/workshops' },
      { name: 'Group Therapy', href: '/services/group-therapy' },
    ],
  },
  { name: 'Resources', href: '/resources' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navbarRef = useRef(null);
  const linksRef = useRef<HTMLLIElement[]>([]);
  const logoRef = useRef(null);
  const hasScrolled = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)' }
      );

      gsap.fromTo(
        linksRef.current,
        { y: -0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.3,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        '.mobile-menu-item',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Add animation for container width change
  useEffect(() => {
    if (!hasScrolled.current) {
      // Jika pertama kali render, hanya tandai ref tanpa animasi
      hasScrolled.current = true;
      return;
    }
  
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        maxWidth: scrolled ? '88rem' : '80rem',
        duration: 0.0,
        ease: 'power2.inOut',
      });
    }
  }, [scrolled]);

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 px-6 md:px-12',
        scrolled ? 'bg-[rgba(156,175,136,0.2)] backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div
        ref={containerRef}
        className="mx-auto flex justify-between items-center transition-all duration-300"
      >
        <Link href="/" className="relative z-10" ref={logoRef}>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-forest-500 shadow-md">
              <Image
                src="/iconBlue.png"
                alt="Safeena Academy Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-forest-700 leading-tight">
                Safeena
              </span>
              <span className="text-xs md:text-sm text-forest-600 font-medium tracking-wider">
                ACADEMY
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                ref={(el) => {
                  if (el) linksRef.current[index] = el;
                }}
                className="relative group"
              >
                {link.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu(link.name)}
                      className="flex items-center px-3 py-2 text-forest-800 font-medium transition-colors duration-300 hover:text-emerald-500 rounded-md hover:bg-forest-50"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={cn(
                          'ml-1 transition-transform duration-200',
                          activeSubmenu === link.name ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    {activeSubmenu === link.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-20 border border-sage-100">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-forest-700 hover:bg-sage-50 hover:text-emerald-500"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-forest-800 font-medium transition-colors duration-300 hover:text-emerald-500 rounded-md hover:bg-forest-50"
                  >
                    {link.name}
                  </Link>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-full border-2 border-forest-500 text-forest-600 font-medium transition-all duration-300 hover:bg-forest-50 hover:border-forest-600">
            Login
          </button>
          <button className="px-4 py-2 rounded-full border-2 border-forest-500 text-forest-600 font-medium transition-all duration-300 hover:bg-forest-50 hover:border-forest-600">
            Get Help
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-forest-800 p-2 rounded-md hover:bg-forest-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 flex flex-col pt-20',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="container mx-auto px-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <ul className="flex flex-col space-y-4 py-8">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-menu-item">
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(link.name)}
                      className="flex items-center justify-between w-full py-2 text-xl font-medium text-forest-800 border-b border-sage-200"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={cn(
                          'transition-transform duration-200',
                          activeSubmenu === link.name ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    {activeSubmenu === link.name && (
                      <div className="mt-2 pl-4 space-y-2">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-lg text-forest-700 hover:text-emerald-500"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-xl font-medium text-forest-800 hover:text-emerald-500 border-b border-sage-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="mobile-menu-item pt-4 flex flex-col gap-3">
              <button className="w-full py-3 rounded-full border-2 border-forest-500 text-forest-600 font-medium">
                Login
              </button>
              <button className="w-full py-3 rounded-full bg-gradient-to-r from-forest-600 to-emerald-500 text-white font-medium">
                Get Help
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}