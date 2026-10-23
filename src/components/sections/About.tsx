"use client";

import { Card } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "B.Tech in Information Technology (Final Year)",
    },
    {
      icon: "🎯",
      title: "Current Focus",
      description: "High-performance backend systems & distributed cloud services",
    },
    {
      icon: "💻",
      title: "Problem Solving",
      description: "Data Structures & Algorithms, System Design basics",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="grid md:grid-cols-2 gap-8"
    >
      <motion.div variants={fadeInUp} className="space-y-4">
        <p className="text-muted leading-relaxed">
          I'm a final-year B.Tech IT student passionate about building practical
          software systems. My journey in software development started with a
          curiosity for how things work, which evolved into a deep interest in
          backend engineering, cloud technologies, and AI/ML applications.
        </p>
        <p className="text-muted leading-relaxed">
          I love tackling complex problems and turning ideas into reality through
          code. Whether it's optimizing database queries, deploying scalable
          services on the cloud, or training ML models for real-world applications,
          I'm always eager to learn and build.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {highlights.map((highlight, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card hover className="h-full">
              <div className="text-3xl mb-3">{highlight.icon}</div>
              <h3 className="font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted">{highlight.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
