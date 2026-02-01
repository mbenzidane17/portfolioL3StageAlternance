"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expériences" },
  { href: "#projets", label: "Projets" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/5" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="relative font-bold text-2xl group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-foreground">M</span>
            <span className="text-primary">B</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-2 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
              <a href="https://www.linkedin.com/in/melissa-benzidane-0a8190268" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="sm" className="rounded-full gap-2 shadow-lg shadow-primary/20">
              <a href="/cv-melissa-benzidane.pdf" download>
                <Download className="w-4 h-4" />
                CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 mt-8 w-full max-w-xs"
              >
                <Button asChild size="lg" className="w-full gap-2 rounded-full">
                  <a href="/cv-melissa-benzidane.pdf" download>
                    <Download className="w-5 h-5" />
                    Télécharger mon CV
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full gap-2 bg-transparent rounded-full">
                  <a href="https://www.linkedin.com/in/melissa-benzidane-0a8190268" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
