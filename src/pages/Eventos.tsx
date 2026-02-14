import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const staticEvents = [
  {
    id: "static-1",
    title: "Culto Jovem de Adoração",
    description: "Um momento especial de louvor, adoração e comunhão. Venha adorar a Deus connosco!",
    date: "26 Jan 2026",
    time: "18:00",
    location: "Templo Principal",
    category: "Culto",
    capacity: 200,
    featured: true,
  },
  {
    id: "static-2",
    title: "Estudo Bíblico Semanal",
    description: "Aprofundamos o nosso conhecimento da Palavra de Deus através de estudos interativos.",
    date: "29 Jan 2026",
    time: "19:30",
    location: "Sala de Estudos",
    category: "Estudo",
    capacity: 50,
    featured: false,
  },
  {
    id: "static-3",
    title: "Retiro Anual da Juventude 2026",
    description: "Três dias de renovação espiritual, comunhão e muito aprendizado. Tema: 'Escolhidos para Servir'.",
    date: "15-17 Fev 2026",
    time: "08:00",
    location: "Centro de Retiros Esperança",
    category: "Retiro",
    capacity: 100,
    featured: true,
  },
  {
    id: "static-4",
    title: "Encontro de Oração",
    description: "Noite dedicada à oração e intercessão pela nossa juventude, famílias e nação.",
    date: "02 Fev 2026",
    time: "20:00",
    location: "Templo Principal",
    category: "Oração",
    capacity: 150,
    featured: false,
  },
  {
    id: "static-5",
    title: "Ação Social - Visita ao Orfanato",
    description: "Levando amor e esperança às crianças. Traga brinquedos e lanches para partilhar.",
    date: "08 Fev 2026",
    time: "09:00",
    location: "Orfanato Luz do Amanhã",
    category: "Ação Social",
    capacity: 30,
    featured: false,
  },
  {
    id: "static-6",
    title: "Workshop de Liderança Cristã",
    description: "Capacitação para jovens líderes. Temas: visão, caráter e serviço.",
    date: "22 Fev 2026",
    time: "14:00",
    location: "Auditório da Igreja",
    category: "Formação",
    capacity: 80,
    featured: true,
  },
];

const Eventos = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [registeringId, setRegisteringId] = useState<string | null>(null);
  const [registeredIds, setRegisteredIds] = useState<Set<string>>(new Set());

  // Fetch user's registrations
  const { data: myRegistrations } = useQuery({
    queryKey: ["my-registrations", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase
        .from("event_registrations")
        .select("event_id")
        .eq("user_id", user.id);
      return data?.map((r) => r.event_id) || [];
    },
    enabled: !!user,
  });

  const isRegistered = (eventId: string) =>
    myRegistrations?.includes(eventId) || registeredIds.has(eventId);

  const handleRegister = async (eventId: string) => {
    if (!user) {
      toast.error("Precisas de iniciar sessão para te inscreveres.");
      return;
    }
    setRegisteringId(eventId);

    const { error } = await supabase.from("event_registrations").insert({
      event_id: eventId,
      user_id: user.id,
    });

    if (error) {
      if (error.code === "23505") {
        toast.info("Já estás inscrito neste evento!");
      } else {
        toast.error("Erro ao inscrever. Tenta novamente.");
      }
    } else {
      setRegisteredIds((prev) => new Set(prev).add(eventId));
      queryClient.invalidateQueries({ queryKey: ["my-registrations"] });
      queryClient.invalidateQueries({ queryKey: ["site-stats"] });
      toast.success("Inscrição confirmada! 🎉");
    }

    setRegisteringId(null);
  };

  const events = staticEvents;

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
                Eventos
              </h1>
              <p className="text-lg text-white/80">
                Confere a nossa agenda de cultos, encontros, retiros e atividades.
                Há sempre algo especial a acontecer!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Login prompt */}
        {!user && (
          <div className="bg-accent/10 border-b border-accent/20">
            <div className="container-custom py-4 flex items-center justify-center gap-3">
              <LogIn size={18} className="text-primary" />
              <p className="text-sm text-muted-foreground">
                <Link to="/auth" className="text-primary font-semibold hover:underline">Inicia sessão</Link>
                {" "}para te inscreveres nos eventos.
              </p>
            </div>
          </div>
        )}

        {/* Featured Events */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Em Destaque
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Próximos Eventos
              </h2>
            </motion.div>

            <div className="grid gap-6">
              {events.filter((e) => e.featured).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-soft ring-2 ring-primary"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                          Destaque
                        </span>
                        <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-primary" />
                          <span>{event.capacity} vagas</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      {isRegistered(event.id) ? (
                        <Button size="lg" variant="secondary" disabled className="flex items-center gap-2">
                          <CheckCircle2 size={18} /> Inscrito
                        </Button>
                      ) : (
                        <Button
                          size="lg"
                          onClick={() => handleRegister(event.id)}
                          disabled={registeringId === event.id || !user}
                        >
                          {registeringId === event.id ? "A inscrever..." : "Inscrever-se"}
                          {registeringId !== event.id && <ArrowRight size={18} />}
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Events */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground">Calendário Completo</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 shadow-soft card-hover"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium mb-4">
                    {event.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {isRegistered(event.id) ? (
                    <Button variant="secondary" className="w-full flex items-center gap-2" disabled>
                      <CheckCircle2 size={16} /> Inscrito
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => handleRegister(event.id)}
                      disabled={registeringId === event.id || !user}
                    >
                      {registeringId === event.id ? "A inscrever..." : "Inscrever-se"}
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Eventos;
