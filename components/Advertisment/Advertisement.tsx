"use client";

import useAdvertisementStyle from "@/lib/hooks/useAdvertisementStyle";
import { AdvertisementProps } from "./types";

const Advertisement = ({
  advertisement,
}: {
  advertisement: AdvertisementProps;
}) => {
  const style = useAdvertisementStyle(advertisement);
  return (
    <div className={`flex rounded-lg bg-neutral-500 ${style}`}>
      {advertisement ? (
        // Render the advertisement content here
        <div>{/* Advertisement content */}</div>
      ) : (
        <div className="text-red-500">Advertisement not found</div>
      )}
    </div>
  );
};

export default Advertisement;
