"use client";

/**
 * Site header / navigation.
 * Source: §5.7 + §13.3
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

// const navLinks = [
//   { label: 'Home', href: '#hero' },
//   { label: 'About', href: '#features' },
//   { label: 'Pricing', href: '#pricing' },
// ];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "site-header fixed top-0 left-0 right-0 z-50 py-8 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled &&
          "border-b border-[#121418] bg-[#050607] shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
      )}
    >
      <div className="site-header-container container-default mx-auto flex items-center justify-between px-6">
        <Link
          href="/"
          aria-label="factoryspace.ai home"
          className="site-header-logo shrink-0 flex items-center"
        >
          <span className="text-white font-semibold text-xl tracking-tight">
            factoryspace.ai
          </span>
        </Link>

        {/* <nav className="site-header-nav hidden lg:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="site-header-nav-link text-[18px] text-white transition-colors duration-300 hover:text-[#b6bcc9]"
            >
              {link.label}
            </Link>
          ))}
        </nav> */}

        <div className="site-header-cta hidden lg:block">
          <PrimaryButton
            identity="site-header-cta-button"
            label="Reserve now"
            href="#pricing"
          />
        </div>

        {/* <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            "site-header-menu-button flex lg:hidden h-11 w-11 items-center justify-center rounded-full border border-[#3b3e45] bg-[#121418]",
            "transition-all duration-300 hover:scale-[0.94] hover:bg-[#090a0c]",
            menuOpen && "bg-[#2388ff] border-[#2388ff]",
          )}
        >
          {menuOpen ? (
            <X
              className="site-header-menu-icon h-5 w-5 text-white"
              aria-hidden
            />
          ) : (
            <Menu
              className="site-header-menu-icon h-5 w-5 text-white"
              aria-hidden
            />
          )}
        </button> */}
      </div>

      {menuOpen && (
        <div className="site-header-mobile-panel lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-[16px] border border-[#3b3e45] bg-[#050607] shadow-[0_2px_8px_#19213d1a] p-6">
          <nav
            className="site-header-mobile-nav flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            <div className="site-header-mobile-cta pt-2 max-[479px]:block hidden">
              <PrimaryButton
                identity="site-header-mobile-cta-button"
                label="Reserve now"
                href="#pricing"
                className="w-full justify-center"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
