import type { inferProcedureInput } from "@trpc/server";
import { expect, test } from "vitest";

import { type AppRouter, appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";

type Input = inferProcedureInput<AppRouter["post"]["hello"]>;

test("example router", async () => {
  const headers = new Headers();
  const ctx = await createTRPCContext({ headers });
  const caller = appRouter.createCaller(ctx);
  const input: Input = {
    text: "test",
  };

  const example = await caller.post.hello(input);

  expect(example).toMatchObject({ greeting: "Hello test" });
});
