"use client";
import React from "react";
import Advertisement from "../Advertisment/Advertisement";
import businessCard from "./businessCardc";

const BusinessCardWrapper = () => {
  const advertisementIndexes = [3, 7]; // Will be chaned to dynamic - API
  //Index passed to Advertisement will be changed later, just demo
  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-5 gap-4 p-4">
        {businessCard.map((card, index) => (
          <React.Fragment key={index}>
            {advertisementIndexes.includes(index) && (
              <Advertisement key={`adv-${index}`} index={index === 3 ? 0 : 1} />
            )}
            <div
              key={`card-${index}`}
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
