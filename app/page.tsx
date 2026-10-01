import Link from "next/link";
import { TrendingUp, Shield, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const featuredMarkets = [
    { name: "Erling Haaland", club: "Manchester City", pos: "ST", price: "$34.50", change: "+5.20%", volume: "42,100" },
    { name: "Kylian Mbappé", club: "Real Madrid", pos: "LW", price: "$36.80", change: "+3.15%", volume: "38,900" },
    { name: "Jude Bellingham", club: "Real Madrid", pos: "CAM", price: "$29.40", change: "+4.10%", volume: "27,300" },
    { name: "Bukayo Saka", club: "Arsenal", pos: "RW", price: "$24.95", change: "+4.21%", volume: "18,450" },
  ];

  return (
    <div className="min-h-screen bg-base text-text-primary">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-surface/90 px-6 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
            FP
          </div>
          <span className="font-bold tracking-wide text-sm sm:text-base">
            FOOTBALL PLAYER MARKET
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm">
              Get Started <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono text-primary">
              <span className="h-2 w-2 rounded-full bg-accent-success animate-pulse" />
              <span>STAGE 1 FOUNDATION & APP SHELL ACTIVE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Trade Football Players like <span className="text-primary">Equities</span>.
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Experience the first high-performance, order-book driven football player exchange.
              Analyze on-pitch data, place limit and market orders, and build your virtual portfolio with $10,000 starter capital.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/sign-up">
                <Button size="lg" className="font-semibold glow-blue">
                  Launch Trading Terminal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/markets">
                <Button variant="outline" size="lg">
                  Explore Markets
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent-success" />
                <span>100% Virtual Money</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent-success" />
                <span>Price-Time Priority</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent-success" />
                <span>Deterministic Ledger</span>
              </div>
            </div>
          </div>

          {/* Terminal Mockup Snapshot */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-surface p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="font-mono text-xs text-text-muted ml-2">MARKET_OVERVIEW.LIVE</span>
                </div>
                <Badge variant="success">LIVE STREAM</Badge>
              </div>

              <div className="space-y-3">
                {featuredMarkets.map((player) => (
                  <div
                    key={player.name}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-elevated/80 p-3 hover:border-primary/40 transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-sm text-text-primary">{player.name}</div>
                      <div className="text-xs text-text-muted font-mono">{player.club} • {player.pos}</div>
                    </div>
                    <div className="text-right font-mono">
                      <div className="text-sm font-bold text-text-primary">{player.price}</div>
                      <div className="text-xs font-semibold text-accent-success">{player.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-base p-3 font-mono text-xs border border-border">
                <div className="flex justify-between text-text-secondary">
                  <span>STARTING CASH:</span>
                  <span className="text-accent-success font-bold">$10,000.00</span>
                </div>
                <div className="flex justify-between text-text-muted text-[11px] mt-1">
                  <span>SETTLEMENT:</span>
                  <span>ATOMIC DB TRANSACTIONS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="border-t border-border bg-surface/50 px-6 py-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Institutional-Grade Market Engine
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
              Built with Next.js App Router, PostgreSQL, Prisma, Clerk Authentication, and Sentry observability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-surface border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <CardTitle>Continuous Order Book</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-text-secondary">
                Limit and market orders executed with price-time priority. Strict invariant protection ensures zero negative balances.
              </CardContent>
            </Card>

            <Card className="bg-surface border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-accent-success/10 flex items-center justify-center text-accent-success mb-2">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <CardTitle>Football Fundamentals</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-text-secondary">
                Track player performance, live match statistics, goals, assists, and news updates integrated directly into market views.
              </CardContent>
            </Card>

            <Card className="bg-surface border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-accent-warning/10 flex items-center justify-center text-accent-warning mb-2">
                  <Shield className="h-5 w-5" />
                </div>
                <CardTitle>Deterministic Accounting</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-text-secondary">
                Double-entry auditable cash ledger. All trades, holdings, and order locks execute within ACID database transactions.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-xs text-text-muted font-mono">
        <p>Football Player Trading Market © {new Date().getFullYear()} — Virtual Currency Only. Non-gambling financial simulation.</p>
      </footer>
    </div>
  );
}
