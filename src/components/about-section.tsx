import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Terminal, Users, Target, Trophy } from "lucide-react";

const terminalCommands = [
  "$ whoami",
  "Team M@v3r!ks - Sathyabama University",
  "$ ls -la /skills",
  "Web Exploitation, Cryptography, OSINT, Reversing",
  "$ cat mission.txt", 
  "Exploring CTF challenges and cybersecurity frontiers",
  "$ echo $STATUS",
  "Active CTF participants | 500+ problems solved",
];

export const AboutSection = () => {
  const [visibleCommands, setVisibleCommands] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);

  useEffect(() => {
    if (commandIndex < terminalCommands.length) {
      const fullCommand = terminalCommands[commandIndex];
      
      if (currentCommand.length < fullCommand.length) {
        const timeout = setTimeout(() => {
          setCurrentCommand(fullCommand.substring(0, currentCommand.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setVisibleCommands(prev => prev + 1);
          setCommandIndex(prev => prev + 1);
          setCurrentCommand("");
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentCommand, commandIndex]);

  const stats = [
    { icon: Users, label: "Active Members", value: "5" },
    { icon: Target, label: "CTF Problems", value: "500+" },
    { icon: Trophy, label: "Competitions", value: "50+" },
    { icon: Terminal, label: "Experience", value: "2+ Years" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-cyber">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            mavericks@about:~$
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Window */}
          <Card className="bg-card border-cyber p-6 font-mono">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="ml-4 text-sm text-muted-foreground">terminal@mavericks</span>
            </div>
            
            <div className="h-80 overflow-hidden">
              {terminalCommands.slice(0, visibleCommands).map((cmd, index) => (
                <div key={index} className="mb-2">
                  <span className={cmd.startsWith('$') ? 'text-terminal' : 'text-primary'}>
                    {cmd}
                  </span>
                </div>
              ))}
              
              {commandIndex < terminalCommands.length && (
                <div className="mb-2">
                  <span className={terminalCommands[commandIndex].startsWith('$') ? 'text-terminal' : 'text-primary'}>
                    {currentCommand}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              )}
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-cyber text-center hover:glow-cyber transition-all duration-300 group"
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-glow" />
                <div className="text-3xl font-bold text-cyber mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-mono text-sm">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-card border-terminal inline-block">
            <p className="text-lg text-muted-foreground font-mono leading-relaxed max-w-4xl">
              We are <span className="text-terminal">Sathyabama University</span> students actively exploring 
              <span className="text-primary"> CTF</span> and <span className="text-secondary">cybersecurity</span>. 
              Our team handles the{" "}
              <span className="text-accent">HackTheBox university page</span> and participates in{" "}
              <span className="text-terminal">CTFtime events</span> regularly.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};