import { createContext, useContext } from 'react';


export type SimpleDictionaryContextType = {
    idSimpleDictionarySelected: number;
    setIdSimpleDictionarySelected: (inputValue: number) => void;
  }

export const SimpleDictionaryContext = createContext<SimpleDictionaryContextType>(
  {
    idSimpleDictionarySelected: 0,
    setIdSimpleDictionarySelected: idSimpleDictionarySelected => console.warn("ddd"),


  }
);
export const useSimpleDictionaryContext = () => useContext(SimpleDictionaryContext);
