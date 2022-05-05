import { useEffect, useState } from 'react';
import { getColumnConfig } from './SimpleDictionaryColumnsToGrid';
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';
import { DefinedColumnsType } from './SimpleDictionaryColumnsToGrid'
import { StyledDataGrid } from '../../../designed-components/StyledDataGrid';
import { loadDictKpi, loadDictSystem, loadDictActivityHierarchy, loadDictBussinesValueAdded, loadDictDepartment, loadDictCriticalTo } from 'services/dictionaryService';
import { SimpleDictionaryActivityHierarchyType, SimpleDictionaryBussinesValueAddedType, SimpleDictionaryCriticalToType, SimpleDictionaryDepartmentType, SimpleDictionaryKpiType, SimpleDictionarySystemType } from './SimpleDictionaryTableInterfaces';
import { GridToolbar } from '@mui/x-data-grid';



export default function SimpleDictionaryGrid() {

  const { idSimpleDictionarySelected, setIdSimpleDictionarySelected } = useSimpleDictionaryContext();
  const [columns, setColumns] = useState<DefinedColumnsType[]>();
  const [rowsSimpleDictionaryData, setRowsSimpleDictionaryData] = useState<SimpleDictionaryActivityHierarchyType[] |
    SimpleDictionaryBussinesValueAddedType[] |
    SimpleDictionaryCriticalToType[] |
    SimpleDictionaryDepartmentType[] |
    SimpleDictionaryKpiType[] |
    SimpleDictionarySystemType[]
  >([]);


  useEffect(() => {
    getSimpleDictionaryData(idSimpleDictionarySelected);;
  }, [idSimpleDictionarySelected]);


  const getSimpleDictionaryData = async (idSimpleDictionarySelected: number) => {
    switch (idSimpleDictionarySelected) {
      case 1:
        loadDictActivityHierarchy().then((z) => {
          const rows: SimpleDictionaryActivityHierarchyType[] =
            z.map((item: SimpleDictionaryActivityHierarchyType) =>
              ({ id: item.idActivityHierarchy, idActivityHierarchy: item.idActivityHierarchy, activityHierarchyName: item.activityHierarchyName }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 2:
        loadDictBussinesValueAdded().then((z) => {
          const rows: SimpleDictionaryBussinesValueAddedType[] =
            z.map((item: SimpleDictionaryBussinesValueAddedType) =>
              ({ id: item.idBussinesValueAdded, idBussinesValueAdded: item.idBussinesValueAdded, bussinesValueAddedName: item.bussinesValueAddedName }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 3:
        loadDictCriticalTo().then((z) => {
          const rows: SimpleDictionaryCriticalToType[] =
            z.map((item: SimpleDictionaryCriticalToType) =>
              ({ id: item.idCriticalTo, idCriticalTo: item.idCriticalTo, criticalToName: item.criticalToName }))
          // setRowsSimpleDictionaryData(rows);
          setRowsSimpleDictionaryData(rows?.sort((x1,x2)=>x1.idCriticalTo-x2.idCriticalTo));
        })
        break;
      case 4:
        loadDictDepartment().then((z) => {
          const rows: SimpleDictionaryDepartmentType[] =
            z.map((item: SimpleDictionaryDepartmentType) =>
              ({ id: item.idDepartment, idDepartment: item.idDepartment, departmentName: item.departmentName }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 5:
        loadDictKpi().then((z) => {
          const rows: SimpleDictionaryKpiType[] =
            z.map((item: SimpleDictionaryKpiType) =>
              ({ id: item.idKpi, idKpi: item.idKpi, kpi: item.kpi }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 6:
        loadDictSystem().then((z) => {
          const rows: SimpleDictionarySystemType[] =
            z.map((item: SimpleDictionarySystemType) =>
              ({ id: item.idSystem, idSystem: item.idSystem, systemName: item.systemName }))
          setRowsSimpleDictionaryData(rows?.sort((x1,x2)=>x1.idSystem-x2.idSystem));
          // setRowsActivity(rows?.sort((x1,x2)=>x1.stepId-x2.stepId));
        });
        break;
    }

  }

  return (
     <div style={{ height: 200, width: '100%' }}>
      <StyledDataGrid
        rows={rowsSimpleDictionaryData}
        columns={getColumnConfig(idSimpleDictionarySelected)}
        getRowId={(row) => row.id}
        disableSelectionOnClick
        checkboxSelection={false}
        components={{
          Toolbar: GridToolbar
        }}

      />
     </div>
  );
}