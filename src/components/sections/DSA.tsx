"use client";

import { Card, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { dsaStats } from "@/data";
import { ExternalLink } from "lucide-react";

export function DSA() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="space-y-8"
    >
      <motion.div
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Card hover>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">LeetCode</h3>
              <Badge variant="accent">{dsaStats.leetCode.solved}+ Solved</Badge>
            </div>
            <p className="text-muted mb-4">
              {dsaStats.leetCode.solved}+ problems solved across various
              difficulty levels
            </p>
            <a
              href={dsaStats.leetCode.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              View Profile
            </a>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card hover>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">GeeksforGeeks</h3>
              <Badge variant="accent">{dsaStats.geeksForGeeks.status}</Badge>
            </div>
            <p className="text-muted mb-4">
              {dsaStats.geeksForGeeks.status} with focus on{" "}
              {dsaStats.geeksForGeeks.focus.join(" & ")}
            </p>
            {dsaStats.geeksForGeeks.profile && (
              <a
                href={dsaStats.geeksForGeeks.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                View Profile
              </a>
            )}
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card>
          <h3 className="text-lg font-semibold mb-4">Core Focus Areas</h3>
          <div className="flex flex-wrap gap-2">
            {dsaStats.coreTopics.map((topic) => (
              <Badge key={topic} variant="outline">
                {topic}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
