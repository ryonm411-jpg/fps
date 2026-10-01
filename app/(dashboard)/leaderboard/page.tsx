import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal } from "lucide-react";

export default function LeaderboardPage() {
  const topTraders = [
    { rank: 1, username: "ApexTrader", portfolioValue: "$28,450.00", returns: "+184.50%", trades: 142 },
    { rank: 2, username: "TacticalCap", portfolioValue: "$24,120.00", returns: "+141.20%", trades: 98 },
    { rank: 3, username: "ScoutMaster", portfolioValue: "$21,800.00", returns: "+118.00%", trades: 115 },
    { rank: 4, username: "MadridistaAlpha", portfolioValue: "$19,650.00", returns: "+96.50%", trades: 84 },
    { rank: 5, username: "QuantMidfielder", portfolioValue: "$18,200.00", returns: "+82.00%", trades: 67 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Trader Leaderboard
        </h1>
        <p className="text-sm text-text-secondary">
          Top performing virtual portfolios ranked by verified return percentage
        </p>
      </div>

      <Card className="border-border bg-surface overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-elevated/40">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-accent-warning" />
            <span className="text-xs font-mono font-semibold text-text-primary uppercase">All-Time Ranking</span>
          </div>
          <Badge variant="outline" className="font-mono text-[11px]">RESET: SEASON END</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase font-mono text-text-muted bg-base/60">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Trader</th>
                <th className="py-3 px-4 text-right">Portfolio Value</th>
                <th className="py-3 px-4 text-right">Return (%)</th>
                <th className="py-3 px-4 text-right hidden sm:table-cell">Trades</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 font-mono">
              {topTraders.map((trader) => (
                <tr key={trader.rank} className="hover:bg-elevated/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold">
                    {trader.rank === 1 ? (
                      <span className="inline-flex items-center gap-1 text-accent-warning">
                        <Medal className="h-4 w-4" /> #1
                      </span>
                    ) : (
                      `#${trader.rank}`
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-text-primary font-sans">
                    {trader.username}
                  </td>
                  <td className="py-3.5 px-4 text-right text-text-primary font-bold">
                    {trader.portfolioValue}
                  </td>
                  <td className="py-3.5 px-4 text-right text-accent-success font-bold">
                    {trader.returns}
                  </td>
                  <td className="py-3.5 px-4 text-right text-text-secondary hidden sm:table-cell">
                    {trader.trades}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
