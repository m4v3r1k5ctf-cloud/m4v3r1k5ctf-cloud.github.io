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
    title: "",
    description: "Recruit new talent and dominate local CTFs.",
    status: "completed"
  },
  {
    year: "2025",
    title: "",
    description: "1st Place in Techno summit 2025 Sathyabama University CTF.",
    status: "completed"
  },
  {
    year: "2025",
    title: "", 
    description: "1st Place in St.Joseph Innovit 2025 CTF.",
    status: "completed"
  },
  {
    year: "2025",
    title: "",
    description: "TOP 25 in ACNCTF 2025 by Amrita University Chennai.",
    status: "completed"
  },
  {
    year: "2025",
    title: "",
    description: "Loading..!",
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
      (item as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20"></div>
      
      {/* Floating particles animation - hidden on small screens for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
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

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            Roadmap
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey through the cybersecurity landscape - from humble beginnings to elite CTF dominance
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Straight Timeline Line (left rail) */}
          <div className="pointer-events-none absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-red-500 to-yellow-500 left-3 sm:left-4 md:left-5"></div>

          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="timeline-item grid grid-cols-[1.5rem_1fr] sm:grid-cols-[2rem_1fr] md:grid-cols-[2.5rem_1fr] gap-3 sm:gap-4 items-start mb-6 sm:mb-8"
            >
              {/* Rail/Dot Column */}
              <div className="relative col-[1] flex justify-center">
                {/* Timeline Dot aligned on rail center */}
                <div
                  className={`mt-3 sm:mt-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full ring-[3px] sm:ring-4 ring-background shadow-lg z-10 ${
                    achievement.status === 'completed'
                      ? 'bg-gradient-to-r from-green-400 to-green-600'
                      : 'bg-gradient-to-r from-primary to-red-500'
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full ${
                      achievement.status === 'completed' ? 'bg-green-400' : 'bg-primary'
                    } opacity-30 animate-ping`}
                  ></div>
                </div>
              </div>

              {/* Content Card Column */}
              <Card
                className={`bg-card/80 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                  achievement.status === 'completed' ? 'border-green-400/30' : 'border-primary/30'
                }`}
              >
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
                    {achievement.year}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Future Goals Section */}
        <div className="mt-14 sm:mt-20 text-center">
          <div className="inline-block p-6 sm:p-8 rounded-lg bg-gradient-to-r from-primary/10 to-red-500/10 border border-primary/30">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
              What's Next?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-2xl">
              Our journey continues as we aim for national recognition, international competitions, 
              and contributing to the global cybersecurity community.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
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
