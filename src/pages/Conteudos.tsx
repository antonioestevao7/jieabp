import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Lightbulb, MessageCircle, ArrowRight } from "lucide-react";

const categories = [
  { id: "all", name: "Todos", count: 12 },
  { id: "devotional", name: "Devocionais", count: 5 },
  { id: "articles", name: "Artigos", count: 4 },
  { id: "studies", name: "Estudos Bíblicos", count: 3 },
];

const contents = [
  {
    id: 1,
    title: "O Propósito de Deus Para a Tua Vida",
    excerpt: "Descobre como Deus tem um plano específico e maravilhoso para cada um de nós. Neste devocional, exploramos passagens bíblicas que revelam o amor de Deus...",
    category: "Devocional",
    icon: Heart,
    readTime: "5 min",
    date: "22 Jan 2026",
  },
  {
    id: 2,
    title: "Vivendo a Fé no Dia a Dia",
    excerpt: "Dicas práticas para aplicar os princípios bíblicos na nossa rotina diária. Como ser luz em todas as áreas da nossa vida...",
    category: "Artigo",
    icon: BookOpen,
    readTime: "7 min",
    date: "20 Jan 2026",
  },
  {
    id: 3,
    title: "Como Orar com Poder",
    excerpt: "Aprende a desenvolver uma vida de oração profunda e transformadora. Descobre os segredos de uma comunicação eficaz com Deus...",
    category: "Estudo",
    icon: Lightbulb,
    readTime: "10 min",
    date: "18 Jan 2026",
  },
  {
    id: 4,
    title: "A Importância da Comunhão",
    excerpt: "Por que é fundamental estar em comunidade com outros crentes? Exploramos o modelo bíblico de igreja e relacionamentos...",
    category: "Artigo",
    icon: MessageCircle,
    readTime: "6 min",
    date: "15 Jan 2026",
  },
  {
    id: 5,
    title: "Vencendo as Tentações",
    excerpt: "Estratégias bíblicas para resistir às tentações e viver uma vida de santidade. Jesus nos deu o exemplo perfeito...",
    category: "Devocional",
    icon: Heart,
    readTime: "8 min",
    date: "12 Jan 2026",
  },
  {
    id: 6,
    title: "O Fruto do Espírito Santo",
    excerpt: "Um estudo profundo sobre Gálatas 5:22-23 e como manifestar o fruto do Espírito na nossa vida diária...",
    category: "Estudo",
    icon: Lightbulb,
    readTime: "15 min",
    date: "10 Jan 2026",
  },
];

const Conteudos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Conteúdos
              </h1>
              <p className="text-lg text-white/80">
                Artigos, devocionais e estudos bíblicos para edificar a tua fé e fortalecer o teu caminhar com Deus.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-secondary sticky top-16 z-30">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat.id === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-primary/10"
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contents.map((content, index) => (
                <motion.article
                  key={content.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl p-6 shadow-soft card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <content.icon size={20} className="text-primary" />
                      </div>
                      <span className="text-xs font-medium text-primary">
                        {content.category}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {content.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {content.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {content.readTime} de leitura
                    </span>
                    <button className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                      Ler mais <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Conteudos;
