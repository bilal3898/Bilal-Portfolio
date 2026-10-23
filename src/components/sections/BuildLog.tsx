"use client";

import { Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { buildLog } from "@/data";

const categoryColors: Record<string, string> = {
  Development: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  Learning: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  Deployment: "bg-green-500/10 border-green-500/20 text-green-400",
  "Problem Solving": "bg-orange-500/10 border-orange-500/20 text-orange-400",
};

export function BuildLog() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative"
    >
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">
        {buildLog.map((log, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative pl-12"
          >
            <div className="absolute left-2.5 top-2 w-3 h-3 bg-accent rounded-full border-2 border-background" />
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Badge
                  variant="outline"
                  className={categoryColors[log.category]}
                >
                  {log.category}
                </Badge>
                <span className="text-sm text-muted">{log.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{log.title}</h3>
              <p className="text-muted">{log.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
