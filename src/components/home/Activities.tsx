import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Music, Users, Heart, ArrowRight } from "lucide-react";
import bibleStudyImage from "@/assets/bible-study.jpg";
import youthEventImage from "@/assets/youth-event.jpg";
import worshipTeamImage from "@/assets/worship-team.jpg";

const activities = [
  {
    icon: BookOpen,
    title: "Estudos Bíblicos",
    description: "Aprofunda o teu conhecimento da Palavra de Deus através de estudos semanais e discussões em grupo.",
    image: bibleStudyImage,
    link: "/conteudos",
    color: "bg-primary",
  },
  {
    icon: Music,
    title: "Louvor e Adoração",
    description: "Momentos de adoração intensa onde expressamos o nosso amor a Deus através da música e oração.",
    image: worshipTeamImage,
    link: "/multimedia",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Comunhão Juvenil",
    description: "Encontros regulares para fortalecer laços de amizade e crescer juntos em comunidade.",
    image: youthEventImage,
    link: "/eventos",
    color: "bg-primary-light",
  },
];

export function Activities() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossas Atividades
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descobre as diversas formas como crescemos na fé e servimos a nossa comunidade.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${activity.color} flex items-center justify-center`}>
                  <activity.icon size={24} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {activity.description}
                </p>
                <Link
                  to={activity.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Saber mais <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
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
          <Link to="/eventos">
            <Button size="lg">
              Ver Todos os Eventos
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
