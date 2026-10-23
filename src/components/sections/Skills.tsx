"use client";

import { Card, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { skills, skillCategories } from "@/data";

const categoryIcons: Record<string, string> = {
  "Programming": "💻",
  "Web & Backend": "🌐",
  "Databases": "🗄️",
  "AI & ML": "🤖",
  "Cloud & DevOps": "☁️",
};

export function Skills() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skillCategories.map((category) => {
        const categorySkills = skills.filter((s) => s.category === category);
        return (
          <motion.div key={category} variants={fadeInUp}>
            <Card hover className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{categoryIcons[category]}</span>
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge key={skill.name} variant="outline">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
