import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

export function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Faz Parte Desta Família
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Estamos aqui para te receber de braços abertos. 
            Junta-te a nós e descobre o propósito que Deus tem para a tua vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <MessageCircle size={20} />
                Enviar Pedido de Oração
              </Button>
            </Link>
            <Link to="/quem-somos">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                <Users size={20} />
                Conhecer a Liderança
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
