"use client";

import { AdvertisementProps } from "@/components/Advertisment/types";
import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type AdvertisementState = {
  advertisements: AdvertisementProps[];
  nextAdvertisment: number;
};

export type AdvertisementActions = {
  deleteAdvertisement: (id: string) => void;
  addAdvertisement: (advertisement: AdvertisementProps) => void;
  incrementAdvertisement: () => void;
};

export type AdvertisementStore = AdvertisementState & AdvertisementActions;

export const defaultInitState: AdvertisementState = {
  advertisements: [],
  nextAdvertisment: 0,
};

export const createAdvertisementStore = (
  initState: AdvertisementState = defaultInitState
) => {
  console.log({ initState });
  return createStore<AdvertisementStore>()((set) => ({
    ...initState,
    deleteAdvertisement: (id: string) =>
      set((state) => ({
        advertisements: state.advertisements.filter((ad) => ad.id !== id),
      })),
    addAdvertisement: (advertisement: AdvertisementProps) =>
      set((state) => ({
        advertisements: [...state.advertisements, advertisement],
      })),
    incrementAdvertisement: () => {
      set((prev) => {
        console.log("Before increment:", prev.nextAdvertisment);
        const nextState = {
          ...prev,
          nextAdvertisment: ++prev.nextAdvertisment,
        };
        console.log("After increment:", nextState.nextAdvertisment);
        return nextState;
      });
    },
  }));
};
