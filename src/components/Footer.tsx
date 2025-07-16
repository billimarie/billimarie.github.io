// components/Footer.tsx
"use client";

import Link from "next/link";
import { Home, Folder, Info, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md">
      <nav className="flex justify-around items-center h-16">
        <NavItem href="/" label="Home" icon={<Home size={20} />} />
        <NavItem href="/projects" label="Projects" icon={<Folder size={20} />} />
        <NavItem href="/about" label="About" icon={<Info size={20} />} />
        <NavItem href="/contact" label="Contact" icon={<Mail size={20} />} />
      </nav>
    </footer>
  );
}

function NavItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={href} className="flex flex-col items-center text-gray-700 hover:text-black">
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
}