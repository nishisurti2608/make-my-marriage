import { loadEnvConfig } from "@next/env";
import mongoose from "mongoose";
import { connectDatabase } from "../src/server/db/connection";
loadEnvConfig(process.cwd());
async function main() {
  try {
    await connectDatabase();
    await mongoose.connection.db?.admin().ping();
    console.info("Database connection verified.");
  } catch {
    console.error(
      "Database check failed. Check configuration and Atlas network access.",
    );
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}
void main();
