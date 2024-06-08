"use client";
import React, { useEffect, useMemo, useState } from "react";
import Advertisement from "../Advertisment/Advertisement";
import useAdvertisementStyle from "@/lib/hooks/useAdvertisementStyle";
import { useAdvertisementStore } from "@/providers/advertisement.store.provider";
import getBusinessCards from "@/lib/actions/getBusinessCards";
import { BusinessCardProps } from "./businessCardc";

const BusinessCardWrapper = ({
  businessCards,
}: {
  businessCards: BusinessCardProps[];
}) => {
  const { advertisements, nextAdvertisment, incrementAdvertisement } =
    useAdvertisementStore((state) => state);
  const [index, setIndex] = useState(nextAdvertisment);

  const advertisementIndexes = useMemo(() => {
    return [3, 7];
  }, []);
  useEffect(() => {
    setIndex((prev) => prev + 1);
    incrementAdvertisement();
  }, [advertisementIndexes, incrementAdvertisement]);

  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-5 gap-4 p-4">
        {businessCards.map((card, mIndex) => (
          <React.Fragment key={mIndex}>
            {advertisementIndexes.includes(mIndex) && (
              <Advertisement
                key={`adv-${mIndex}`}
                advertisement={advertisements[index]}
              />
            )}
            <div
              key={`card-${mIndex}`}
              className={`flex rounded-lg bg-neutral-500`}
            >
              {card.title}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default BusinessCardWrapper;

/*
        {[...Array(3)].map((_, index) => (
          <BusinessCard key={index} />
        ))}

*/
