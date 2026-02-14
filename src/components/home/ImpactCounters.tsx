import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Calendar, Heart, BookOpen } from "lucide-react";
import { useSiteStats } from "@/hooks/useSiteStats";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({ target, suffix = "", duration = 2 }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (!hasAnimated) return;
    const controls = animate(count, target, { duration });
    return controls.stop;
  }, [hasAnimated, count, target, duration]);

  return (
    <motion.span
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true, amount: 0.5 }}
    >
      {display}{suffix}
    </motion.span>
  );
}

const iconMap = [Users, Calendar, Heart, BookOpen];
const labelMap = ["Jovens Ativos", "Eventos Realizados", "Pedidos de Oração", "Estudos Publicados"];

export function ImpactCounters() {
  const { data: stats } = useSiteStats();

  const values = [
    stats?.jovens_ativos ?? 0,
    stats?.eventos_realizados ?? 0,
    stats?.pedidos_oracao ?? 0,
    stats?.estudos_publicados ?? 0,
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            O Nosso Impacto
          </h2>
          <p className="text-white/70">Números que refletem a obra de Deus através da juventude</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={labelMap[index]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  <AnimatedNumber target={value} suffix="+" />
                </div>
                <p className="text-white/70 text-sm font-medium">{labelMap[index]}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
