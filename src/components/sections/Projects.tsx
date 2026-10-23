"use client";

import { useState } from "react";
import { Card, Badge, Button, Modal } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/data";
import { Project } from "@/types";
import { ExternalLink, Code } from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ["All", "AI/ML", "Backend/Cloud", "Full Stack"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-accent text-background"
                  : "bg-card border border-border text-foreground hover:border-accent/50"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card hover className="h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted hover:text-foreground"
                  >
                    <Code className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.links.caseStudy && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-sm text-muted hover:text-foreground ml-auto"
                    >
                      Case Study →
                    </button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-muted">{selectedProject.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-1 text-muted">
                {selectedProject.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {selectedProject.architecture && (
              <div>
                <h4 className="font-semibold mb-2">Architecture</h4>
                <p className="text-muted">{selectedProject.architecture}</p>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {selectedProject.links.live && (
                <Button asChild>
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                </Button>
              )}
              <Button variant="outline" asChild>
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
