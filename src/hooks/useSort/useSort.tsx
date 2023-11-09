import React, { createContext, useContext, useState } from "react";

type SortType = "price" | "star" | "alpha";

type SortContextType = {
  sortType: SortType;
  setSortType: (sortType: SortType) => void;
};

const SortContext = createContext<SortContextType>({
  sortType: "price",
  setSortType: () => {},
});

export const useSort = () => {
  const { sortType, setSortType } = useContext(SortContext);

  return { sortType, setSortType };
};

type SortProviderProps = {
  children: React.ReactNode;
};

export const SortProvider = ({ children }: SortProviderProps) => {
  const [sortType, setSortType] = useState<SortType>("price");

  return (
    <SortContext.Provider value={{ sortType, setSortType }}>
      {children}
    </SortContext.Provider>
  );
};
