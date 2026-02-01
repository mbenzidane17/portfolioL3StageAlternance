"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, BookOpen, Target, Sparkles, Rocket, Briefcase } from "lucide-react"

const formations = [
  {
    degree: "Double Licence MIAGE & Économie Gestion",
    institution: "Université Paris Nanterre",
    period: "2023 - 2026",
    location: "Hauts-de-Seine (92)",
    status: "En cours",
    description: "Méthodes Informatiques Appliquées à la Gestion des Entreprises - Formation alliant informatique et gestion d'entreprise.",
    courses: [
      "Système d'information",
      "Base de données",
      "Algorithme et programmation",
      "Programmation orientée objet",
      "Programmation WEB",
      "Comptabilité",
      "Analyse financière",
      "Probabilités & Statistiques",
      "Marketing digital"
    ]
  },
  {
    degree: "Baccalauréat Général",
    institution: "Spécialités : Mathématiques, SES, SVT",
    period: "2023",
    location: "Île-de-France",
    status: "Obtenu - Mention Assez Bien",
    description: "Option Mathématiques Expert",
    courses: []
  }
]

const objectives = [
  {
    icon: Briefcase,
    title: "Stage L3",
    period: "Février 2026",
    description: "Gestion de projet IT / Développement",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30"
  },
  {
    icon: GraduationCap,
    title: "Master MIAGE",
    period: "Septembre 2026",
    description: "Alternance en entreprise",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  }
]

export function Education() {
  return (
    <section id="formation" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
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
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Parcours Académique</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Formation</span> & Objectifs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mon parcours académique et mes ambitions professionnelles
          </p>
        </motion.div>

        {/* Objectives Cards - Bento style */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${obj.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`relative bg-card border ${obj.borderColor} rounded-2xl p-8 overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full border-2 border-current rounded-full"
                  />
                </div>
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <obj.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary/60 uppercase tracking-wider">{obj.period}</span>
                      <h3 className="text-2xl font-bold text-foreground">{obj.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg">{obj.description}</p>
                  
                  {/* Status indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                    </span>
                    <span className="text-sm text-primary font-medium">Recherche active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Header stripe */}
                <div className="h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-5">
                      <motion.div 
                        className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 5 }}
                      >
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {formation.degree}
                        </h3>
                        <p className="text-primary font-medium text-lg">{formation.institution}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                      formation.status.includes("En cours") 
                        ? "bg-primary/20 text-primary border border-primary/30" 
                        : "bg-secondary text-secondary-foreground"
                    }`}>
                      {formation.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                    <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-4 h-4 text-primary" />
                      {formation.period}
                    </span>
                    <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg">
                      <MapPin className="w-4 h-4 text-primary" />
                      {formation.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6">{formation.description}</p>

                  {formation.courses.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">Matières principales</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formation.courses.map((course, i) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
