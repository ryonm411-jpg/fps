"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { DollarSign, Menu } from "lucide-react";

import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

export function Header({ onMobileMenuToggle }: { onMobileMenuToggle?: () => void }) {
  const { user, isLoaded } = useUser();
  const virtualCash = 10000.00; // Foundational starter virtual cash

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-surface/90 px-4 sm:px-6 backdrop-blur-md">
      {/* Mobile Menu Button & Brand */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={onMobileMenuToggle}
          className="rounded-md p-1.5 text-text-secondary hover:bg-elevated hover:text-text-primary"
          aria-label="Toggle Navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
        <span className="font-bold text-sm tracking-wide text-text-primary">
          FP MARKET
        </span>
      </div>

      {/* Market Indicators / Ticker Snapshot */}
      <div className="hidden md:flex items-center gap-6 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-text-muted">INDEX:</span>
          <span className="text-accent-success font-semibold">1,482.40 (+1.84%)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-text-muted">24H VOL:</span>
          <span className="text-text-primary font-semibold">$124,500</span>
        </div>
      </div>

      {/* Right Controls: Virtual Cash, Notifications, User */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Virtual Cash Pill */}
        <div className="flex items-center gap-2 rounded-lg border border-border bg-elevated px-3 py-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-success/20 text-accent-success">
            <DollarSign className="h-3.5 w-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted">
              Virtual Cash
            </span>
            <span className="text-xs font-bold font-mono text-text-primary">
              {formatCurrency(virtualCash)}
            </span>
          </div>
        </div>

        {/* User Account / Auth */}
        <div className="flex items-center gap-2">
          {isLoaded && user ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 rounded-lg border border-border",
                },
              }}
            />
          ) : (
            <Link
              href="/sign-in"
              className="text-xs font-medium text-text-primary hover:text-primary"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
