import { getRuntimeConfig } from "./config.service";

export function getCompanyDetails(): Promise<any> {
  const companyDetailsRequest = new URL(
    `${getRuntimeConfig().apiEndPoint}/companyDetails`
  );
  companyDetailsRequest.searchParams.set("companyDetails", "blmediagroup");
  return fetch(companyDetailsRequest);
}
