"use client"

import React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, FolderOpen, Sparkles, Code, Rocket, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// 3D Tilt effect for the card
function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

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

// Animated code snippets floating around
function FloatingCode() {
  const snippets = [
    { code: "def analyse():", x: 5, y: 15, delay: 0 },
    { code: "SELECT * FROM", x: 80, y: 20, delay: 0.5 },
    { code: "import numpy", x: 10, y: 75, delay: 1 },
    { code: "class Project:", x: 75, y: 80, delay: 1.5 },
  ]

  return (
    <>
      {snippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-primary/30 pointer-events-none"
          style={{ left: `${snippet.x}%`, top: `${snippet.y}%` }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            delay: snippet.delay,
            ease: "easeInOut"
          }}
        >
          {snippet.code}
        </motion.div>
      ))}
    </>
  )
}

export function Projects() {
  const technologies = [
    { name: "Python", color: "from-blue-500/25 to-indigo-500/25" },
    { name: "Java", color: "from-cyan-500/25 to-blue-500/25" },
    { name: "SQL", color: "from-indigo-500/25 to-violet-500/25" },
    { name: "HTML/CSS", color: "from-sky-500/25 to-cyan-500/25" },
    { name: "Django", color: "from-blue-600/25 to-blue-500/25" },
    { name: "Algorithmes", color: "from-violet-500/25 to-indigo-500/25" },
    { name: "POO", color: "from-blue-400/25 to-sky-500/25" },
  ]

  return (
    <section id="projets" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <FloatingCode />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Portfolio de Projets</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Mes <span className="text-primary">Réalisations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez les projets que j&apos;ai développés durant ma formation MIAGE,
            démontrant mes compétences techniques et ma créativité
          </p>
        </motion.div>

        {/* Featured Project Card with 3D effect */}
        <TiltCard>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-primary/50 to-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="relative bg-card border border-border rounded-3xl overflow-hidden">
              {/* Header with animated elements */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                {/* Animated circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-80 h-80 border border-primary/10 rounded-full" />
                  <div className="absolute inset-4 border border-primary/15 rounded-full" />
                  <div className="absolute inset-8 border border-primary/20 rounded-full" />
                </motion.div>
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-2xl"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <FolderOpen className="w-12 h-12 text-primary" />
                  </motion.div>
                </div>

                {/* Floating icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 left-12"
                >
                  <Zap className="w-6 h-6 text-primary/40" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-8 right-12"
                >
                  <Rocket className="w-6 h-6 text-primary/40" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-10" style={{ transform: "translateZ(20px)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Portfolio Interactif</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary/60">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Book de Projets MIAGE
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  Retrouvez l&apos;ensemble de mes projets réalisés durant ma formation MIAGE : 
                  algorithmes en Python et Java, manipulation d&apos;arbres syntaxiques, 
                  création de jeux, projets web, et bien plus encore. Chaque projet 
                  démontre mes compétences en programmation et résolution de problèmes.
                </p>

                {/* Technologies with colored gradients */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative text-sm font-medium text-foreground px-4 py-2 rounded-xl bg-gradient-to-r ${tech.color} border border-border/50 hover:border-primary/30 transition-colors`}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                <Button asChild size="lg" className="gap-3 font-semibold text-base px-10 py-7 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all group">
                  <a 
                    href="https://mbenzidane17.github.io/bookprojetMIAGE/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Explorer mes projets</span>
                    <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </TiltCard>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            { number: "10+", label: "Projets réalisés", icon: FolderOpen },
            { number: "5+", label: "Technologies maîtrisées", icon: Code },
            { number: "3", label: "Années de formation", icon: Rocket }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-center p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all">
                <stat.icon className="w-8 h-8 text-primary/60 mx-auto mb-4" />
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
                  className="text-4xl font-bold text-primary mb-2"
                >
                  {stat.number}
                </motion.p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
