
import { dictionaryEnum } from "./DictionaryEnum";

const WIDTH_COL1 = 200;
const WIDTH_COL2 = 400;

export type DefinedColumnsType = {
    field: string;
    headerName: string;
    width: number;
}

const columnsKpiDictionary: DefinedColumnsType[] = [
    { field: "idKpi", headerName: "Nr Kpi", width: WIDTH_COL1 },
    { field: "kpi", headerName: "Skrót Kpi", width: WIDTH_COL2 }
]

const columnsCriticalToDictionary: DefinedColumnsType[] = [
    { field: "idCriticalTo", headerName: "Nr CriticalTo", width: WIDTH_COL1 },
    { field: "criticalToName", headerName: "Nazwa CriticalTo", width: WIDTH_COL2 }
]

const columnsActivityHierarchyDictionary: DefinedColumnsType[] = [
    { field: "idActivityHierarchy", headerName: "Nr Hierarchii", width: WIDTH_COL1 },
    { field: "activityHierarchyName", headerName: "Nazwa Hierarchii", width: WIDTH_COL2 }
]
const columnsBussinesValueAddedDictionary: DefinedColumnsType[] = [
    { field: "idBussinesValueAdded", headerName: "Nr BussinesValueAdded", width: WIDTH_COL1 },
    { field: "bussinesValueAddedName", headerName: "Nazwa BussinesValueAdded", width: WIDTH_COL2 }
]

const columnsDepartmentDictionary: DefinedColumnsType[] = [
    { field: "idDepartment", headerName: "Nr Departamentu", width: WIDTH_COL1 },
    { field: "departmentName", headerName: "Nazwa Departamentu", width: WIDTH_COL2 }
]

const columnsSystemDictionary: DefinedColumnsType[] = [
    { field: "idSystem", headerName: "Nr System", width: WIDTH_COL1 },
    { field: "systemName", headerName: "Nazwa System", width: WIDTH_COL2 }
]

const columnsMainTier: DefinedColumnsType[] = [
    { field: "tierId", headerName: "Numer tieru", width: WIDTH_COL1 },
    { field: "tierName", headerName: "Nazwa tieru", width: WIDTH_COL2 }
]

const columnsMainLayer: DefinedColumnsType[] = [
    { field: "idLayer", headerName: "Numer wartstwy", width: WIDTH_COL1 },
    { field: "layerName", headerName: "Nazwa warstwy", width: WIDTH_COL2 }
]


export const getColumnConfig = (idSimpleDictionarySelected: dictionaryEnum): DefinedColumnsType[] => {

    switch (idSimpleDictionarySelected) {
        case dictionaryEnum.CriticalToDictionary
            : return columnsCriticalToDictionary;
        case dictionaryEnum.SystemDictionary
            : return columnsSystemDictionary;
        case dictionaryEnum.ActivityHierarchyDictionary
            : return columnsActivityHierarchyDictionary;
        case dictionaryEnum.BussinesValueAddedDictionary
            : return columnsBussinesValueAddedDictionary;
        case dictionaryEnum.DepartmentDictionary
            : return columnsDepartmentDictionary;
        case dictionaryEnum.KpiDictionary
            : return columnsKpiDictionary;
        case dictionaryEnum.MainTier
            : return columnsMainTier;
        case dictionaryEnum.MainLayer
            : return columnsMainLayer;

    }



}
