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

    let retObj: infoReturnFormDbType = { returnMessage: "", returnStatus: 0 }

    switch (idSimpleDictionarySelected) {
        case simpleDictionaryEnum.CriticalToDictionary
            : await addElementToCriticalToDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case simpleDictionaryEnum.SystemDictionary
            : await addElementToSystemDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case simpleDictionaryEnum.ActivityHierarchyDictionary
            : await addElementToActivityHierarchyDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case simpleDictionaryEnum.BussinesValueAddedDictionary
            : await addElementToBussinesValueAddedDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case simpleDictionaryEnum.DepartmentDictionary
            : await addElementToDepartmentDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
        case simpleDictionaryEnum.KpiDictionary
            : await addElementToKpiDictionary(id, name).then(x => { retObj = { returnMessage: x.returnMessage, returnStatus: x.returnStatus } });
            break;
    }

    return retObj;
}
