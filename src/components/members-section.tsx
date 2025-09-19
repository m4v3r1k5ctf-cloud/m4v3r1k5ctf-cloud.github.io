import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Terminal, Shield, Key, Search } from "lucide-react";

const members = [
  {
    name: "Tharun M",
    handle: "panicboy",
    role: "Lead Exploiter",
    specialty: "Core Player",
    icon: Terminal,
    linkedin: "https://www.linkedin.com/in/tharun-m-946460288",
    description: "Master of exploitation techniques and core CTF methodologies",
    skills: ["Binary Exploitation", "Reverse Engineering", "System Administration"],
  },
  {
    name: "Dharsan L", 
    handle: "webwizard",
    role: "Web Wizard",
    specialty: "Reconnaissance Expert",
    icon: Shield,
    linkedin: "https://www.linkedin.com/in/dharsan-l-2143a0288",
    description: "Expert in web application security and reconnaissance techniques",
    skills: ["Web Security", "Network Recon", "Vulnerability Assessment"],
  },
  {
    name: "Kishore Prasath J",
    handle: "cryptoking", 
    role: "Crypto Cracker",
    specialty: "Puzzle Master",
    icon: Key,
    linkedin: "https://www.linkedin.com/in/kishore-prasath-j-4b728b317",
    description: "Specialist in cryptographic challenges and mathematical puzzles",
    skills: ["Cryptanalysis", "Algorithm Design", "Number Theory"],
  },
  {
    name: "Ascharya Rajeev",
    handle: "digitaldetective",
    role: "OSINT Specialist", 
    specialty: "Digital Sleuth",
    icon: Search,
    linkedin: "https://www.linkedin.com/in/ascharya-rajeev-992b0a2a3",
    description: "Expert in open source intelligence and digital forensics",
    skills: ["Digital Forensics", "Social Engineering", "Data Mining"],
  },
  {
    name: "Akshay Kumar S",
    handle: "akshay45",
    role: "Crypto & Binary Analyst",
    specialty: "Bitwise Strategist",
    icon: Key,
    linkedin: "https://www.linkedin.com/in/akshay45?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    description: "Focused on cryptanalysis and binary challenges with a methodical approach to complex CTF problems.",
    skills: ["Cryptanalysis", "Binary Exploitation", "Reverse Engineering"],
  },
];

export const MembersSection = () => {
  return (
    <section id="members" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-cyber">
            Our Mavericks
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            $ ls -la /team/members
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-cyber hover:glow-cyber transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <member.icon className="h-10 w-10 text-primary group-hover:animate-glow" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-terminal text-terminal-foreground px-2 py-1 rounded text-xs font-mono">
                      {member.handle}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary font-mono mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-mono text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-accent text-sm font-mono">
                  {member.specialty}
                </p>
              </div>

              <p className="text-muted-foreground text-sm mb-4 font-mono leading-relaxed">
                {member.description}
              </p>

              <div className="mb-6">
                <div className="text-xs text-terminal font-mono mb-2">$ cat skills.txt</div>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
                  asChild
                >
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-1" />
                    Connect
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};