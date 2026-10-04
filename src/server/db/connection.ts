import "server-only";
import mongoose from "mongoose";
import { readEnv } from "@/config/env";
const state = globalThis as typeof globalThis & {
  mongoPromise?: Promise<typeof mongoose>;
};
export async function connectDatabase() {
  const env = readEnv();
  if (!env.MONGODB_URI) throw new Error("Database is not configured");
  if (!state.mongoPromise)
    state.mongoPromise = mongoose
      .connect(env.MONGODB_URI, {
        dbName: env.MONGODB_DB,
        autoIndex: false,
        serverSelectionTimeoutMS: 5000,
      })
      .catch(() => {
        state.mongoPromise = undefined;
        throw new Error("Database unavailable");
      });
  return state.mongoPromise;
}
