"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Database, 
  Brain, 
  Settings, 
  Globe, 
  Users,
  Network,
  GitBranch,
  Smartphone,
  FileCode,
  Server,
  Workflow
} from "lucide-react"

const skillCategories = [
  {
    title: "Langages de Programmation",
    icon: Code,
    skills: ["Python", "Java", "C", "SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Outils & Environnements",
    icon: Settings,
    skills: ["VS Code", "Android Studio", "Jupyter", "GitHub", "Jira", "Suite Office", "Suite Google", "Suite Adobe"]
  },
  {
    title: "Frameworks & Technologies",
    icon: FileCode,
    skills: ["Django", "Odoo", "React", "Next.js"]
  },
  {
    title: "Base de Données & Systèmes",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MySQL", "Modélisation BDD"]
  },
  {
    title: "IA & Data",
    icon: Brain,
    skills: ["Machine Learning", "Analyse de données", "ChatGPT", "Copilot", "Gemini", "Claude", "Mistral"]
  },
  {
    title: "Modélisation & Conception",
    icon: Workflow,
    skills: ["UML", "Diagrammes de séquence", "Diagramme de Gantt", "Diagramme de cas d'utilisation", "Diagramme de classe", "Cahier des charges"]
  },
  {
    title: "Systèmes & Réseaux",
    icon: Network,
    skills: ["Modèle OSI (7 couches)", "TCP/IP", "Couche Application", "Couche Transport", "Couche Réseau", "Couche Liaison", "Architecture réseau", "Protocoles", "Sécurité informatique"]
  },
  {
    title: "Théorie des Graphes & RO",
    icon: GitBranch,
    skills: ["Algorithmes de graphes", "Optimisation", "Programmation linéaire", "Recherche opérationnelle"]
  },
  {
    title: "Développement Mobile",
    icon: Smartphone,
    skills: ["Android Studio", "Applications mobiles", "UI/UX Mobile"]
  },
  {
    title: "Gestion de Projet",
    icon: Users,
    skills: ["Méthodologie Agile", "Scrum", "Jira", "Cahier des charges", "Comité de pilotage"]
  },
  {
    title: "Web & Digital",
    icon: Globe,
    skills: ["Marketing digital", "CRM", "Transition numérique", "SEO"]
  },
  {
    title: "DevOps & Versioning",
    icon: Server,
    skills: ["Git", "GitHub", "CI/CD", "Déploiement"]
  }
]

const softSkills = [
  "Autonomie",
  "Esprit Analytique", 
  "Curiosité",
  "Relations Interpersonnelles",
  "Sens des Responsabilités",
  "Travail en équipe",
  "Communication",
  "Adaptabilité"
]

const languages = [
  { name: "Français", level: "Natif", percentage: 100 },
  { name: "Arabe", level: "Natif", percentage: 100 },
  { name: "Anglais", level: "B2 - Business (TOEIC en préparation)", percentage: 75 },
  { name: "Espagnol", level: "C1 - Avancé", percentage: 85 }
]

export function Skills() {
  return (
    <section id="competences" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Compétences <span className="text-primary">Techniques</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de compétences acquises au cours de ma formation MIAGE et de mes expériences professionnelles
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Compétences Professionnelles
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Langues
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
