import { createContext, useContext } from 'react';


export type DictionaryContextType = {
  idSimpleDictionarySelected: number;
  setIdSimpleDictionarySelected: (inputValue: number) => void;
  idSelectedRow: number[];
  setIdSelectedRow: (inputValue: any) => void;
  orderReloadGrid: boolean;
  setOrderReloadGrid: (inputValue: boolean) => void;

}

export const DictionaryContext = createContext<DictionaryContextType>(
  {
    idSimpleDictionarySelected: 0,
    setIdSimpleDictionarySelected: idSimpleDictionarySelected => console.warn("ddd"),
    idSelectedRow: [0],
    setIdSelectedRow: idSelectedRow => console.warn(idSelectedRow),
    orderReloadGrid: false,
    setOrderReloadGrid: setOrderReloadGrid => console.warn("ddd"),
  }
);
export const useDictionaryContext = () => useContext(DictionaryContext);
