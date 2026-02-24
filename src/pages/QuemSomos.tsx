import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  { icon: Heart, title: "Fé", description: "Fundamentados na Palavra de Deus, vivemos pela fé em Cristo Jesus." },
  { icon: Users, title: "Comunhão", description: "Unidos como família, partilhamos alegrias e desafios juntos." },
  { icon: Target, title: "Propósito", description: "Cada jovem tem um propósito único no plano de Deus." },
  { icon: Eye, title: "Visão", description: "Olhamos para o futuro com esperança e determinação." },
];

const leaders = [
  { name: "Manuel Roboão Tavares", role: "Director", description: "Orientação espiritual e administrativa da juventude" },
  { name: "Estanislau Paulo", role: "Secretário Executivo", description: "Coordenação das atividades juvenis" },
  { name: "Irmão Pedro", role: "Líder de Louvor", description: "Ministério de música e adoração" },
  { name: "Irmã Ana", role: "Secretária", description: "Comunicação e administração" },
];

const QuemSomos = () => {
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
                Quem Somos
              </h1>
              <p className="text-lg text-white/80">
                Conhece a história, missão e os valores que nos guiam como juventude da Igreja Evangélica de Angola.
              </p>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  Nossa História
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Uma Jornada de Fé e Crescimento
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A Juventude da Igreja Evangélica de Angola - Paróquia de Boa Esperança nasceu do desejo 
                    de unir jovens cristãos comprometidos com a Palavra de Deus e o serviço ao próximo.
                  </p>
                  <p>
                    Ao longo dos anos, temos crescido em número e em maturidade espiritual, 
                    desenvolvendo programas que fortalecem a fé, promovem a comunhão e capacitam 
                    jovens para serem agentes de transformação na sociedade.
                  </p>
                  <p>
                    Hoje, somos uma comunidade vibrante de jovens entre 14 e 35 anos, unidos pelo 
                    amor a Cristo e pelo compromisso de viver e proclamar o Evangelho.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-primary mb-2">J.I.E.A</div>
                    <div className="text-muted-foreground">Paróquia Boa Esperança</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Target size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Formar jovens comprometidos com Cristo, capacitando-os através do ensino da Palavra, 
                  da oração e da comunhão, para serem testemunhas fiéis do Evangelho e agentes de 
                  transformação em suas famílias, comunidades e sociedade.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <Eye size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser uma juventude referência de fé, excelência e amor, impactando Angola e 
                  o mundo através de uma geração de jovens que vivem os valores do Reino de Deus, 
                  liderando com integridade e servindo com paixão.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                O Que Nos Define
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Nossos Valores
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card shadow-soft card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Liderança
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Nossa Equipa
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card shadow-soft card-hover"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{leader.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{leader.role}</p>
                  <p className="text-muted-foreground text-sm">{leader.description}</p>
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

export default QuemSomos;
