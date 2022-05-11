import { useEffect, useState } from 'react';
import { addElementToSystemDictionary } from 'services/dictionaryService';
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';
import { simpleDictionaryEnum } from './SimpleDictionaryEnum';

// export default function SimpleDictionaryAddToDatabase(){

// const {idSimpleDictionarySelected, setIdSimpleDictionarySelected } = useSimpleDictionaryContext();

// const [resultMessage, setResultMessage] =  useState<string>("");



export const simpleDictionaryAddToDatabase = async(id: number, name: string, idSimpleDictionarySelected: number): Promise<string> => {
    let resultMessage = "";
    switch (idSimpleDictionarySelected) {
        case simpleDictionaryEnum.CriticalToDictionary
            // : addElementToSystemDictionary(id, name).then(x => { console.log("to jest dupa" + x); resultMessage = x.resultMessage });
            : await addElementToSystemDictionary(id, name).then(x => { resultMessage=x });
            break;
        // case simpleDictionaryEnum.SystemDictionary
        //     : addElementToSystemDictionary(id, name).then(x => { resultMessage = x });
        //     break;
        // case simpleDictionaryEnum.ActivityHierarchyDictionary
        //     : addElementToSystemDictionary(id, name).then(x => { resultMessage = x });
        //     break;
        // case simpleDictionaryEnum.BussinesValueAddedDictionary
        //     : addElementToSystemDictionary(id, name).then(x => { resultMessage = x });
        //     break;
        // case simpleDictionaryEnum.DepartmentDictionary
        //     : addElementToSystemDictionary(id, name).then(x => { resultMessage = x });
        //     break;
        // case simpleDictionaryEnum.KpiDictionary
        //     : addElementToSystemDictionary(id, name).then(x => { resultMessage = x });
        //     break;
    }
     return resultMessage;
}
// }