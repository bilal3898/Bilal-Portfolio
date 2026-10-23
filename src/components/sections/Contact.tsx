"use client";

import { useState } from "react";
import { Button, Card } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Code, Link2, Mail, Phone, Trophy } from "lucide-react";
import { profile } from "@/data";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="grid md:grid-cols-2 gap-8"
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Let's build something together.</h2>
        <p className="text-muted">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            <Mail className="w-5 h-5 text-accent" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted">{profile.email}</p>
            </div>
          </a>
          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted">{profile.phone}</p>
              </div>
            </a>
          )}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            <Link2 className="w-5 h-5 text-accent" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-muted">Connect with me</p>
            </div>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            <Code className="w-5 h-5 text-accent" />
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-sm text-muted">Check my work</p>
            </div>
          </a>
          {profile.leetcode && (
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <Trophy className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">LeetCode</p>
                <p className="text-sm text-muted">Check my solutions</p>
              </div>
            </a>
          )}
        </div>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              placeholder="Your message..."
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}
