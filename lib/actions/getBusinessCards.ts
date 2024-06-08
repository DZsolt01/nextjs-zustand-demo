"use server";

import businessCardC, {
  BusinessCardProps,
} from "@/components/BusinessCard/businessCardc";

export default async function getBusinessCards(): Promise<BusinessCardProps[]> {
  //TODO implement fetching from database
  return Promise.resolve(businessCardC);
}
