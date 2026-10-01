import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bookmark } from "lucide-react";

export default function WatchlistPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Market Watchlist
        </h1>
        <p className="text-sm text-text-secondary">
          Track high-conviction football players and monitor price actions
        </p>
      </div>

      <Card className="border-border bg-surface">
        <CardHeader>
          <CardTitle className="text-base">Saved Players</CardTitle>
          <CardDescription className="text-xs">
            Star players in the markets view to monitor them here in real time
          </CardDescription>
        </CardHeader>
        <CardContent className="p-12 text-center text-text-muted font-mono text-xs">
          <Bookmark className="mx-auto h-8 w-8 text-text-muted/50 mb-2" />
          <p>Your watchlist is currently empty.</p>
          <p className="text-[11px] text-text-muted/70 mt-1">
            Browse the markets catalog to add players to your tracking list.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
