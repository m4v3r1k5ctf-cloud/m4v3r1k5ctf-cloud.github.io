import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Users, Calendar, ExternalLink } from "lucide-react";

const achievements = [
	{
		title: "HackTheBox University Page",
		description: "Managing Sathyabama University's official HackTheBox presence",
		icon: Users,
		link: "https://app.hackthebox.com/universities/members/1158",
		status: "Active",
	},
	{
		title: "CTFtime Participation",
		description: "Regular participation in global CTF competitions",
		icon: Calendar,
		link: "https://ctftime.org/team/406929",
		status: "Ongoing",
	},
	{
		title: "500+ CTF Problems",
		description: "Collectively solved over 500 cybersecurity challenges",
		icon: Target,
		status: "Milestone",
	},
	{
		title: "Elite Team Recognition",
		description: "Recognized as top cybersecurity students at Sathyabama",
		icon: Trophy,
		status: "Achievement",
	},
];

const stats = [
	{ label: "Problems Solved", value: 500, suffix: "+" },
	{ label: "CTF Events", value: 50, suffix: "+" },
	{ label: "Team Members", value: 5, suffix: "" },
	{ label: "Years Active", value: 2, suffix: "+" },
];

export const AchievementsSection = () => {
	const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					stats.forEach((stat, index) => {
						let current = 0;
						const increment = stat.value / 50;
						const timer = setInterval(() => {
							current += increment;
							if (current >= stat.value) {
								current = stat.value;
								clearInterval(timer);
							}
							setAnimatedStats((prev) => {
								const newStats = [...prev];
								newStats[index] = Math.floor(current);
								return newStats;
							});
						}, 30);
					});
				}
			},
			{ threshold: 0.5 }
		);

		const section = document.getElementById("achievements");
		if (section) observer.observe(section);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="achievements" className="py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-cyber">
						Achievements
					</h2>
					<p className="text-xl text-muted-foreground font-mono">
						$ cat achievements.log
					</p>
				</div>

				{/* Stats Counter */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
					{stats.map((stat, index) => (
						<Card
							key={index}
							className="p-6 bg-card border-cyber text-center group hover:glow-cyber transition-all duration-300"
						>
							<div className="text-4xl font-bold text-primary font-mono mb-2 group-hover:animate-glow">
								{animatedStats[index]}
								{stat.suffix}
							</div>
							<div className="text-muted-foreground font-mono text-sm">
								{stat.label}
							</div>
						</Card>
					))}
				</div>

				{/* Achievement Cards */}
				<div className="grid md:grid-cols-2 gap-8">
					{achievements.map((achievement, index) => (
						<Card
							key={index}
							className="p-6 bg-card border-cyber hover:glow-cyber transition-all duration-500 group"
						>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
										<achievement.icon className="h-6 w-6 text-primary group-hover:animate-glow" />
									</div>
								</div>

								<div className="flex-1">
									<div className="flex items-center justify-between mb-2">
										<h3 className="text-lg font-bold text-primary font-mono">
											{achievement.title}
										</h3>
										<span
											className={`text-xs px-2 py-1 rounded font-mono ${
												achievement.status === "Active"
													? "bg-success/20 text-success"
													: achievement.status === "Ongoing"
													? "bg-warning/20 text-warning"
													: "bg-terminal/20 text-terminal"
											}`}
										>
											{achievement.status}
										</span>
									</div>

									<p className="text-muted-foreground font-mono text-sm mb-4 leading-relaxed">
										{achievement.description}
									</p>

									{achievement.link && (
										<Button
											variant="outline"
											size="sm"
											className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
											asChild
										>
											<a
												href={achievement.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="h-4 w-4 mr-1" />
												View
											</a>
										</Button>
									)}
								</div>
							</div>
						</Card>
					))}
				</div>

				<div className="mt-16 text-center">
					<Card className="p-8 bg-card border-terminal inline-block max-w-4xl">
						<p className="text-lg text-muted-foreground font-mono leading-relaxed">
							<span className="text-terminal">$ echo "Our Journey"</span>
							<br />
							Our team has consistently demonstrated excellence in cybersecurity
							challenges, with active participation in{" "}
							<span className="text-primary">50+ CTF events</span> and solving{" "}
							<span className="text-secondary">500+ complex problems</span>. We
							maintain the{" "}
							<span className="text-accent">
								Sathyabama University HackTheBox page
							</span>{" "}
							and are recognized participants in the global{" "}
							<span className="text-terminal">CTFtime community</span>.
						</p>
					</Card>
				</div>
			</div>
		</section>
	);
};