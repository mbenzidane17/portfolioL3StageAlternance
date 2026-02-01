"use client"

import React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Linkedin, Mail, MapPin, Phone, Car, ChevronDown } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

// Floating particles component
function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Animated text with typewriter effect
function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("")
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [text])

  return (
    <span className={className}>
      {displayedText}
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  )
}

// 3D Tilt Card for profile image
function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

// Glowing orbs background
function GlowingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.50 0.22 255 / 0.20) 0%, transparent 70%)" }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.60 0.18 220 / 0.15) 0%, transparent 70%)" }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.20 240 / 0.12) 0%, transparent 70%)" }}
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

export function Hero() {
  const roles = ["Gestion de Projet", "Développement Web", "Intelligence Artificielle", "Data Analysis"]
  const [roleIndex, setRoleIndex] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [roles.length])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background */}
      <GlowingOrbs />
      <Particles />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.50 0.22 255 / 0.12) 1px, transparent 1px),
                           linear-gradient(90deg, oklch(0.50 0.22 255 / 0.12) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-primary font-medium">Disponible pour stage & alternance</span>
          </motion.div>

          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary/80 font-mono text-sm tracking-[0.3em] uppercase"
            >
              Bonjour, je suis
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-foreground">Melissa</span>
              <br />
              <span className="relative">
                <span className="text-primary">Benzidane</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-muted-foreground"
            >
              Étudiante en <span className="text-foreground font-semibold">Double Licence MIAGE & Gestion</span>
            </motion.div>
            
            {/* Animated role */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-8 overflow-hidden"
            >
              <motion.p 
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-medium text-primary"
              >
                Spécialisée en {roles[roleIndex]}
              </motion.p>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground leading-relaxed max-w-lg text-lg"
          >
            Je recherche un <span className="text-primary font-semibold">stage</span> pour ma L3 et une{" "}
            <span className="text-primary font-semibold">alternance</span> pour mon Master MIAGE. 
            Passionnée par la transformation digitale et l&apos;innovation technologique.
          </motion.p>

          {/* Info badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <MapPin className="w-4 h-4 text-primary" />
              Paris - Île de France
            </span>
            <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Car className="w-4 h-4 text-primary" />
              Permis B / Véhiculée
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="gap-2 font-semibold text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
              <a href="/cv-melissa-benzidane.pdf" download>
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent text-base px-8 py-6 border-primary/30 hover:bg-primary/10 hover:border-primary">
              <a href="https://www.linkedin.com/in/melissa-benzidane-0a8190268" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 pt-2"
          >
            <a href="mailto:melissa.benzidane@yahoo.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <div className="p-2 bg-card border border-border rounded-lg group-hover:border-primary/50 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm">melissa.benzidane@yahoo.com</span>
            </a>
            <a href="tel:0695286142" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <div className="p-2 bg-card border border-border rounded-lg group-hover:border-primary/50 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm">06 95 28 61 42</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Image with 3D effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <TiltCard>
            <div className="relative" style={{ transformStyle: "preserve-3d" }}>
              {/* Outer glow ring */}
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -inset-8 rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              
              {/* Profile image container */}
              <div 
                className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl"
                style={{ 
                  transform: "translateZ(50px)",
                  boxShadow: "0 25px 50px -12px oklch(0.50 0.22 255 / 0.40)"
                }}
              >
                <Image
                  src="/melissa.png"
                  alt="Melissa Benzidane"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Floating badges */}
                <motion.div 
                  className="absolute -top-2 -right-2 bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
                  style={{ transform: "translateZ(80px)" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-sm font-semibold text-primary">
                    L3 MIAGE
                  </span>
                </motion.div>

                <motion.div 
                  className="absolute -top-2 -left-2 bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
                  style={{ transform: "translateZ(80px)" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <span className="text-sm font-semibold text-primary">
                    L3 Gestion
                  </span>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-2 -left-2 bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
                  style={{ transform: "translateZ(80px)" }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-sm font-semibold text-primary">
                    Gestion de Projet
                  </span>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-2 -right-2 bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
                  style={{ transform: "translateZ(80px)" }}
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                >
                  <span className="text-sm font-semibold text-primary">
                    Développement
                  </span>
                </motion.div>

            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Découvrir</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
