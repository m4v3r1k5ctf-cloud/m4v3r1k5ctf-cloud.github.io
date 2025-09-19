import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Shield, Terminal } from "lucide-react";
import logoWithText from "@/assets/mavericks-logo-with-text.png";

const typewriterTexts = [
  "Elite CTF Warriors",
  "Cybersecurity Experts", 
  "Flag Hunters",
  "Exploit Researchers",
];

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullText = typewriterTexts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={logoWithText}
              alt="M@v3r!ks Logo" 
              className="h-32 w-auto animate-glow"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
          <span className="text-cyber animate-flicker">M@v3r!ks</span>
        </h1>

        <div className="text-2xl md:text-4xl mb-4 h-12 flex items-center justify-center">
          <span className="text-terminal font-mono">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-sans">
          Breaking Boundaries in Cybersecurity
        </p>

        <p className="text-lg text-accent mb-12 font-mono animate-glow">
          $ Ready to pwn the flags and own the challenges!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-mono tracking-wider glow-cyber"
          >
            <Terminal className="mr-2 h-5 w-5" />
            View Our Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-terminal text-terminal hover:bg-terminal hover:text-terminal-foreground font-mono tracking-wider"
          >
            <Code className="mr-2 h-5 w-5" />
            Join The Team
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};