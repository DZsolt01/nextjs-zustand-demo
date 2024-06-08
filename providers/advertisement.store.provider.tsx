// src/providers/counter-store-provider.tsx
"use client";

import {
  AdvertisementState,
  AdvertisementStore,
  createAdvertisementStore,
} from "@/stores/advertisement.store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

export const AdvertisementStoreContext =
  createContext<StoreApi<AdvertisementStore> | null>(null);

export interface AdvertisementStoreProviderProps {
  children: ReactNode;
  initialState: AdvertisementState;
}

export const AdvertisementStoreProvider = ({
  children,
  initialState,
}: AdvertisementStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AdvertisementStore>>();
  if (!storeRef.current) {
    storeRef.current = createAdvertisementStore(initialState);
  }

  return (
    <AdvertisementStoreContext.Provider value={storeRef.current}>
      {children}
    </AdvertisementStoreContext.Provider>
  );
};

export const useAdvertisementStore = <T,>(
  selector: (store: AdvertisementStore) => T,
): T => {
  const advertisementStoreContext = useContext(AdvertisementStoreContext);

  if (!advertisementStoreContext) {
    throw new Error(
      `useAdvertisementStore must be use within AdvertisementStoreProvider`,
    );
  }

  return useStore(advertisementStoreContext, selector);
};
