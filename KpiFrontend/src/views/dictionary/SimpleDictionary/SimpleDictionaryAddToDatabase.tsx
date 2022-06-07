import {
    addElementToSystemDictionary
    , addElementToCriticalToDictionary
    , addElementToActivityHierarchyDictionary
    , addElementToBussinesValueAddedDictionary
    , addElementToKpiDictionary
    , addElementToDepartmentDictionary
} from 'services/dictionaryService';

import { dictionaryEnum } from '../../dictionary/DictionaryGeneralUtils/DictionaryEnum';
// DictionaryGeneralUtils/DictionaryEnum
type infoReturnFormDbType = {
    returnMessage: string;
    returnStatus: number
}
export const simpleDictionaryAddToDatabase = async (id: number, name: string, idSimpleDictionarySelected: number): Promise<infoReturnFormDbType> => {

    let retObj: infoReturnFormDbType = { returnMessage: "", returnStatus: 0 }

    switch (idSimpleDictionarySelected) {
        case dictionaryEnum.CriticalToDictionary
            : await addElementToCriticalToDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case dictionaryEnum.SystemDictionary
            : await addElementToSystemDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case dictionaryEnum.ActivityHierarchyDictionary
            : await addElementToActivityHierarchyDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case dictionaryEnum.BussinesValueAddedDictionary
            : await addElementToBussinesValueAddedDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case dictionaryEnum.DepartmentDictionary
            : await addElementToDepartmentDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case dictionaryEnum.KpiDictionary
            : await addElementToKpiDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
    }

    return retObj;
}
