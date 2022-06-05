import {
    addElementToSystemDictionary
    , addElementToCriticalToDictionary
    , addElementToActivityHierarchyDictionary
    , addElementToBussinesValueAddedDictionary
    , addElementToKpiDictionary
    , addElementToDepartmentDictionary
} from 'services/dictionaryService';
import { simpleDictionaryEnum } from './SimpleDictionaryEnum';

type infoReturnFormDbType = {
    returnMessage: string;
    returnStatus: number
}
export const simpleDictionaryAddToDatabase = async (id: number, name: string, idSimpleDictionarySelected: number): Promise<infoReturnFormDbType> => {
    let resultMessage = "";
    let resultStatus = "";
    let retObj: infoReturnFormDbType = { returnMessage: "", returnStatus: 0 }

    switch (idSimpleDictionarySelected) {
        case simpleDictionaryEnum.CriticalToDictionary
            // : await addElementToCriticalToDictionary(id, name).then(x => { resultMessage = x });
            : await addElementToCriticalToDictionary(id, name).then(x => { retObj = { returnMessage: x, returnStatus: 1 } });
            break;
        // case  simpleDictionaryEnum.SystemDictionary
        //     : await addElementToSystemDictionary(id, name).then(x => { resultMessage = x });
        //     break;
        // case  simpleDictionaryEnum.ActivityHierarchyDictionary
        //     : await addElementToActivityHierarchyDictionary(id, name).then(x => { resultMessage = x });
        //     break;
        // case  simpleDictionaryEnum.BussinesValueAddedDictionary
        //     : await addElementToBussinesValueAddedDictionary(id, name).then(x => { resultMessage = x });
        //     break;
        // case  simpleDictionaryEnum.DepartmentDictionary
        //     : await addElementToDepartmentDictionary(id, name).then(x => { resultMessage = x });
        //     break;
        // case  simpleDictionaryEnum.KpiDictionary
        //     : await addElementToKpiDictionary(id, name).then(x => { resultMessage = x });
        //     break;
    }

    return retObj;
}
