import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, Clock, ShieldCheck } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PortfolioPage() {
  const virtualCash = 10000.00;
  const portfolioValue = 10000.00;


  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Virtual Portfolio
        </h1>
        <p className="text-sm text-text-secondary">
          Manage your virtual cash reserves, player holdings, and execution ledger
        </p>
      </div>

      {/* Account Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-surface border-border">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs uppercase font-mono">Total Account Value</CardDescription>
            <CardTitle className="text-2xl font-mono font-bold text-text-primary">
              {formatCurrency(portfolioValue)}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <span className="text-xs text-text-muted font-mono">100% Virtual Money</span>
          </CardContent>
        </Card>

        <Card className="bg-surface border-border">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs uppercase font-mono">Available Virtual Cash</CardDescription>
            <CardTitle className="text-2xl font-mono font-bold text-accent-success">
              {formatCurrency(virtualCash)}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <span className="text-xs text-text-muted font-mono">Ready for limit & market orders</span>
          </CardContent>
        </Card>

        <Card className="bg-surface border-border">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs uppercase font-mono">Unrealized P&L</CardDescription>
            <CardTitle className="text-2xl font-mono font-bold text-text-muted">
              $0.00 (0.00%)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <span className="text-xs text-text-muted font-mono">No active open positions</span>
          </CardContent>
        </Card>
      </div>

      {/* Holdings & Ledger Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Holdings */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-border bg-surface">
            <CardHeader className="border-b border-border pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Player Holdings</CardTitle>
                  <CardDescription className="text-xs">Your current player equity positions</CardDescription>
                </div>
                <Badge variant="outline" className="font-mono text-xs">0 ASSETS</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8 text-center text-text-muted font-mono text-xs">
              <PieChart className="mx-auto h-8 w-8 text-text-muted/50 mb-2" />
              <p>No player units held yet.</p>
              <p className="text-[11px] text-text-muted/70 mt-1">Visit Markets to place your first limit or market buy order.</p>
            </CardContent>
          </Card>
        </div>

        {/* Cash Ledger Audit History */}
        <div className="space-y-4">
          <Card className="border-border bg-surface">
            <CardHeader className="border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-success" />
                <CardTitle className="text-base">Cash Ledger</CardTitle>
              </div>
              <CardDescription className="text-xs">Auditable double-entry record</CardDescription>
            </CardHeader>
            <CardContent className="p-4 space-y-3 font-mono text-xs">
              <div className="flex items-start justify-between border-b border-border/50 pb-2.5">
                <div>
                  <div className="font-semibold text-text-primary">Initial Grant</div>
                  <div className="text-[10px] text-text-muted flex items-center gap-1 mt-0.5">
                    <Clock className="h-3 w-3" /> Account Creation
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-accent-success">+$10,000.00</span>
                  <div className="text-[10px] text-text-muted">BAL: $10,000.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
