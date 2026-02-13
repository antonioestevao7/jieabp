import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como posso me tornar membro da juventude?",
    answer: "Basta participar dos nossos cultos e eventos regulares. Após um período de integração, poderás formalizar a tua adesão através do formulário de registo ou falando com um dos nossos líderes.",
  },
  {
    question: "Qual é a faixa etária da juventude?",
    answer: "A nossa juventude acolhe jovens entre os 14 e os 35 anos. Temos atividades específicas para diferentes faixas etárias, incluindo adolescentes e jovens adultos.",
  },
  {
    question: "Quando acontecem os cultos jovens?",
    answer: "Os cultos jovens acontecem aos sábados às 14h e aos domingos após o culto principal. Consulta a nossa página de eventos para datas específicas.",
  },
  {
    question: "Como posso fazer um pedido de oração?",
    answer: "Podes enviar o teu pedido de oração através da nossa página de contacto, escolhendo a opção 'Pedido de Oração'. Todos os pedidos são tratados com total confidencialidade pela equipa de intercessão.",
  },
  {
    question: "Posso participar mesmo sem ser da igreja?",
    answer: "Claro! Todos são bem-vindos aos nossos eventos e atividades. A juventude da JIEA é um espaço aberto para todos que desejam crescer na fé.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontra respostas às perguntas mais comuns sobre a nossa juventude.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-card rounded-xl p-5 flex items-center justify-between text-left shadow-soft hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown size={20} className="text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
