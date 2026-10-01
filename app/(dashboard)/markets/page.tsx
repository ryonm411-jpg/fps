import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowUpRight, ArrowDownRight, Filter } from "lucide-react";

export default function MarketsPage() {
  const players = [
    { id: "1", name: "Erling Haaland", club: "Manchester City", pos: "ST", price: 34.50, change: 5.20, bid: 34.40, ask: 34.60, spread: 0.20, volume: 42100 },
    { id: "2", name: "Kylian Mbappé", club: "Real Madrid", pos: "LW", price: 36.80, change: 3.15, bid: 36.70, ask: 36.90, spread: 0.20, volume: 38900 },
    { id: "3", name: "Jude Bellingham", club: "Real Madrid", pos: "CAM", price: 29.40, change: 4.10, bid: 29.35, ask: 29.45, spread: 0.10, volume: 27300 },
    { id: "4", name: "Bukayo Saka", club: "Arsenal", pos: "RW", price: 24.95, change: 4.21, bid: 24.90, ask: 25.00, spread: 0.10, volume: 18450 },
    { id: "5", name: "Vinícius Júnior", club: "Real Madrid", pos: "LW", price: 31.20, change: -1.25, bid: 31.10, ask: 31.30, spread: 0.20, volume: 22100 },
    { id: "6", name: "Phil Foden", club: "Manchester City", pos: "CAM", price: 26.50, change: 2.10, bid: 26.40, ask: 26.60, spread: 0.20, volume: 15600 },
    { id: "7", name: "Florian Wirtz", club: "Bayer Leverkusen", pos: "CAM", price: 22.80, change: 6.80, bid: 22.70, ask: 22.90, spread: 0.20, volume: 19800 },
    { id: "8", name: "Lamine Yamal", club: "Barcelona", pos: "RW", price: 28.10, change: 8.45, bid: 28.00, ask: 28.20, spread: 0.20, volume: 54200 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Football Player Markets
          </h1>
          <p className="text-sm text-text-secondary">
            Continuous limit-order markets for global football players
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-text-secondary font-mono">
            <span className="h-2 w-2 rounded-full bg-accent-success animate-pulse" />
            <span>8 MARKETS ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Market Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-surface border-border">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs uppercase font-mono">Total 24h Volume</CardDescription>
            <CardTitle className="text-xl font-mono font-bold">$238,450.00</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <span className="text-xs text-accent-success font-mono font-semibold">+14.2% from yesterday</span>
          </CardContent>
        </Card>

        <Card className="bg-surface border-border">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs uppercase font-mono">Market Index</CardDescription>
            <CardTitle className="text-xl font-mono font-bold">1,482.40</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <span className="text-xs text-accent-success font-mono font-semibold">+1.84% (24h)</span>
          </CardContent>
        </Card>

        <Card className="bg-surface border-border">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs uppercase font-mono">Top Gainer</CardDescription>
            <CardTitle className="text-xl font-semibold">Lamine Yamal</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <span className="text-xs text-accent-success font-mono font-semibold">+8.45% ($28.10)</span>
          </CardContent>
        </Card>

        <Card className="bg-surface border-border">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs uppercase font-mono">Active Traders</CardDescription>
            <CardTitle className="text-xl font-mono font-bold">1,248</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <span className="text-xs text-text-muted font-mono">Continuous order-matching</span>
          </CardContent>
        </Card>
      </div>

      {/* Markets Table */}
      <Card className="border-border bg-surface overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-elevated/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search players, clubs, or positions..."
              className="w-full rounded-md border border-border bg-surface pl-9 pr-4 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary font-mono"
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
            <Filter className="h-3.5 w-3.5 text-text-muted" />
            <span>SORT: HIGHEST VOLUME</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase font-mono text-text-muted bg-base/60">
                <th className="py-3 px-4">Player</th>
                <th className="py-3 px-4">Position</th>
                <th className="py-3 px-4 text-right">Price</th>
                <th className="py-3 px-4 text-right">24h Change</th>
                <th className="py-3 px-4 text-right hidden md:table-cell">Bid</th>
                <th className="py-3 px-4 text-right hidden md:table-cell">Ask</th>
                <th className="py-3 px-4 text-right hidden lg:table-cell">Spread</th>
                <th className="py-3 px-4 text-right">24h Volume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 font-mono">
              {players.map((p) => {
                const isPositive = p.change >= 0;
                return (
                  <tr
                    key={p.id}
                    className="hover:bg-elevated/60 transition-colors cursor-pointer"
                  >
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-text-primary font-sans">{p.name}</div>
                      <div className="text-xs text-text-muted">{p.club}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <Badge variant="secondary" className="font-mono text-[11px]">
                        {p.pos}
                      </Badge>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-text-primary">
                      ${p.price.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span
                        className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                          isPositive ? "text-accent-success" : "text-accent-danger"
                        }`}
                      >
                        {isPositive ? (
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        ) : (
                          <ArrowDownRight className="h-3.5 w-3.5" />
                        )}
                        {isPositive ? `+${p.change.toFixed(2)}%` : `${p.change.toFixed(2)}%`}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-text-secondary hidden md:table-cell">
                      ${p.bid.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 text-right text-text-secondary hidden md:table-cell">
                      ${p.ask.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 text-right text-text-muted hidden lg:table-cell">
                      ${p.spread.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 text-right text-text-primary">
                      {p.volume.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
