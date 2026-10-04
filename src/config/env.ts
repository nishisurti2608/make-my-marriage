import { z } from "zod";

const schema = z.object({
  MONGODB_URI: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string()
      .regex(/^mongodb(?:\+srv)?:\/\//)
      .optional(),
  ),
  MONGODB_DB: z.string().min(1).default("make_my_marriage"),
  APP_ORIGIN: z.url().default("http://localhost:3000"),
});

export function readEnv(
  input: Record<string, string | undefined> = process.env,
) {
  const result = schema.safeParse(input);
  if (!result.success)
    throw new Error("Invalid application environment configuration");
  return result.data;
}
