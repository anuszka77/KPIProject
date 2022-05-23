import { useEffect, useState } from 'react';
import { getColumnConfig } from './SimpleDictionaryColumnsToGrid';
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';
import { StyledDataGrid } from '../../../designed-components/StyledDataGrid';
import { loadDictKpi, loadDictSystem, loadDictActivityHierarchy, loadDictBussinesValueAdded, loadDictDepartment, loadDictCriticalTo } from 'services/dictionaryService';
import { SimpleDictionaryActivityHierarchyType, SimpleDictionaryBussinesValueAddedType, SimpleDictionaryCriticalToType, SimpleDictionaryDepartmentType, SimpleDictionaryKpiType, SimpleDictionarySystemType } from './SimpleDictionaryTableInterfaces';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';



export default function SimpleDictionaryGrid() {

  const { idSimpleDictionarySelected, setIdSimpleDictionarySelected, idSelectedRow, setIdSelectedRow } = useSimpleDictionaryContext();
  const [rowsSimpleDictionaryData, setRowsSimpleDictionaryData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);


  useEffect(() => {
    getSimpleDictionaryData(idSimpleDictionarySelected);;
  }, [idSimpleDictionarySelected]);

  useEffect(() => {
    setIdSelectedRow(selectedRows)
  }, [selectedRows]);


  const getSimpleDictionaryData = async (idSimpleDictionarySelected) => {
    switch (idSimpleDictionarySelected) {
      case 1:
        loadDictActivityHierarchy().then((z) => {
          const rows =
            z.map((item) =>
              ({ id: item.idActivityHierarchy, idActivityHierarchy: item.idActivityHierarchy, activityHierarchyName: item.activityHierarchyName }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 2:
        loadDictBussinesValueAdded().then((z) => {
          const rows =
            z.map((item) =>
              ({ id: item.idBussinesValueAdded, idBussinesValueAdded: item.idBussinesValueAdded, bussinesValueAddedName: item.bussinesValueAddedName }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 3:
        loadDictCriticalTo().then((z) => {
          const rows =
            z.map((item) =>
              ({ id: item.idCriticalTo, idCriticalTo: item.idCriticalTo, criticalToName: item.criticalToName }))
          setRowsSimpleDictionaryData(rows?.sort((x1, x2) => x1.idCriticalTo - x2.idCriticalTo));
        })
        break;
      case 4:
        loadDictDepartment().then((z) => {
          const rows =
            z.map((item) =>
              ({ id: item.idDepartment, idDepartment: item.idDepartment, departmentName: item.departmentName }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 5:
        loadDictKpi().then((z) => {
          const rows =
            z.map((item) =>
              ({ id: item.idKpi, idKpi: item.idKpi, kpi: item.kpi }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 6:
        loadDictSystem().then((z) => {
          const rows =
            z.map((item) =>
              ({ id: item.idSystem, idSystem: item.idSystem, systemName: item.systemName }))
          setRowsSimpleDictionaryData(rows?.sort((x1, x2) => x1.idSystem - x2.idSystem));
        });
        break;
    }

  }



  const getSelectedRow = (idDic) => {
    const selectedIDs = new Set(idDic);
    const selectedRows = rowsSimpleDictionaryData.filter((row) =>
      selectedIDs.has(row.id),
    );
    setSelectedRows(selectedRows);
  };



  return (
    <div style={{ height: 200, width: '100%' }}>
      <DataGrid
        rows={rowsSimpleDictionaryData}
        columns={getColumnConfig(idSimpleDictionarySelected)}
        getRowId={(row) => row.id}
        checkboxSelection={true}
        onSelectionModelChange={(idDic) => { getSelectedRow(idDic) }}
        components={{
          Toolbar: GridToolbar
        }}


      />
      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(selectedRows, null, 4)}
      </pre>
    </div>
  );
}