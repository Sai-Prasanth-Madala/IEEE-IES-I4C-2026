import { useEffect, useState } from "react";
import { REGISTRATION_URL } from "../data";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#guests", label: "Guests" },
  { href: "/#speakers", label: "Speakers" },
  { href: "/#areas", label: "Areas" },
  { href: "/venue", label: "Venue & Travel" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Handle navigation for homepage sections and pages
  const handleNavigation = (href) => {
    setOpen(false);

    const [path, hash] = href.split("#");

    // Normal page navigation such as /venue
    if (!hash) {
      navigate(path);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Already on homepage
    if (location.pathname === "/") {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Coming from another page
    navigate("/");

    // Wait for homepage to render before scrolling
    setTimeout(() => {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  // Logo navigation
  const handleLogoClick = (event) => {
    event.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 150);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5"
        >
          <div className="group relative flex items-center justify-center">
            {/* IES Logo */}
            <div
              className="
                relative flex h-12 w-12 items-center justify-center
                overflow-hidden rounded-2xl
                border border-slate-200
                bg-white
                shadow-[0_4px_20px_rgba(10,30,61,0.08)]
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:shadow-[0_8px_30px_rgba(10,30,61,0.12)]
              "
            >
              <img
                src="/IES-Logo.jpg"
                alt="IES Logo"
                className="
                  h-8 w-8
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>

            {/* Subtle accent */}
            <span
              className="
                pointer-events-none absolute -right-0.5 -top-0.5
                h-2.5 w-2.5 rounded-full
                bg-teal-400
              "
            />
          </div>

          <span className="font-display font-semibold text-ink tracking-tight">
            I4C <span className="text-blue">2026</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavigation(link.href)}
              className="
                font-mono text-[13px] uppercase tracking-wide
                text-ink/70
                hover:text-blue
                transition-colors
              "
            >
              {link.label}
            </button>
          ))}

          {/* Register */}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-md bg-ink px-4 py-2
              font-mono text-[13px] uppercase tracking-wide
              text-paper
              hover:bg-blue
              transition-colors
            "
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
          >
            {open ? (
              <path
                d="M6 6 L18 18 M18 6 L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7 H20 M4 12 H20 M4 17 H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-line bg-paper px-5 py-4">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigation(link.href)}
                className="
                  text-left
                  font-mono text-sm uppercase tracking-wide
                  text-ink/80
                  transition-colors
                  hover:text-ink
                "
              >
                {link.label}
              </button>
            ))}

            {/* Register */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="
                rounded-md bg-ink px-4 py-2
                text-center
                font-mono text-sm uppercase tracking-wide
                text-paper
                hover:bg-blue
                transition-colors
              "
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
