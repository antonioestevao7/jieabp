import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Play, Image, Youtube, ExternalLink } from "lucide-react";
import bibleStudyImage from "@/assets/bible-study.jpg";
import youthEventImage from "@/assets/youth-event.jpg";
import worshipTeamImage from "@/assets/worship-team.jpg";
import heroWorshipImage from "@/assets/hero-worship.jpg";

const photos = [
  { id: 1, src: heroWorshipImage, title: "Culto de Adoração", category: "Cultos" },
  { id: 2, src: bibleStudyImage, title: "Estudo Bíblico", category: "Estudos" },
  { id: 3, src: youthEventImage, title: "Encontro Jovem", category: "Eventos" },
  { id: 4, src: worshipTeamImage, title: "Equipa de Louvor", category: "Louvor" },
];

const videos = [
  { id: 1, title: "Culto Jovem - Janeiro 2026", thumbnail: heroWorshipImage, duration: "1:25:30", views: "1.2K" },
  { id: 2, title: "Testemunho: A Graça Transformadora", thumbnail: bibleStudyImage, duration: "15:42", views: "856" },
  { id: 3, title: "Louvor - Tu És o Meu Deus", thumbnail: worshipTeamImage, duration: "5:30", views: "2.1K" },
];

const Multimedia = () => {
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
                Multimédia
              </h1>
              <p className="text-lg text-white/80">
                Revive os melhores momentos através das nossas fotos e vídeos. 
                Subscreve o nosso canal do YouTube!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-12"
            >
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  Galeria
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Fotos
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Image size={20} className="text-primary" />
                <span className="text-muted-foreground">{photos.length} fotos</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs font-medium text-accent">{photo.category}</span>
                      <h4 className="text-white font-semibold">{photo.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12"
            >
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  Vídeos
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Últimos Vídeos
                </h2>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground font-medium hover:bg-destructive/90 transition-colors"
              >
                <Youtube size={20} />
                Subscrever Canal
                <ExternalLink size={14} />
              </a>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover cursor-pointer"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Play size={28} className="text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-foreground/80 text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {video.views} visualizações
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media CTA */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Segue-nos nas Redes Sociais
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Fica a par de todas as novidades, fotos e vídeos da nossa juventude.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                >
                  YouTube
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Multimedia;
