// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { SupabaseClient } from "@supabase/supabase-js";
import { SupabaseIntegration } from "@supabase/sentry-js-integration";

Sentry.init({
  dsn: "https://48729b85799679d2563b685a53c96fc9@o673219.ingest.sentry.io/4506789483773952",
  integrations: [
    new SupabaseIntegration(SupabaseClient, {
      tracing: true,
      breadcrumbs: true,
      errors: true,
    }),
  ],
  tracesSampleRate: 1,
  debug: true,
});
