import React from "react";
import Link from "next/link";

export default function TheLastForestOnEarth() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">The Last Forest On Earth: UX Builder (Figma to MVP)</h1>
      <h2 className="text-3xl font-semibold mb-6">What is the UX Builder?</h2>
      <p className="mb-4">
        The UX Builder is a Figma-to-deployment storytelling prototype that integrates GPT + Notion + Firestore.
      </p>
      <p className="mb-4">
        <strong>Stack:</strong>
        <ul className="list-disc list-inside">
          <li>Figma</li>
          <li>Vercel</li>
          <li>Azure Functions</li>
          <li>Firebase</li>
          <li>Notion API</li>
        </ul>
      </p>
      <p className="mb-4">
        <strong>GitHub Repo:</strong> TBD
      </p>
      <p className="mb-4">
        <strong>Live Demo:</strong> TBD
      </p>
      <h3 className="text-3xl font-semibold mb-6">What Does the UX Builder Do?</h3>
      <p className="mb-4">
        The UX Builder is a rapid-prototyped quest engine and solarpunk storytelling UI, built with agile UX workflows and GPT-enhanced design patterns.
      </p>
      <h4 className="text-3xl font-semibold mb-6">How Does the RE:GROW AI Agent Utilize AI?</h4>
      <p className="mb-4">
        The UX Builder utilizes the following:
        <ul className="list-disc list-inside">
          <li>Demonstrates product innovation lifecycle</li>
          <li>Figma-to-frontend delivery</li>
          <li>Immersive learning / engagement UX</li>
        </ul>
      </p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}
