"use server";
import BusinessCardWrapper from "@/components/BusinessCard/BusinessCardWrapper";
import getBusinessCards from "@/lib/actions/getBusinessCards";
import Image from "next/image";
import getAdvertisements from "@/lib/actions/getAdvertisements";

export default async function Home() {
  const businessCard = await getBusinessCards();
  const advertisements = await getAdvertisements();
  return <BusinessCardWrapper businessCards={businessCard} />;
}
