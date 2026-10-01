"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

export const POSTHOG_EVENTS = {
  USER_SIGNED_UP: "USER_SIGNED_UP",
  USER_SIGNED_IN: "USER_SIGNED_IN",
  PLAYER_VIEWED: "PLAYER_VIEWED",
  ORDER_CREATED: "ORDER_CREATED",
  ORDER_CANCELLED: "ORDER_CANCELLED",
  TRADE_EXECUTED: "TRADE_EXECUTED",
  PORTFOLIO_VIEWED: "PORTFOLIO_VIEWED",
  WATCHLIST_ADDED: "WATCHLIST_ADDED",
  WATCHLIST_REMOVED: "WATCHLIST_REMOVED",
  LEADERBOARD_VIEWED: "LEADERBOARD_VIEWED",
  NEWS_VIEWED: "NEWS_VIEWED",
  POST_CREATED: "POST_CREATED",
} as const;

export type AnalyticsEvent = keyof typeof POSTHOG_EVENTS;

export function initPostHog() {
  if (typeof window !== "undefined") {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

    if (key) {
      posthog.init(key, {
        api_host: host,
        person_profiles: "identified_only",
        capture_pageview: false, // hand-managed or automatic
        capture_pageleave: true,
      });
    }
  }
}

/**
 * Capture an analytics event without leaking financial/sensitive parameters.
 */
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    if (process.env.NODE_ENV === "development") {
      console.log(`[PostHog Analytics]: ${eventName}`, properties);
    }
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture(eventName, properties);
    }
  }
}

/**
 * PostHog Provider component for the root layout
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return <>{children}</>;
}
