// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { SupabaseClient } from "@supabase/supabase-js";
import { SupabaseIntegration } from "@supabase/sentry-js-integration";

Sentry.init({
  dsn: "https://48729b85799679d2563b685a53c96fc9@o673219.ingest.sentry.io/4506789483773952",
  tracesSampleRate: 1,
  debug: true,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    new SupabaseIntegration(SupabaseClient, {
      tracing: true,
      breadcrumbs: true,
      errors: true,
    }),
  ],
});
