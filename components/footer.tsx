"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, MapPin, Heart, Download, ArrowUpRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "melissa.benzidane@yahoo.com",
      href: "mailto:melissa.benzidane@yahoo.com",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "06 95 28 61 42",
      href: "tel:0695286142",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Melissa Benzidane",
      href: "https://www.linkedin.com/in/melissa-benzidane-0a8190268",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Paris - Île de France",
      href: null,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <footer id="contact" className="relative pt-24 pb-8 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Top decoration line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
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
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Disponible immédiatement</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Travaillons <span className="text-primary">Ensemble</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Je suis à la recherche d&apos;un <span className="text-primary font-semibold">stage</span> pour ma L3 et d&apos;une <span className="text-primary font-semibold">alternance</span> pour mon Master MIAGE. 
            N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {contactLinks.map((contact, index) => {
            const CardWrapper = contact.href ? 'a' : 'div'
            const cardProps = contact.href ? {
              href: contact.href,
              target: contact.href.startsWith('http') ? '_blank' : undefined,
              rel: contact.href.startsWith('http') ? 'noopener noreferrer' : undefined,
            } : {}

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardWrapper
                  {...cardProps}
                  className={`flex flex-col items-center gap-4 p-6 bg-card border border-border rounded-2xl transition-all duration-300 group ${contact.href ? 'hover:border-primary/50 cursor-pointer' : ''}`}
                >
                  <div className={`relative p-4 rounded-xl bg-gradient-to-br ${contact.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <contact.icon className="w-6 h-6 text-white" />
                    {contact.href && (
                      <ArrowUpRight className="absolute -top-1 -right-1 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground mb-1">{contact.label}</p>
                    <p className="text-xs text-muted-foreground">{contact.value}</p>
                  </div>
                </CardWrapper>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl" />
          
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prêt à démarrer une collaboration ?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Je suis motivée et impatiente de contribuer à vos projets. Contactez-moi pour discuter de vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2 w-full sm:w-auto px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                <a href="mailto:melissa.benzidane@yahoo.com">
                  <Mail className="w-5 h-5" />
                  Me contacter
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto bg-transparent px-8 py-6 text-base">
                <a href="/cv-melissa-benzidane.pdf" download>
                  <Download className="w-5 h-5" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Melissa Benzidane 
            <span className="text-border">•</span>
            Fait avec <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> 
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
