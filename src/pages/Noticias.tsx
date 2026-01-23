import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Bell, Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Inscrições Abertas para o Retiro 2026",
    excerpt: "As inscrições para o Retiro Anual da Juventude já estão abertas! Garante a tua vaga e vive uma experiência transformadora.",
    date: "22 Jan 2026",
    category: "Anúncio",
    important: true,
  },
  {
    id: 2,
    title: "Novo Horário do Estudo Bíblico",
    excerpt: "A partir de fevereiro, o estudo bíblico semanal passa a ser às quartas-feiras às 19h30.",
    date: "20 Jan 2026",
    category: "Aviso",
    important: false,
  },
  {
    id: 3,
    title: "Campanha de Arrecadação para Ação Social",
    excerpt: "Estamos a recolher alimentos e roupas para distribuir às famílias carentes da nossa comunidade.",
    date: "18 Jan 2026",
    category: "Campanha",
    important: true,
  },
  {
    id: 4,
    title: "Resultado do Concurso de Louvor",
    excerpt: "Parabéns aos vencedores do concurso de louvor! Vejam as fotos da apresentação final.",
    date: "15 Jan 2026",
    category: "Evento",
    important: false,
  },
  {
    id: 5,
    title: "Nova Equipa de Liderança Eleita",
    excerpt: "Apresentamos a nova equipa de liderança da juventude para o biênio 2026-2027.",
    date: "10 Jan 2026",
    category: "Institucional",
    important: true,
  },
  {
    id: 6,
    title: "Culto de Ação de Graças",
    excerpt: "Agradecemos a Deus por mais um ano de bênçãos. Veja as fotos do culto especial de fim de ano.",
    date: "02 Jan 2026",
    category: "Evento",
    important: false,
  },
];

const Noticias = () => {
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
                Notícias & Avisos
              </h1>
              <p className="text-lg text-white/80">
                Fica informado sobre os comunicados oficiais, eventos e novidades da nossa juventude.
              </p>
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid gap-6">
              {news.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`bg-card rounded-2xl p-6 shadow-soft card-hover ${
                    item.important ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {item.important && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            <Bell size={12} />
                            Importante
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.excerpt}
                      </p>
                    </div>
                    <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all shrink-0">
                      Ler mais <ArrowRight size={16} />
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

export default Noticias;
