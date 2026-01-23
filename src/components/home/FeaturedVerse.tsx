import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function FeaturedVerse() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-8">
            <BookOpen size={32} className="text-accent" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-relaxed mb-6">
            "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; 
            pensamentos de paz, e não de mal, para vos dar o fim que esperais."
          </h2>
          
          <p className="text-accent font-semibold text-xl">
            Jeremias 29:11
          </p>
        </motion.div>
      </div>
    </section>
  );
}
