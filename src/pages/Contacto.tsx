import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Heart, Calendar, MessageCircle, CheckCircle2 } from "lucide-react";

const Contacto = () => {
  const { toast } = useToast();
  const [formType, setFormType] = useState<"contact" | "prayer" | "event">("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1200));

    const messages: Record<string, string> = {
      prayer: "🙏 O teu pedido de oração foi recebido. A nossa equipa de intercessão estará a orar por ti!",
      contact: "✉️ Mensagem enviada com sucesso! Responderemos em breve.",
      event: "🎉 Inscrição realizada com sucesso! Até breve no evento!",
    };

    setSuccessMessage(messages[formType]);
    setShowSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => setShowSuccess(false), 8000);

    toast({
      title: "Enviado com Sucesso!",
      description: formType === "prayer"
        ? "O teu pedido de oração foi recebido."
        : "Obrigado pelo teu contacto.",
    });

    (e.target as HTMLFormElement).reset();
  };

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
                Contacto
              </h1>
              <p className="text-lg text-white/80">
                Estamos aqui para te ouvir. Envia-nos uma mensagem, 
                um pedido de oração ou inscreve-te num evento.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Endereço</h3>
                      <p className="text-muted-foreground text-sm">
                        Igreja Evangélica de Angola<br />
                        Paróquia de Boa Esperança<br />
                        Luanda, Angola
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefone</h3>
                      <p className="text-muted-foreground text-sm">
                        +244 923 000 000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        juventude@iea-boaesperanca.org
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <h3 className="font-semibold text-foreground mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    O secretariado funciona durante os cultos e eventos.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Domingos:</strong> 08h - 13h<br />
                    <strong>Quartas:</strong> 18h - 21h<br />
                    <strong>Sábados:</strong> 14h - 18h
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                {/* Form Type Selector */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <button
                    onClick={() => setFormType("contact")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                      formType === "contact"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <MessageCircle size={18} />
                    Mensagem
                  </button>
                  <button
                    onClick={() => setFormType("prayer")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                      formType === "prayer"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Heart size={18} />
                    Pedido de Oração
                  </button>
                  <button
                    onClick={() => setFormType("event")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                      formType === "event"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Calendar size={18} />
                    Inscrição em Evento
                  </button>
                </div>

                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft relative overflow-hidden">
                  {/* Success overlay */}
                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-card z-20 flex flex-col items-center justify-center p-8 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle2 size={64} className="text-primary mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">Enviado!</h3>
                        <p className="text-muted-foreground max-w-sm">{successMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <h3 className="text-xl font-bold text-foreground mb-6">
                    {formType === "contact" && "Enviar Mensagem"}
                    {formType === "prayer" && "Pedido de Oração"}
                    {formType === "event" && "Inscrição em Evento"}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input 
                          id="name" 
                          placeholder="O teu nome" 
                          required 
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="email@exemplo.com" 
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+244 9XX XXX XXX"
                          className="h-12"
                        />
                      </div>
                      {formType === "event" && (
                        <div className="space-y-2">
                          <Label htmlFor="event">Evento *</Label>
                          <select
                            id="event"
                            required
                            className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground"
                          >
                            <option value="">Selecionar evento</option>
                            <option value="retiro">Retiro Anual 2026</option>
                            <option value="workshop">Workshop de Liderança</option>
                            <option value="culto">Culto Jovem</option>
                          </select>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        {formType === "prayer" ? "Motivo do Pedido *" : "Assunto *"}
                      </Label>
                      <Input 
                        id="subject" 
                        placeholder={
                          formType === "prayer" 
                            ? "Ex: Saúde, Família, Trabalho..." 
                            : "Assunto da mensagem"
                        }
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {formType === "prayer" ? "Detalhes do Pedido *" : "Mensagem *"}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={
                          formType === "prayer"
                            ? "Partilha o teu pedido de oração. Será tratado com confidencialidade."
                            : "Escreve a tua mensagem aqui..."
                        }
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    {formType === "prayer" && (
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <p className="text-sm text-muted-foreground">
                          <strong>Nota:</strong> O teu pedido será partilhado apenas com a equipa de intercessão 
                          e tratado com total confidencialidade. Estamos aqui para orar contigo!
                        </p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "A enviar..."
                      ) : (
                        <>
                          <Send size={18} />
                          {formType === "prayer" ? "Enviar Pedido de Oração" : "Enviar Mensagem"}
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
