import { createContext, useContext } from 'react';


export type SimpleDictionaryContextType = {
  idSimpleDictionarySelected: number;
  setIdSimpleDictionarySelected: (inputValue: number) => void;
  idSelectedRow: number[];
  setIdSelectedRow: (inputValue: any) => void;
  orderReloadGrid: boolean;
  setOrderReloadGrid: (inputValue: boolean) => void;

}

export const SimpleDictionaryContext = createContext<SimpleDictionaryContextType>(
  {
    idSimpleDictionarySelected: 0,
    setIdSimpleDictionarySelected: idSimpleDictionarySelected => console.warn("ddd"),
    idSelectedRow: [0],
    setIdSelectedRow: idSelectedRow => console.warn(idSelectedRow),
    orderReloadGrid: false,
    setOrderReloadGrid: setOrderReloadGrid => console.warn("ddd"),
  }
);
export const useSimpleDictionaryContext = () => useContext(SimpleDictionaryContext);
