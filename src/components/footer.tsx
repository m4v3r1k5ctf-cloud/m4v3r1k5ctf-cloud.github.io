import { Shield, Terminal, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-cyber py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-primary animate-glow" />
            <span className="text-xl font-bold text-cyber font-mono">
              M@v3r!ks
            </span>
          </div>

          <div className="text-center mb-4 md:mb-0">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-terminal">$ echo "Made with"</span>{" "}
              <Heart className="inline h-4 w-4 text-destructive animate-pulse" />{" "}
              <span className="text-terminal">by cybersecurity enthusiasts"</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground font-mono text-sm">
              © 2024 Team M@v3r!ks
            </span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground font-mono text-xs">
            <span className="text-primary">Sathyabama University</span> | 
            <span className="text-secondary"> Elite CTF Warriors</span> | 
            <span className="text-terminal"> Breaking Cybersecurity Boundaries</span>
          </p>
        </div>
      </div>
    </footer>
  );
};