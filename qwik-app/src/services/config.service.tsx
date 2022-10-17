import { Config } from "~/models/Config.interface";

export function getRuntimeConfig(): Config {
  const configuration: Config = { apiEndPoint: getApiEndPoint() };
  return configuration;
}

function getApiEndPoint(): string {
  return location.hostname === "localhost" ? "http://localhost:8080" : "";
}
