import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Culto Jovem de Adoração",
    date: "26 Jan 2026",
    time: "18:00",
    location: "Templo Principal",
    category: "Culto",
    featured: true,
  },
  {
    id: 2,
    title: "Estudo Bíblico Semanal",
    date: "29 Jan 2026",
    time: "19:30",
    location: "Sala de Estudos",
    category: "Estudo",
    featured: false,
  },
  {
    id: 3,
    title: "Retiro Anual da Juventude",
    date: "15 Fev 2026",
    time: "08:00",
    location: "Centro de Retiros",
    category: "Retiro",
    featured: true,
  },
];

export function UpcomingEvents() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Agenda
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Próximos Eventos
            </h2>
          </div>
          <Link to="/eventos">
            <Button variant="outline">
              Ver Calendário Completo
              <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-card rounded-2xl p-6 shadow-soft card-hover ${
                event.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              {event.featured && (
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-4">
                  Destaque
                </span>
              )}
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium mb-4 ml-2">
                {event.category}
              </span>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {event.title}
              </h3>
              
              <div className="space-y-2 text-muted-foreground text-sm">
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
              </div>

              <Link to="/eventos" className="block mt-6">
                <Button variant="secondary" className="w-full">
                  Ver Detalhes
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
