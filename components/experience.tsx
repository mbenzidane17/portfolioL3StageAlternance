"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react"

const experiences = [
  {
    title: "Assistance Gestion de projet informatique (CRM)",
    company: "TDS - ESN",
    type: "Stage",
    period: "Juillet 2025 - Septembre 2025",
    location: "France",
    description: "Aide à la rédaction de cahiers des charges, suivi d'avancement du projet, participation au comité de pilotage, tests et validation.",
    skills: ["Gestion de projet", "CRM", "Cahier des charges", "Tests"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Chargée du Suivi Administratif des soins",
    company: "Vivradom SARL",
    type: "CDI",
    period: "Juin 2024 - Actuel",
    location: "Lausanne",
    description: "Pilotage du suivi administratif et optimisation des outils numériques utilisés pour les soins à domicile.",
    skills: ["Administration", "Outils numériques", "Organisation"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Assistante en Administration Numérique",
    company: "Fedele Service",
    type: "CDD",
    period: "Mai 2024 - Juillet 2025",
    location: "Lausanne",
    description: "Participation à la transition numérique de l'entreprise : contribution à la conception d'une application interne pour la gestion documentaire et la digitalisation des factures et plannings salariés.",
    skills: ["Transition numérique", "Conception d'application", "Digitalisation"],
    color: "from-indigo-500 to-violet-500"
  },
  {
    title: "Cours particuliers de Mathématiques",
    company: "Indépendant",
    type: "CDD",
    period: "Septembre 2024 - Avril 2025",
    location: "France",
    description: "Suivi régulier des progrès réalisés par des lycéens et réajustement des méthodes pédagogiques si nécessaire.",
    skills: ["Pédagogie", "Mathématiques", "Suivi personnalisé"],
    color: "from-sky-500 to-cyan-500"
  },
  {
    title: "Assistante Administrative",
    company: "Université Sorbonne Paris Nord",
    type: "Vacataire",
    period: "Août 2023 - Août 2025",
    location: "Villetaneuse",
    description: "Gestion des inscriptions : vérification des pièces, envoi et impression des cartes étudiantes et certificats de scolarité.",
    skills: ["Administration", "Gestion documentaire", "Relation étudiant"],
    color: "from-blue-500 to-sky-500"
  },
  {
    title: "Animatrice en Centre de Loisirs",
    company: "École Mortefontaine",
    type: "CDD",
    period: "Juillet 2023 - Février 2024",
    location: "Deuil-la-Barre",
    description: "Animation et encadrement d'enfants de 3 à 8 ans. Organisation d'activités ludiques et éducatives, gestion de groupe, développement de la créativité et de l'autonomie des enfants.",
    skills: ["Animation", "Pédagogie", "Gestion de groupe", "Créativité"],
    color: "from-violet-500 to-purple-500"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50 pointer-events-none" />
      
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
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Parcours Professionnel</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Expériences <span className="text-primary">Professionnelles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un parcours diversifié entre gestion de projet IT, administration numérique et accompagnement pédagogique
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-primary lg:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative pl-20 lg:pl-0 pb-16 last:pb-0 ${
                index % 2 === 0 ? "lg:pr-[calc(50%+3rem)] lg:text-right" : "lg:pl-[calc(50%+3rem)]"
              }`}
            >
              {/* Timeline dot with gradient */}
              <motion.div 
                className={`absolute left-6 lg:left-1/2 top-0 w-5 h-5 rounded-full lg:-translate-x-1/2 z-10 bg-gradient-to-br ${exp.color}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: index * 0.1 }}
              >
                <div className="absolute inset-1 bg-background rounded-full" />
                <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${exp.color}`} />
              </motion.div>
              
              {/* Card */}
              <motion.div 
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                  {/* Top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                  
                  <div className="p-6">
                    <div className={`flex flex-wrap items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <span className={`text-xs font-semibold bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <span className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-lg">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-lg">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
