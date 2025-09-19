import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MessageSquare, Send, Terminal, Users, Shield } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you soon. Thanks for reaching out!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "m4v3r1k5.ctf@gmail.com",
      action: "mailto:m4v3r1k5.ctf@gmail.com",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Join Our Team",
      description: "Interested in cybersecurity?",
      action: "#members",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Collaborate",
      description: "CTF partnerships welcome",
      action: "#about",
      color: "text-terminal",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-cyber">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            $ ./connect_with_mavericks.sh
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <Card className="p-6 bg-card border-cyber">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="h-6 w-6 text-primary" />
                <span className="font-mono text-lg text-primary">Contact Methods</span>
              </div>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group">
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-4 h-auto hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href={method.action}>
                        <div className="flex items-start gap-4">
                          <method.icon className={`h-6 w-6 ${method.color} group-hover:animate-glow`} />
                          <div className="text-left">
                            <div className="font-mono font-semibold text-foreground mb-1">
                              {method.title}
                            </div>
                            <div className="text-sm text-muted-foreground font-mono">
                              {method.description}
                            </div>
                          </div>
                        </div>
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-terminal">
              <div className="font-mono text-sm space-y-2">
                <div className="text-terminal">$ whoami</div>
                <div className="text-primary">Elite CTF Team M@v3r!ks</div>
                <div className="text-terminal">$ pwd</div>
                <div className="text-primary">Sathyabama University, Chennai</div>
                <div className="text-terminal">$ echo $MISSION</div>
                <div className="text-primary">Breaking cybersecurity boundaries</div>
                <div className="text-terminal">$ status</div>
                <div className="text-success">Ready for new challenges!</div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card border-cyber">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="font-mono text-lg text-primary">Send Message</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                  $ enter_name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-input border-primary/30 font-mono"
                  placeholder="Your name..."
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                  $ enter_email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-input border-primary/30 font-mono"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                  $ write_message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-input border-primary/30 font-mono resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-mono tracking-wider glow-cyber"
              >
                {isSubmitting ? (
                  <>
                    <Terminal className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};