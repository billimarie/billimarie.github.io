"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "EcoCopilot",
    description:
      "A RAG-powered assistant trained on volunteer & guest materials for regenerative spaces.",
    img: "/placeholder1.jpg",
    link: "/eco-copilot",
  },
  {
    title: "ForestOS Dashboard",
    description:
      "A full-stack sustainability tracker for tree plantings, volunteer hours, and carbon offsets.",
    img: "/placeholder2.jpg",
    link: "/forest-os",
  },
  {
    title: "Energy Copilot",
    description:
      "Copilot Studio bot answering clean energy FAQs for customers and internal staff.",
    img: "/placeholder3.jpg",
    link: "/energy-copilot",
  },
  {
    title: "RE:GROW AI Agent",
    description:
      "A field-data processing tool using voice, vision, and GPT for ecological disaster response.",
    img: "/placeholder4.jpg",
    link: "/regrow-ai-agent",
  },
  {
    title: "The Last Forest On Earth",
    description:
      "A Figma-to-deployment storytelling prototype that integrates GPT + Notion + Firestore.",
    img: "/placeholder5.jpg",
    link: "/the-last-forest-on-earth",
  },
];

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-white px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        AI Engineering Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <Link key={i} href={project.link} passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
                    <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}