import { useEffect, useState } from 'react';
import { addElementToSystemDictionary } from 'services/dictionaryService';
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';
import { simpleDictionaryEnum } from './SimpleDictionaryEnum';

export default function SimpleDictionaryAddToDatabase(){

    const {idSimpleDictionarySelected, setIdSimpleDictionarySelected } = useSimpleDictionaryContext();
    
    const [resultMessage, setResultMessage] =  useState<string>("");
        


    const setData= async (id: number, name: string) :Promise<string> => {
       

      
        switch (idSimpleDictionarySelected) {
        case simpleDictionaryEnum.CriticalToDictionary
            : addElementToSystemDictionary(id, name).then(x => { setResultMessage(x) });
            break;
        case simpleDictionaryEnum.SystemDictionary
            : addElementToSystemDictionary(id, name).then(x => { setResultMessage(x) });
            break;
        case simpleDictionaryEnum.ActivityHierarchyDictionary
            : addElementToSystemDictionary(id, name).then(x => { setResultMessage(x) });
            break;
        case simpleDictionaryEnum.BussinesValueAddedDictionary
            : addElementToSystemDictionary(id, name).then(x => { setResultMessage(x) });
            break;
        case simpleDictionaryEnum.DepartmentDictionary
            : addElementToSystemDictionary(id, name).then(x => { setResultMessage(x) });
            break;
        case simpleDictionaryEnum.KpiDictionary
            : addElementToSystemDictionary(id, name).then(x => { setResultMessage(x)});
            break;           
    }
    return resultMessage;
}
}