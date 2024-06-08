"use client";
import { AdvertisementProps } from "@/components/Advertisment/types";
import React from "react";
import { useEffect } from "react";

export default function useAdvertisementStyle(
  advertisement: AdvertisementProps
) {
  const [style, setStyle] = React.useState("");

  useEffect(() => {
    if (!advertisement) return;

    let newStyle = "";
    if (advertisement.colspan) {
      newStyle += `col-span-${advertisement.colspan} `;
    }
    if (advertisement.rowspan) {
      newStyle += `row-span-${advertisement.rowspan}`;
    }
    setStyle(newStyle.trim()); // Trim to remove trailing space if existst index
  }, [advertisement]);

  return style;
}
