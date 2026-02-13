import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ana Maria",
    role: "Membro desde 2022",
    text: "Desde que entrei na juventude, a minha vida espiritual transformou-se completamente. Encontrei uma família de fé que me apoia em todos os momentos.",
  },
  {
    name: "Pedro Lukamba",
    role: "Líder de Louvor",
    text: "Aprendi a servir a Deus com os meus talentos. A juventude deu-me a oportunidade de crescer como músico e como cristão.",
  },
  {
    name: "Graça Ndala",
    role: "Coordenadora de Estudo Bíblico",
    text: "Os estudos bíblicos mudaram a minha perspetiva sobre a vida. Encontrei propósito e direção através da Palavra de Deus.",
  },
  {
    name: "João Samuel",
    role: "Membro desde 2023",
    text: "A comunhão que vivemos aqui é genuína. Cada evento, cada culto jovem, é uma oportunidade de crescer mais perto de Deus.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testemunhos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Vidas Transformadas
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft min-h-[260px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <Quote size={48} className="text-primary/10 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Testemunho ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
