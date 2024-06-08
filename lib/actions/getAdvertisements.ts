"use server";

import advertisementMock from "@/components/Advertisment/mockAdvertisement";
import { AdvertisementProps } from "@/components/Advertisment/types";

export default async function getAdvertisements(): Promise<
  AdvertisementProps[]
> {
  //TODO implement fetching from database
  return Promise.resolve(advertisementMock);
}
