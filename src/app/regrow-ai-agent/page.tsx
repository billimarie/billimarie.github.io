import React from "react";
import Link from "next/link";

export default function RegrowAIAgent() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">RE:GROW AI Agent for Climate Resilience</h1>
      <h2 className="text-3xl font-semibold mb-6">What Is the RE:GROW AI Agent?</h2>
      <p className="mb-4">
        RE:GROW AI Agent is a field-data processing tool using voice, vision, and GPT for ecological disaster response.
      </p>
      <p className="mb-4">
        <strong>Stack:</strong>
        <ul className="list-disc list-inside">
          <li>Azure Functions</li>
          <li>GPT-4</li>
          <li>Computer Vision</li>
          <li>Power Automate</li>
          <li>Event Grid</li>
        </ul>
      </p>
      <p className="mb-4">
        <strong>GitHub Repo:</strong> TBD
      </p>
      <p className="mb-4">
        <strong>Live Demo:</strong> TBD
      </p>
      <h3 className="text-3xl font-semibold mb-6">What Does the RE:GROW AI Agent Do?</h3>
      <p className="mb-4">
        RE:GROW AI Agent assists as a post-fire restoration tool. It takes in field-submitted voice and image data, analyzes with AI, then routes actions via automated flows.
      </p>
      <h4 className="text-3xl font-semibold mb-6">How Does the RE:GROW AI Agent Utilize AI?</h4>
      <p className="mb-4">
        RE:GROW AI Agent utilizes the following:
        <ul className="list-disc list-inside">
          <li>AI for grid and ecosystem resilience</li>
          <li>Multimodal (image, voice, NLP)</li>
          <li>Agentic + event-driven architecture</li>
        </ul>
      </p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}
