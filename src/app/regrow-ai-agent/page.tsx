import React from "react";
import Link from "next/link";

export default function RegrowAIAgent() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">RE:GROW AI Agent</h1>
      <p className="mb-4">
        A field-data processing tool using voice, vision, and GPT for ecological disaster response.
      </p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}
