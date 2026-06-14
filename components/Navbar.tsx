"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface SubNavItem {
  label: string;
  href: string;
  desc?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdownItems?: SubNavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    dropdownItems: [
      { label: "All Programs", href: "/programs", desc: "Robotics, IoT, Arduino, Web & more" },
      { label: "Courses", href: "/courses", desc: "Specialized courses in IoT, Robotics, Coding & more" },
      { label: "Internship", href: "/internship", desc: "Industrial training for ITI, Diploma & B.Tech" },
      { label: "Camps", href: "/camps", desc: "Summer, Winter & weekend innovation camps" },
      { label: "Projects", href: "/projects", desc: "Student-built models and prototypes" },
    ],
  },
  {
    label: "Explore",
    dropdownItems: [
      { label: "Innovation Centre", href: "/innovation-centre", desc: "Practical workspace for research, creativity & prototyping" },
      { label: "Magazine", href: "https://vigyanbhaskar.com/", desc: "Our annual science & technology student publications" },
      { label: "Gallery", href: "/gallery", desc: "Lab moments, workshops and project photos" },
      { label: "Achievements", href: "/achievements", desc: "Awards, recognitions and media records" },
      { label: "Events / Workshops", href: "/events", desc: "Upcoming and completed learning sessions" },
      { label: "Learning Hub", href: "/docs", desc: "Explore beginner-friendly notes, project ideas & tutorials" },
      { label: "Notices & Announcements", href: "/notices", desc: "Official academic, admission & examination notices" },
    ],
  },
  { label: "Shop", href: "/shop" },
  {
    label: "For Institutions",
    dropdownItems: [
      { label: "Overview", href: "/institutions", desc: "Institutional partnerships & MOU details" },
      { label: "Lab Setup", href: "/institutions/lab-setup", desc: "End-to-end setup of STEM, Robotics & IoT labs" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const currentPath = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (menuLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenMenu(menuLabel);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, 180); // 180ms delay provides an extremely stable hover window
  };

  const handleLinkClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenMenu(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const cartData = localStorage.getItem("spark_cart");
      if (cartData) {
        try {
          const items = JSON.parse(cartData);
          const count = items.reduce((acc: number, item: any) => acc + item.quantity, 0);
          setCartCount(count);
        } catch (e) {
          setCartCount(0);
        }
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener("spark_cart_updated", updateCartCount);
    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("spark_cart_updated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const toggleMobileMenu = (label: string) => {
    setMobileOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 border-b border-white/10 bg-[#3B168F]/95 backdrop-blur-[14px]">
      <div className="container flex h-full items-center justify-between gap-4 mx-auto px-4">
        <Link href="/" className="min-w-0 flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Sparkovation Hub Logo"
            className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 select-none object-contain brightness-[1.2]"
          />
          <div className="min-w-0 leading-none">
            <strong className="font-heading text-sm font-bold text-white sm:text-base md:text-lg block whitespace-nowrap">
              Sparkovation <span className="hidden sm:inline">Hub</span>
            </strong>
            <span className="font-mono text-[8px] font-medium uppercase tracking-wider text-white/60 hidden sm:block mt-0.5 whitespace-nowrap">
              of Science & Technology Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Navbar menu with dropdown toggles */}
        <nav className="hidden items-center gap-8 font-mono text-xs font-semibold uppercase tracking-wider text-white/80 lg:flex h-full">
          {navItems.map((item) => {
            const isDropdownActive = item.dropdownItems?.some(
              (sub) => sub.href === currentPath
            );
            const isActive =
              (item.href && (
                (item.href === "/" && currentPath === "/") ||
                (item.href !== "/" && item.href === currentPath)
              )) ||
              isDropdownActive;

            if (item.dropdownItems) {
              return (
                <div
                  key={item.label}
                  className="relative flex items-center h-full cursor-pointer group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`relative flex items-center transition-colors hover:text-white py-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-200 cursor-pointer ${
                      isActive
                        ? "text-white after:w-full after:bg-violet"
                        : "text-white/80 after:w-0 after:bg-violet hover:after:w-full"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180 text-[#F6C84C]" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown Box styled in modern rounded fashion */}
                  {openMenu === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50 text-left select-none">
                      <div className="bg-[var(--color-pure-white)] border border-[var(--color-light-border)] shadow-lg rounded-md py-4 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="flex flex-col">
                          {item.dropdownItems.map((sub) => {
                            const isSubActive = currentPath === sub.href;
                            const isExternal = sub.href.startsWith("http");
                            if (isExternal) {
                              return (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={handleLinkClick}
                                  className="group/item block px-5 py-3 hover:bg-[var(--color-soft-lavender)]/20 border-b last:border-b-0 border-[var(--color-light-border)] transition-colors duration-150"
                                >
                                  <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink-black)] group-hover/item:text-[var(--color-primary-violet)]">
                                    {sub.label}
                                  </span>
                                  {sub.desc && (
                                    <span className="block font-body text-[10px] text-[var(--color-muted-gray)] mt-0.5 leading-normal normal-case tracking-normal font-normal">
                                      {sub.desc}
                                    </span>
                                  )}
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={handleLinkClick}
                                className={`group/item block px-5 py-3 hover:bg-[var(--color-soft-lavender)]/20 border-b last:border-b-0 border-[var(--color-light-border)] transition-colors duration-150 ${
                                  isSubActive ? "bg-[var(--color-soft-lavender)]/30" : ""
                                }`}
                              >
                                <span className={`block font-mono text-[11px] font-bold uppercase tracking-wider transition-colors duration-150 ${
                                  isSubActive 
                                    ? "text-[var(--color-primary-violet)]" 
                                    : "text-[var(--color-ink-black)] group-hover/item:text-[var(--color-primary-violet)]"
                                }`}>
                                  {sub.label}
                                </span>
                                {sub.desc && (
                                  <span className="block font-body text-[10px] text-[var(--color-muted-gray)] mt-0.5 leading-normal normal-case tracking-normal font-normal">
                                    {sub.desc}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "/"}
                className={`relative transition-colors hover:text-white py-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-200 ${
                  isActive
                    ? "text-white after:w-full after:bg-violet"
                    : "text-white/80 after:w-0 after:bg-violet hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/shop?cart=true"
            className="relative p-2.5 text-white/80 hover:text-white transition-colors duration-150 rounded-full hover:bg-white/10 flex items-center justify-center"
            aria-label="View Shopping Cart"
          >
            <ShoppingCart className="h-4.5 w-4.5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[8.5px] font-bold leading-none text-stone-900 bg-[#F6C84C] rounded-full border border-[#3B168F]">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/login" className="inline-flex items-center justify-center px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider rounded-full bg-[#5B21D9] hover:bg-[#4C1D95] text-white transition-all hover:-translate-y-[1px] shadow-sm select-none">
            Login
          </Link>
        </div>

        {/* Mobile Accordion Drawer */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/shop?cart=true"
            className="relative p-2 text-white/80 hover:text-white transition-colors duration-150 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center"
            aria-label="View Shopping Cart"
          >
            <ShoppingCart className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[8px] font-bold leading-none text-stone-900 bg-[#F6C84C] rounded-full border border-[#3B168F]">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-white/10 text-white rounded-md transition hover:bg-white/20"
              >
                <Menu className="h-4.5 w-4.5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-[var(--color-light-border)] bg-[var(--color-warm-off-white)] p-0 font-body"
            >
              <div className="flex h-full flex-col overflow-y-auto">
                <SheetHeader className="border-b border-[var(--color-light-border)] px-6 py-5 text-left bg-[var(--color-pure-white)] shrink-0">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.png"
                      alt="Sparkovation Hub Logo"
                      className="h-11 w-11 sm:h-14 sm:w-14 shrink-0 select-none object-contain"
                    />
                    <div className="leading-none">
                      <SheetTitle className="text-left font-heading font-bold text-base sm:text-lg text-[var(--color-ink-black)] leading-tight">
                        Sparkovation Hub
                      </SheetTitle>
                      <p className="font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[var(--color-muted-gray)] mt-1 whitespace-normal leading-normal">
                        of Science & Technology Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </SheetHeader>

                <div className="flex flex-1 flex-col px-6 pt-6 pb-20 justify-between">
                  <nav className="flex flex-col gap-3">
                    {navItems.map((item) => {
                      const isDropdownActive = item.dropdownItems?.some(
                        (sub) => sub.href === currentPath
                      );
                      const isActive =
                        (item.href && (
                          (item.href === "/" && currentPath === "/") ||
                          (item.href !== "/" && item.href === currentPath)
                        )) ||
                        isDropdownActive;

                      if (item.dropdownItems) {
                        return (
                          <div key={item.label} className="flex flex-col w-full">
                            <button
                              type="button"
                              onClick={() => toggleMobileMenu(item.label)}
                              className={`w-full flex items-center justify-between border border-[var(--color-light-border)] rounded-md px-4 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition text-left shadow-sm ${
                                isActive
                                  ? "bg-[var(--color-soft-lavender)] text-[var(--color-primary-violet)]"
                                  : "bg-[var(--color-pure-white)] text-[var(--color-charcoal)] hover:bg-[var(--color-soft-lavender)]/20"
                              }`}
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  mobileOpenMenu === item.label ? "rotate-180 text-[var(--color-primary-violet)]" : "text-[var(--color-muted-gray)]"
                                }`}
                              />
                            </button>

                            {/* Mobile Accordion dropdown cards list */}
                            {mobileOpenMenu === item.label && (
                              <div className="mt-1.5 ml-4 border-l-2 border-[var(--color-primary-violet)]/30 pl-3 flex flex-col gap-2.5 py-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                                {item.dropdownItems.map((sub) => {
                                  const isSubActive = currentPath === sub.href;
                                  const isExternal = sub.href.startsWith("http");
                                  if (isExternal) {
                                    return (
                                      <SheetClose asChild key={sub.label}>
                                        <a
                                          href={sub.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="border border-[var(--color-light-border)] rounded-md px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wider transition text-left shadow-sm bg-[var(--color-pure-white)] text-[var(--color-charcoal)] hover:bg-[var(--color-soft-lavender)]/10"
                                        >
                                          <div className="flex flex-col">
                                            <span className="font-bold text-[11px]">{sub.label}</span>
                                            {sub.desc && (
                                              <span className="font-body text-[9px] text-[var(--color-muted-gray)] font-normal normal-case tracking-normal mt-0.5 leading-tight">
                                                {sub.desc}
                                              </span>
                                            )}
                                          </div>
                                        </a>
                                      </SheetClose>
                                    );
                                  }
                                  return (
                                    <SheetClose asChild key={sub.label}>
                                      <Link
                                        href={sub.href}
                                        className={`border border-[var(--color-light-border)] rounded-md px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wider transition text-left shadow-sm ${
                                          isSubActive
                                            ? "bg-[var(--color-soft-lavender)] text-[var(--color-primary-violet)]"
                                            : "bg-[var(--color-pure-white)] text-[var(--color-charcoal)] hover:bg-[var(--color-soft-lavender)]/10"
                                        }`}
                                      >
                                        <div className="flex flex-col">
                                          <span className="font-bold text-[11px]">{sub.label}</span>
                                          {sub.desc && (
                                            <span className="font-body text-[9px] text-[var(--color-muted-gray)] font-normal normal-case tracking-normal mt-0.5 leading-tight">
                                              {sub.desc}
                                            </span>
                                          )}
                                        </div>
                                      </Link>
                                    </SheetClose>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <SheetClose asChild key={item.label}>
                          <Link
                            href={item.href || "/"}
                            className={`border border-[var(--color-light-border)] rounded-md px-4 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition text-left shadow-sm ${
                              isActive
                                ? "bg-[var(--color-soft-lavender)] text-[var(--color-primary-violet)]"
                                : "bg-[var(--color-pure-white)] text-[var(--color-charcoal)] hover:bg-[var(--color-soft-lavender)]/20"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  <div className="mt-8 border border-[var(--color-light-border)] bg-[var(--color-pure-white)] p-5 shadow-md rounded-md relative overflow-hidden">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary-violet)] mt-2">
                      STEAM Innovation
                    </p>
                    <p className="mt-3 text-xs leading-6 text-[var(--color-charcoal)] font-body">
                      Talk to our team about student batches, school partnerships, or a demo session in Madhepura.
                    </p>
                    <div className="mt-5 flex flex-col gap-2">
                      <SheetClose asChild>
                        <Link href="/contact" className="btn-lab w-full text-center block">
                          Book Free Demo
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/login" className="inline-flex items-center justify-center w-full px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider rounded-md border border-[var(--color-primary-violet)] text-[var(--color-primary-violet)] hover:bg-[var(--color-soft-lavender)]/20 transition-all text-center">
                          Portal Login
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
