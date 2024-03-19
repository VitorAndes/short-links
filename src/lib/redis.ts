import { createClient } from "redis";

export const redis = createClient({
  // secret
});

redis.connect();
