import React from "react";
import Link from "next/link";

export default function ForestOS() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">ForestOS: Regenerative Ops Dashboard</h1>
      <h2 className="text-3xl font-semibold mb-6">What Is ForestOS?</h2>
      <p className="mb-4">
        A full-stack sustainability tracker for tree plantings, volunteer hours, and carbon offsets.
      </p>
      <p className="mb-4">
        <strong>Stack:</strong>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>Node.js</li>
          <li>Azure Cosmos DB</li>
          <li>Power BI</li>
          <li>GitHub Actions</li>
        </ul>
      </p>
      <p className="mb-4">
        <strong>GitHub Repo:</strong> TBD
      </p>
      <p className="mb-4">
        <strong>Live Demo:</strong> TBD
      </p>
      <h3 className="text-3xl font-semibold mb-6">What Does ForestOS Do?</h3>
      <p className="mb-4">
        ForestOS tracks tree plantings, volunteer hours, carbon estimates, and donations—fully integrated with live reporting and CI/CD deployments.
      </p>
      <h4 className="text-3xl font-semibold mb-6">How Does ForestOS Utilize AI?</h4>
      <p className="mb-4">
        ForestOS utilizes the following:
        <ul className="list-disc list-inside">
          <li>Full-stack architecture</li>
          <li>Sustainability data insights</li>
          <li>Secure cloud-native DevOps pipelines</li>
        </ul>
      </p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to projects</span>
      </Link>
    </main>
  );
}
