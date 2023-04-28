import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface DataLayerProps {
  initialState: any;
  reducer: any;
  children: ReactNode;
}

export const DataLayerContext = createContext<any>(null);

export const DataLayer = ({
  initialState,
  reducer,
  children,
}: DataLayerProps) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
