
import { simpleDictionaryEnum } from "./SimpleDictionaryEnum";

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
    { field: "idDepartment", headerName: "Nr CriticalTo", width: WIDTH_COL1 },
    { field: "departmentName", headerName: "Nazwa CriticalTo", width: WIDTH_COL2 }
]

// const columnsSystemDictionary: DefinedColumnsType[] = [
//     { field: "idSystem", headerName: "Nr System", width: WIDTH_COL1 },
//     { field: "systemName", headerName: "Nazwa System", width: WIDTH_COL2 }
// ]

const columnsSystemDictionary: DefinedColumnsType[] = [
    { field: "idSystem", headerName: "Nr System", width: WIDTH_COL1 },
    { field: "systemName", headerName: "Nazwa System", width: WIDTH_COL2 }
]


export const getColumnConfig = (idSimpleDictionarySelected: simpleDictionaryEnum): DefinedColumnsType[] => {

    switch (idSimpleDictionarySelected) {
        case simpleDictionaryEnum.CriticalToDictionary
            : return columnsCriticalToDictionary;
        case simpleDictionaryEnum.SystemDictionary
            : return columnsSystemDictionary;
        case simpleDictionaryEnum.ActivityHierarchyDictionary
            : return columnsActivityHierarchyDictionary;
        case simpleDictionaryEnum.BussinesValueAddedDictionary
            : return columnsBussinesValueAddedDictionary;
        case simpleDictionaryEnum.DepartmentDictionary
            : return columnsDepartmentDictionary;
        case simpleDictionaryEnum.KpiDictionary
            : return columnsKpiDictionary;
    
    }



}
