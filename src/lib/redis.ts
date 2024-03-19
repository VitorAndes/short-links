import { createClient } from "redis";

export const redis = createClient({
  url: "redis://default:72c6259f429b4fc4bdade5ac7b97f648@ultimate-liger-46592.upstash.io:46592",
});

redis.connect();
