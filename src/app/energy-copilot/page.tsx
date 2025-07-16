import React from "react";
import Link from "next/link";

export default function EnergyCopilot() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Energy Copilot: Public-Facing FAQ Chatbot</h1>
      <h2 className="text-3xl font-semibold mb-6">What Is Energy Copilot?</h2>
      <p className="mb-4">
      Copilot Studio bot answering clean energy FAQs for customers and internal staff.
      </p>
      <p className="mb-4">
        <strong>Stack:</strong>
        <ul className="list-disc list-inside">
          <li>Copilot Studio</li>
          <li>Power Platform</li>
          <li>GPT-4</li>
          <li>SharePoint</li>
          <li>Cognitive Search</li>
        </ul>
      </p>
      <p className="mb-4">
        <strong>GitHub Repo:</strong> TBD
      </p>
      <p className="mb-4">
        <strong>Live Demo:</strong> TBD
      </p>
      <h3 className="text-3xl font-semibold mb-6">What Does Energy Copilot Do?</h3>
      <p className="mb-4">
        Energy Copilot is a conversational AI trained on clean energy FAQs to support public or employee engagement (e.g. shutoff notices, rebates, battery programs).
      </p>
      <h4 className="text-3xl font-semibold mb-6">How Does Energy Copilot Utilize AI?</h4>
      <p className="mb-4">
        Energy Copilot utilizes the following:
        <ul className="list-disc list-inside">
          <li>Scalable Copilot Studio implementation</li>
          <li>Combines AI + compliance-based content</li>
          <li>Enhances customer experience</li>
        </ul>
      </p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}