CREATE TABLE "public"."example_table" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "value" text NOT NULL, "amount" integer, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."example_table" IS E'This is just as example';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
