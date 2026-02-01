"use client";

import { useState, FormEvent } from "react";
import { TerminalWindow } from "@/components/ui";
import AsciiHeader from "@/components/ui/AsciiHeader";
import { profile, socialLinks } from "@/data";

const CONTACT_ASCII = `
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="p-8 bg-background relative overflow-hidden border-t-2 border-foreground">
      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={CONTACT_ASCII} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-8">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
               <span className="text-foreground font-bold">~/</span> Send Message
            </h3>
            <div className="bg-background border-2 border-foreground rounded-none p-6 hover:border-foreground transition-colors">
               <form onSubmit={handleSubmit} className="space-y-5">
                 <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-sm text-foreground font-bold">Name</label>
                       <input
                         type="text"
                         value={formData.name}
                         onChange={(e) =>
                           setFormData({ ...formData, name: e.target.value })
                         }
                         required
                         placeholder="John Doe"
                         className="w-full px-4 py-2 bg-background border-2 border-foreground rounded-none focus:outline-none focus:bg-foreground focus:text-background text-foreground font-medium transition-all placeholder:text-foreground/50"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm text-foreground font-bold">Email</label>
                       <input
                         type="email"
                         value={formData.email}
                         onChange={(e) =>
                           setFormData({ ...formData, email: e.target.value })
                         }
                         required
                         placeholder="john@example.com"
                         className="w-full px-4 py-2 bg-background border-2 border-foreground rounded-none focus:outline-none focus:bg-foreground focus:text-background text-foreground font-medium transition-all placeholder:text-foreground/50"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm text-foreground font-bold">Message</label>
                   <textarea
                     value={formData.message}
                     onChange={(e) =>
                       setFormData({ ...formData, message: e.target.value })
                     }
                     required
                     rows={5}
                     placeholder="Hello, I'd like to talk about..."
                     className="w-full px-4 py-2 bg-background border-2 border-foreground rounded-none focus:outline-none focus:bg-foreground focus:text-background text-foreground font-medium transition-all resize-none placeholder:text-foreground/50"
                   />
                 </div>

                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full py-3 bg-foreground text-background font-bold rounded-none hover:bg-background hover:text-foreground border-2 border-transparent hover:border-foreground transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                 >
                   {isSubmitting ? (
                     <>
                       <span className="animate-spin text-lg">⟳</span>
                       <span>Sending...</span>
                     </>
                   ) : (
                     <>
                       <span>Send Message</span>
                       <span>→</span>
                     </>
                   )}
                 </button>

                 {submitted && (
                   <div className="p-3 bg-background border-2 border-foreground rounded-none text-foreground text-sm flex items-center justify-center gap-2 font-bold">
                     <span>✓</span>
                     <span>Message sent successfully!</span>
                   </div>
                 )}
               </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
               <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-foreground font-bold">~/</span> Connect
               </h3>
               <div className="prose prose-invert max-w-none text-foreground font-medium mb-8">
                  <p>
                     Currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                  </p>
               </div>

               <div className="space-y-4">
                  {/* Email */}
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-4 rounded-none bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-all group">
                     <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background group-hover:bg-background group-hover:text-foreground border-2 border-transparent group-hover:border-background transition-colors">
                        @
                     </div>
                     <div>
                        <div className="text-xs text-foreground group-hover:text-background uppercase tracking-wider font-bold">Email</div>
                        <div className="text-foreground group-hover:text-background font-bold">{profile.email}</div>
                     </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-none bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-all group">
                     <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background group-hover:bg-background group-hover:text-foreground border-2 border-transparent group-hover:border-background transition-colors">
                        📍
                     </div>
                     <div>
                        <div className="text-xs text-foreground group-hover:text-background uppercase tracking-wider font-bold">Location</div>
                        <div className="text-foreground group-hover:text-background font-bold">{profile.location}</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Social Links */}
             <div className="flex flex-wrap gap-3">
               {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-none bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-all text-sm text-foreground font-bold group"
                  >
                     <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                     <span>{link.name}</span>
                  </a>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
