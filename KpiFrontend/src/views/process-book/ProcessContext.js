import { createContext, useContext } from 'react';



export const ProcessContext = createContext(
  {
    selectedProcessId: 0,
    setSelectedProcessId: selectedProcessId => console.warn("ddd"),

  }
);
export const useProcessContext = () => useContext(ProcessContext);
