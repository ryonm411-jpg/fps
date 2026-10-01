"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TrendingUp,
  Briefcase,
  Bookmark,
  Trophy,
  Newspaper,
  User,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Markets", href: "/markets", icon: TrendingUp },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Watchlist", href: "/watchlist", icon: Bookmark },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r border-border bg-surface text-text-primary",
        className
      )}
    >
      {/* Brand Logo & Terminal Status */}
      <div className="flex h-16 items-center justify-between border-b border-border px-6">
        <Link href="/markets" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-sm">
            FP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wide text-text-primary">
              FOOTBALL MARKET
            </span>
            <span className="font-mono text-[10px] text-text-muted">
              TERMINAL v0.1
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-text-secondary hover:bg-elevated hover:text-text-primary"
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 shrink-0 transition-colors",
                  isActive ? "text-primary" : "text-text-muted group-hover:text-text-primary"
                )}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Terminal Footer Status Indicator */}
      <div className="border-t border-border p-4 bg-base/50">
        <div className="flex items-center justify-between text-xs text-text-muted font-mono">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-success animate-pulse" />
            <span>MARKET OPEN</span>
          </div>
          <span className="text-[10px]">VIRTUAL ONLY</span>
        </div>
      </div>
    </aside>
  );
}
