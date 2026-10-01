"use client";

import { useUser } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Calendar, Key } from "lucide-react";

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Trader Profile
        </h1>
        <p className="text-sm text-text-secondary">
          Manage your verified trader identity and authentication details
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border bg-surface md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Identity & Credentials</CardTitle>
            <CardDescription className="text-xs">
              Authenticated securely via Clerk provider
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl">
                {user?.firstName ? user.firstName[0] : "T"}
              </div>
              <div>
                <div className="font-semibold text-text-primary text-base">
                  {user?.fullName || "Verified Trader"}
                </div>
                <div className="text-xs text-text-muted font-mono">
                  {user?.primaryEmailAddress?.emailAddress || "user@domain.com"}
                </div>
                <Badge variant="success" className="mt-1 text-[10px]">
                  VERIFIED SESSION
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="rounded-lg bg-base p-3 border border-border">
                <div className="text-text-muted text-[10px] uppercase">USER ID</div>
                <div className="text-text-primary font-semibold mt-0.5 truncate">
                  {user?.id || "usr_dev_foundational"}
                </div>
              </div>
              <div className="rounded-lg bg-base p-3 border border-border">
                <div className="text-text-muted text-[10px] uppercase">STARTING BALANCE</div>
                <div className="text-accent-success font-semibold mt-0.5">
                  $10,000.00 VIRTUAL
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-surface">
          <CardHeader>
            <CardTitle className="text-base">Security Boundaries</CardTitle>
            <CardDescription className="text-xs">
              System access protections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent-success shrink-0" />
              <span>Server-derived accounting invariants</span>
            </div>
            <div className="flex items-center gap-2">
              <Key className="h-4 w-4 text-primary shrink-0" />
              <span>JWT session tokens & Clerk middleware</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent-warning shrink-0" />
              <span>Anti-negative balance locks</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
