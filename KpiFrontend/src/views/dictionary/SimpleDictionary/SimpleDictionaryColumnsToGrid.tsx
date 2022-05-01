import { simpleDictionaryEnum } from "./SimpleDictionaryEnum";

type DefinedColumns = {
        field: string;
        headerName: string;
        width: number;
}
const columnsKpiDictionary : DefinedColumns[] = [
    { field: "idKpi", headerName: "Nr Kpi", width: 80 },
    { field: "kpi", headerName: "Skrót Kpi", width: 100 },
]

const columnsCriticalToDictionary:DefinedColumns[] = [
    { field: "idCriticalTo", headerName: "Nr CriticalTo", width: 80 },
    { field: "criticalToName", headerName: "Nazwa CriticalTo", width: 100 },
]

export const getColumnConfig = (idSimpleDictionarySelected : simpleDictionaryEnum) => {
    return idSimpleDictionarySelected === simpleDictionaryEnum.CriticalToDictionary? columnsCriticalToDictionary : columnsKpiDictionary;



}
