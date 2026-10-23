"use client";

import { Button, Badge } from "@/components/ui";
import { Code, Link2, Mail, Phone, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { profile } from "@/data";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <Badge variant="accent" className="mb-4">
            Available for Roles
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted bg-clip-text text-transparent"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-muted mb-4"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-muted mb-8 max-w-2xl mx-auto"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Featured Projects
          </Button>
          {profile.resume ? (
            <Button size="lg" variant="outline" asChild>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          ) : (
            <Button size="lg" variant="outline" disabled>
              View Resume
            </Button>
          )}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            <Code className="w-6 h-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            <Link2 className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          {profile.leetcode && (
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <Trophy className="w-6 h-6" />
            </a>
          )}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted"
        >
          <Badge variant="outline">📍 {profile.location}</Badge>
          <Badge variant="outline">🎓 Class of {profile.graduationYear}</Badge>
          <Badge variant="outline">
            🎯 {profile.targetRoles.join(" • ")}
          </Badge>
        </motion.div>
      </motion.div>
    </section>
  );
}
