import {
    addElementToSystemDictionary
    , addElementToCriticalToDictionary
    , addElementToActivityHierarchyDictionary
    , addElementToBussinesValueAddedDictionary
    , addElementToKpiDictionary
    , addElementToDepartmentDictionary
} from 'services/dictionaryService';
import { simpleDictionaryEnum } from './SimpleDictionaryEnum';


export const simpleDictionaryAddToDatabase = async (id: number, name: string, idSimpleDictionarySelected: number): Promise<string> => {
    let resultMessage = "";
    switch (idSimpleDictionarySelected) {
        case simpleDictionaryEnum.CriticalToDictionary
            : await addElementToCriticalToDictionary(id, name).then(x => { resultMessage = x });
            break;
        case  simpleDictionaryEnum.SystemDictionary
            : await addElementToSystemDictionary(id, name).then(x => { resultMessage = x });
            break;
        case  simpleDictionaryEnum.ActivityHierarchyDictionary
            : await addElementToActivityHierarchyDictionary(id, name).then(x => { resultMessage = x });
            break;
        case  simpleDictionaryEnum.BussinesValueAddedDictionary
            : await addElementToBussinesValueAddedDictionary(id, name).then(x => { resultMessage = x });
            break;
        case  simpleDictionaryEnum.DepartmentDictionary
            : await addElementToDepartmentDictionary(id, name).then(x => { resultMessage = x });
            break;
        case  simpleDictionaryEnum.KpiDictionary
            : await addElementToKpiDictionary(id, name).then(x => { resultMessage = x });
            break;
    }

    return resultMessage;
}
