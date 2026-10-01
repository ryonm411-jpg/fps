import * as Sentry from "@sentry/nextjs";

/**
 * Capture an error to Sentry with optional tags and context.
 */
export function captureError(error: unknown, context?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.error("[Sentry Error Log]:", error, context);
  }
  
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.captureException(error, {
      extra: context,
    });
  }
}

/**
 * Capture an informational or audit message to Sentry.
 */
export function captureMessage(message: string, level: Sentry.SeverityLevel = "info", context?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Sentry Message (${level})]:`, message, context);
  }

  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.captureMessage(message, {
      level,
      extra: context,
    });
  }
}
