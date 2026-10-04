import test from "node:test";
import assert from "node:assert/strict";
import { readEnv } from "../src/config/env";

test("the scaffold runs without database credentials", () => {
  assert.equal(readEnv({}).MONGODB_URI, undefined);
  assert.equal(readEnv({ MONGODB_URI: "" }).MONGODB_URI, undefined);
  assert.equal(readEnv({}).APP_ORIGIN, "http://localhost:3000");
});

test("invalid environment values fail without exposing their contents", () => {
  assert.throws(() => readEnv({ MONGODB_URI: "private-invalid-value" }), {
    message: "Invalid application environment configuration",
  });
  assert.throws(() => readEnv({ APP_ORIGIN: "not-a-url" }));
});
