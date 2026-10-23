"use client";

import { useState, useEffect } from "react";
import { Badge, Button } from "@/components/ui";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DSA", href: "#dsa" },
  { label: "Cloud Lab", href: "#cloud" },
  { label: "Build Log", href: "#build-log" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href="#" className="text-xl font-bold">
              {profile.name}
            </a>
            <Badge variant="accent" className="text-xs">
              Available for Roles
            </Badge>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            {profile.resume ? (
              <Button size="sm" asChild>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" download>
                  Download Resume
                </a>
              </Button>
            ) : (
              <Button size="sm" disabled>
                Download Resume
              </Button>
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card border-b border-border"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {profile.resume ? (
              <Button size="sm" className="w-full" asChild>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download Resume
                </a>
              </Button>
            ) : (
              <Button size="sm" className="w-full" disabled>
                Download Resume
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
