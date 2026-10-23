"use client";

import { Card, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cloudLab } from "@/data";

export function CloudLab() {
  const sections = [
    { title: "AWS", icon: "☁️", items: cloudLab.aws },
    { title: "Linux", icon: "🐧", items: cloudLab.linux },
    { title: "Docker", icon: "🐳", items: cloudLab.docker },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="space-y-8"
    >
      {sections.map((section) => (
        <motion.div key={section.title} variants={fadeInUp}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{section.icon}</span>
            <h3 className="text-2xl font-semibold">{section.title}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {section.items.map((item, index) => (
              <Card key={index} hover>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
