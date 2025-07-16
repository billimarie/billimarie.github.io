import React from "react";
import Link from "next/link";

export default function EnergyCopilot() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Energy Copilot</h1>
      <p className="mb-4">
        Copilot Studio bot answering clean energy FAQs for customers and internal staff.
      </p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}
