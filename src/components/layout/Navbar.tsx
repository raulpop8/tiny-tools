"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `rounded-lg px-3 py-1.5 text-sm transition ${
      pathname === path
        ? "bg-foreground text-background"
        : "hover:bg-muted"
    }`;

  return (
    <header className="border-b border-border bg-background">
      <nav className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-2">
          <Link href="/" className="font-bold text-sm">
            Utility Hub
          </Link>

          <div className="flex gap-2">
            <Link href="/tools" className={linkClass("/tools")}>
              Tools
            </Link>

            <Link href="/games" className={linkClass("/games")}>
              Games
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
