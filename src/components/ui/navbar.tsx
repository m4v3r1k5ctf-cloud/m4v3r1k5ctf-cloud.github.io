import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Terminal, Target } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", icon: Shield },
  { name: "Roadmap", href: "/roadmap", icon: Target },
  { name: "About", href: "/#about", icon: Shield },
  { name: "Members", href: "/#members", icon: Shield },
  { name: "Achievements", href: "/#achievements", icon: Shield },
  { name: "Contact", href: "/#contact", icon: Shield },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-cyber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="/src/assets/mavericks-logo.png" 
                alt="M@v3r!ks Logo" 
                className="h-8 w-8 animate-glow"
              />
              <span className="text-xl font-bold text-cyber font-mono">
                M@v3r!ks
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? location.pathname === "/" : location.pathname === item.href;
              const ItemIcon = item.icon;
              
              return item.href.startsWith("/#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-sm tracking-wider flex items-center gap-2"
                >
                  <ItemIcon className="h-4 w-4" />
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-300 font-mono text-sm tracking-wider flex items-center gap-2 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <ItemIcon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:bg-primary/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-cyber rounded-lg mt-2">
              {navigation.map((item) => {
                const isActive = item.href === "/" ? location.pathname === "/" : location.pathname === item.href;
                const ItemIcon = item.icon;
                
                return item.href.startsWith("/#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-sm tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    <ItemIcon className="h-4 w-4 inline mr-2" />
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 transition-colors duration-300 font-mono text-sm tracking-wider ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <ItemIcon className="h-4 w-4 inline mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};