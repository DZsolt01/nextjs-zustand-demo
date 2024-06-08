"use client";

import { AdvertisementProps } from "@/components/Advertisment/types";
import { useEffect, useState } from "react";

export default function useAdvertisementStyle(
  advertisement: AdvertisementProps,
) {
  const [style, setStyle] = useState("");

  useEffect(() => {
    let newStyle = "";
    if (advertisement?.colspan) {
      newStyle += `col-span-${advertisement.colspan} `;
    }
    if (advertisement?.rowspan) {
      newStyle += `row-span-${advertisement.rowspan}`;
    }
    setStyle(newStyle.trim()); // trim to remove trailing space if exists
  }, [advertisement]);

  console.log({ style: "teszt", advertisement });
  return style;
}
