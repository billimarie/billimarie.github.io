import React from "react";
import Link from "next/link";

export default function TheLastForestOnEarth() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Last Forest UX Builder</h1>
      <p className="mb-4">
        A Figma-to-deployment storytelling prototype that integrates GPT + Notion + Firestore.
      </p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}
