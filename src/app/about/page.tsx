import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <p className="mb-4">
        Billimarie is a creative technologist, AI engineer, and regenerative climate organizer.</p>
        <p className="mb-4">She is passionate about reimaginging how technology can uplift community in service of restoring ecosystems across Earth.</p>
        <p className="mb-4">Her work bridges full-stack engineering, LLM-powered assistants, low-code platforms, and solarpunk-inspired UX design.</p>
        
        <p className="mb-4"><strong>Websites</strong></p>
        
        <ul className="list-disc list-inside mb-4">
        <li><Link href="https://billimarie.com" target="_blank" className="font-semibold">Billimarie.com</Link>: An archive of personal and professional projects.</li>
        <li><Link href="https://foreverystaratree.org" target="_blank" className="font-semibold">For Every Star, A Tree</Link>: A regenerative nonprofit ecofarm on a mission to cultivate desertified land into healthy soil.</li>
        <li><Link href="https://starry-night-skoolie.vercel.app" target="_blank" className="font-semibold">Starry Night Skoolie</Link>: A unique Airbnb eco-stay. 100% of proceeds go toward direct conservation efforts.</li>
        </ul>

        <Link href="/">
            <span className="text-blue-600 underline">← Back to projects</span>
        </Link>
    </main>
  );
}
