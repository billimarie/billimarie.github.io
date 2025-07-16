import React from "react";
import Link from "next/link";

export default function EcoCopilot() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">EcoCopilot</h1>
      <h2 className="text-3xl font-semibold mb-6">What Is EcoCopilot?</h2>
      <p className="mb-4">
        EcoCopilot is a RAG-powered assistant trained on volunteer & guest materials for regenerative climate action.
      </p>
      <p className="mb-4">
        <strong>Stack:</strong>
        <ul className="list-disc list-inside">
          <li>Azure OpenAI</li>
          <li>Cognitive Search</li>
          <li>RAG</li>
          <li>Copilot Studio</li>
          <li>Node.js</li>
          <li>Power Automate</li>
        </ul>
      </p>
      <p className="mb-4">
        <strong>GitHub Repo:</strong> TBD
      </p>
      <p className="mb-4">
        <strong>Live Demo:</strong> TBD
      </p>
      <h3 className="text-3xl font-semibold mb-6">What Does EcoCopilot Do?</h3>
      <p className="mb-4">
        EcoCoPilot is a multilingual chatbot trained on internal documents (FAQs, checklists, native plants, safety protocols) to assist volunteers and guests across our regenerative spaces.
      </p>
      <h4 className="text-3xl font-semibold mb-6">How Does EcoCopilot Utilize AI?</h4>
      <p className="mb-4">
        EcoCopilot utilizes the following:
        <ul className="list-disc list-inside">
          <li>Demonstrates RAG + GPT on enterprise data</li>
          <li>Deployable to Teams, Web, or internal ops</li>
          <li>Low-code + pro-code integration</li>
        </ul>
      </p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}