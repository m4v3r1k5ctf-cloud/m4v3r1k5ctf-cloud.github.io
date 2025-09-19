import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

interface Achievement {
  year: string;
  title: string;
  description: string;
  status: "completed" | "in-progress";
}

const achievements: Achievement[] = [
  {
    year: "2024",
    title: "Foundation & Growth",
    description: "Recruit new talent and dominate local CTFs.",
    status: "completed"
  },
  {
    year: "2025",
    title: "Techno Summit Victory",
    description: "🏆 1st Place in Techno summit 2025 Sathyabama University CTF.",
    status: "completed"
  },
  {
    year: "2025",
    title: "St.Joseph Innovit Triumph", 
    description: "🏆 1st Place in St.Joseph Innovit 2025 CTF.",
    status: "completed"
  },
  {
    year: "2025",
    title: "ACNCTF Achievement",
    description: "🏆 TOP 25 in ACNCTF 2025 by Amrita University Chennai.",
    status: "completed"
  },
  {
    year: "2025",
    title: "Future Expansion",
    description: "Loading..! 🚀",
    status: "in-progress"
  }
];

export const RoadmapSection = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      observer.observe(item);
      (item as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey through the cybersecurity landscape - from humble beginnings to elite CTF dominance
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-red-500 to-yellow-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-red-500 to-yellow-500 md:hidden"></div>

          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`timeline-item relative mb-8 w-full md:w-1/2 opacity-0 transform translate-y-12 transition-all duration-1000 ease-out ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute w-6 h-6 rounded-full border-4 border-background shadow-lg ${
                achievement.status === 'completed' ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-primary to-red-500'
              } ${
                index % 2 === 0 
                  ? 'md:right-[-13px] left-2 md:left-auto' 
                  : 'md:left-[-13px] left-2'
              } top-6 z-10`}>
                <div className={`absolute inset-0 rounded-full ${
                  achievement.status === 'completed' ? 'bg-green-400' : 'bg-primary'
                } opacity-30 animate-ping`}></div>
              </div>

              {/* Content Card */}
              <Card className={`bg-card/80 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                achievement.status === 'completed' ? 'border-green-400/30' : 'border-primary/30'
              } ml-8 md:ml-0`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
                      {achievement.year}
                    </span>
                    {achievement.status === 'completed' && (
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs font-mono rounded-full border border-green-400/30">
                        COMPLETED
                      </span>
                    )}
                    {achievement.status === 'in-progress' && (
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full border border-primary/30 animate-pulse">
                        IN PROGRESS
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground font-mono">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative elements for completed items */}
                  {achievement.status === 'completed' && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-mono">ACHIEVEMENT UNLOCKED</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Future Goals Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-lg bg-gradient-to-r from-primary/10 to-red-500/10 border border-primary/30">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
              What's Next?
            </h3>
            <p className="text-muted-foreground mb-4 max-w-2xl">
              Our journey continues as we aim for national recognition, international competitions, 
              and contributing to the global cybersecurity community.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30">
                National CTFs
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full border border-red-400/30">
                International Recognition
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-400/30">
                Research & Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
