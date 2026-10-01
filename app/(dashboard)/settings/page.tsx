import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Activity } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Platform Settings & Environment
        </h1>
        <p className="text-sm text-text-secondary">
          Configure interface preferences, market notifications, and diagnostics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border bg-surface">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">Persistence & Runtime</CardTitle>
            </div>
            <CardDescription className="text-xs">
              System health and database configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-text-muted">ORM:</span>
              <span className="text-text-primary font-semibold">Prisma v6 + PostgreSQL</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-text-muted">FRAMEWORK:</span>
              <span className="text-text-primary font-semibold">Next.js App Router</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-text-muted">AUTHENTICATION:</span>
              <span className="text-text-primary font-semibold">Clerk Session Guard</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">OBSERVABILITY:</span>
              <span className="text-text-primary font-semibold">Sentry + PostHog</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-surface">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-accent-success" />
              <CardTitle className="text-base">Diagnostics Status</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Active engineering invariants & safety monitors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span className="text-text-secondary">Protected Routes:</span>
              <Badge variant="success">ENABLED</Badge>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span className="text-text-secondary">Double-Entry Ledger:</span>
              <Badge variant="success">ACTIVE</Badge>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span className="text-text-secondary">Virtual Boundary:</span>
              <Badge variant="warning">NO REAL MONEY</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Sentry Error Capture:</span>
              <Badge variant="outline">READY</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
