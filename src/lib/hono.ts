import type { AppType } from "@/server/hono";
import { hc } from "hono/client";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
export const hono = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);