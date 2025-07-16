import React from "react";
import Link from "next/link";

export default function EcoCopilot() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">EcoCopilot</h1>
      <p className="mb-4">
        A RAG-powered assistant trained on volunteer & guest materials for regenerative spaces.
      </p>
      {/* You can add more details, images, or components here */}
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}
