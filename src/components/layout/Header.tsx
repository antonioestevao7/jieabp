import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Início", path: "/" },
  { name: "Quem Somos", path: "/quem-somos" },
  { name: "Conteúdos", path: "/conteudos" },
  { name: "Multimédia", path: "/multimedia" },
  { name: "Eventos", path: "/eventos" },
  { name: "Notícias", path: "/noticias" },
  { name: "Contacto", path: "/contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="J.I.E.A Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <div className="hidden sm:block">
              <p className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
                J.I.E.A
              </p>
              <p className={`text-xs transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}>
                Paróquia Boa Esperança
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/20 text-white"
                    : isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {user ? (
              <>
                <Link to="/contacto">
                  <Button variant={isScrolled ? "default" : "heroOutline"} size="sm">
                    Pedido de Oração
                  </Button>
                </Link>
                <button
                  onClick={() => signOut()}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isScrolled ? "text-foreground hover:bg-secondary" : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  <User size={16} />
                  <span className="max-w-[100px] truncate">{profile?.full_name || "Membro"}</span>
                  <LogOut size={14} />
                </button>
              </>
            ) : (
              <>
                <Link to="/contacto">
                  <Button variant={isScrolled ? "default" : "heroOutline"} size="sm">
                    Pedido de Oração
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant={isScrolled ? "secondary" : "glass"} size="sm" className="flex items-center gap-2">
                    <LogIn size={16} /> Entrar
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location.pathname === item.path
                          ? "bg-primary text-primary-foreground"
                          : isScrolled
                          ? "text-foreground hover:bg-secondary"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-4 space-y-2"
                >
                  <Link to="/contacto">
                    <Button variant="hero" className="w-full">
                      Pedido de Oração
                    </Button>
                  </Link>
                  {user ? (
                    <Button variant="secondary" className="w-full flex items-center gap-2" onClick={() => signOut()}>
                      <LogOut size={16} /> Sair ({profile?.full_name || "Membro"})
                    </Button>
                  ) : (
                    <Link to="/auth">
                      <Button variant="secondary" className="w-full flex items-center gap-2">
                        <LogIn size={16} /> Entrar / Registar
                      </Button>
                    </Link>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
