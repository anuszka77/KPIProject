import { simpleDictionaryEnum } from "./SimpleDictionaryEnum";

type DefinedColumns = {
    field: string;
    headerName: string;
    width: number;
}
const columnsKpiDictionary: DefinedColumns[] = [
    { field: "idKpi", headerName: "Nr Kpi", width: 80 },
    { field: "kpi", headerName: "Skrót Kpi", width: 100 },
]

const columnsCriticalToDictionary: DefinedColumns[] = [
    { field: "idCriticalTo", headerName: "Nr CriticalTo", width: 80 },
    { field: "criticalToName", headerName: "Nazwa CriticalTo", width: 100 },
]

const columnsActivityHierarchyDictionary: DefinedColumns[] = [
    { field: "idActivityHierarchy", headerName: "Nr Hierarchii", width: 80 },
    { field: "activityHierarchyName", headerName: "Nazwa Hierarchii", width: 100 },
]
const columnsBussinesValueAddedDictionary: DefinedColumns[] = [
    { field: "idBussinesValueAdded", headerName: "Nr BussinesValueAdded", width: 80 },
    { field: "bussinesValueAddedName", headerName: "Nazwa BussinesValueAdded", width: 100 },
]

const columnsDepartmentDictionary: DefinedColumns[] = [
    { field: "idDepartment", headerName: "Nr CriticalTo", width: 80 },
    { field: "departmentName", headerName: "Nazwa CriticalTo", width: 100 },
]

const columnsSystemDictionary: DefinedColumns[] = [
    { field: "idSystem", headerName: "Nr System", width: 80 },
    { field: "systemName", headerName: "Nazwa System", width: 100 },
]


export const getColumnConfig = (idSimpleDictionarySelected: simpleDictionaryEnum): DefinedColumns[] | undefined => {

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
