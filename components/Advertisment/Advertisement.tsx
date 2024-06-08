"use client";

import useAdvertisementStyle from "@/lib/hooks/useAdvertisementStyle";
import { useAdvertisementStore } from "@/providers/advertisement.store.provider";
import { useEffect } from "react";
import { AdvertisementProps } from "./types";

const Advertisement = ({ index }: { index: number }) => {
  function constructStyle(advertisement: AdvertisementProps) {
    let style = "";
    if (advertisement?.colspan) {
      style += `col-span-${advertisement.colspan} `;
    }
    if (advertisement?.rowspan) {
      style += `row-span-${advertisement.rowspan}`;
    }
    return style.trim(); // trim to remove trailing space if exists
  }
  const { advertisements, nextAdvertisment, incrementAdvertisement } =
    useAdvertisementStore((state) => state);

  // You can change the nextAdvertisment to `index` if you want to see the layout idea
  const style = constructStyle(advertisements[nextAdvertisment]);

  useEffect(() => {
    console.log("useEffect called");
    incrementAdvertisement();
  }, [incrementAdvertisement]); // Empty dependency array to run only once on mount

  console.log("Component rendered");
  console.log("Next Advertisement Index:", nextAdvertisment);

  return (
    <div
      key={nextAdvertisment}
      className={`flex rounded-lg bg-neutral-500 ${style}`}
    >
      {/* Render the advertisement content here */}
    </div>
  );
};

export default Advertisement;
