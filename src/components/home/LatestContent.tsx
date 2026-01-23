import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Heart, Lightbulb } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "O Propósito de Deus Para a Tua Vida",
    excerpt: "Descobre como Deus tem um plano específico e maravilhoso para cada um de nós...",
    category: "Devocional",
    icon: Heart,
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Vivendo a Fé no Dia a Dia",
    excerpt: "Dicas práticas para aplicar os princípios bíblicos na nossa rotina diária...",
    category: "Artigo",
    icon: BookOpen,
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Como Orar com Poder",
    excerpt: "Aprende a desenvolver uma vida de oração profunda e transformadora...",
    category: "Estudo",
    icon: Lightbulb,
    readTime: "10 min",
  },
];

export function LatestContent() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Conteúdos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Últimos Artigos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recursos para fortalecer a tua fé e crescer espiritualmente.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-soft card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <article.icon size={20} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">
                    • {article.readTime} de leitura
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <Link
                to="/conteudos"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Ler mais <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/conteudos">
            <Button size="lg">
              Ver Todos os Conteúdos
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
