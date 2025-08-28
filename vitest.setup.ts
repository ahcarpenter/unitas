import { vi } from "vitest";

// Mock the auth function specifically
vi.mock("@/server/auth", () => ({
  auth: vi.fn(() => Promise.resolve(null)),
}));

// Mock environment variables - set all required env vars
process.env.AUTH_SECRET = "test-secret";
process.env.AUTH_TRUST_HOST = "true";
process.env.AUTH_GOOGLE_ID = "test-google-id";
process.env.AUTH_GOOGLE_SECRET = "test-google-secret";
process.env.DATABASE_URL = "mysql://test:test@localhost:3306/test";
