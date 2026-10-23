"use client";

import { Card, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { achievements } from "@/data";

const typeIcons: Record<string, string> = {
  Certification: "🏆",
  Hackathon: "🚀",
  "Open Source": "💻",
  Academic: "📚",
};

export function Achievements() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {achievements.map((achievement, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card hover className="h-full">
            <div className="text-3xl mb-3">
              {typeIcons[achievement.type]}
            </div>
            <h3 className="font-semibold mb-2">{achievement.title}</h3>
            <p className="text-sm text-muted mb-2">{achievement.issuer}</p>
            <Badge variant="outline" className="text-xs">
              {achievement.date}
            </Badge>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
