import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Início", path: "/" },
  { name: "Quem Somos", path: "/quem-somos" },
  { name: "Eventos", path: "/eventos" },
  { name: "Notícias", path: "/noticias" },
];

const contentLinks = [
  { name: "Artigos", path: "/conteudos" },
  { name: "Devocionais", path: "/conteudos" },
  { name: "Estudos Bíblicos", path: "/conteudos" },
  { name: "Multimédia", path: "/multimedia" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="J.I.E.A Logo" className="h-14 w-auto" />
              <div>
                <p className="font-bold text-xl">J.I.E.A</p>
                <p className="text-sm text-primary-foreground/80">
                  Paróquia Boa Esperança
                </p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Unidos em Cristo, crescendo na fé e servindo com amor. 
              A juventude que transforma através do poder do Evangelho.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Conteúdos</h4>
            <ul className="space-y-3">
              {contentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  Igreja Evangélica de Angola<br />
                  Paróquia de Boa Esperança, Luanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +244 923 000 000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  juventude@iea-boaesperanca.org
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Juventude da Igreja Evangélica de Angola - Paróquia de Boa Esperança.
              Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              Feito com <Heart size={14} className="text-accent fill-accent" /> para a glória de Deus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
