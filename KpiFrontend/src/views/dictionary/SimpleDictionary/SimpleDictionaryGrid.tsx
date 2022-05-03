
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getColumnConfig } from './SimpleDictionaryColumnsToGrid';
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';
import {DefinedColumnsType} from './SimpleDictionaryColumnsToGrid'
import { StyledDataGrid} from '../../../designed-components/StyledDataGrid';
import { loadDictKpi } from 'services/dictionaryService';
import { SimpleDictionaryKpiType } from './SimpleDictionaryInterfaceToEvryTable';



export default function SimpleDictionaryGrid() {

  const { idSimpleDictionarySelected, setIdSimpleDictionarySelected } = useSimpleDictionaryContext();
  const [columns, setColumns] = useState<DefinedColumnsType[]>();
  const [simpleDictionaryData, setSimpleDictionaryData] = useState();
   const [rowsSimpleDictionaryData, setRowsSimpleDictionaryData]=useState<SimpleDictionaryKpiType[]>([]);
  // const [rowsSimpleDictionaryData, setRowsSimpleDictionaryData]=useState<SimpleDictionaryKpiType[]>();
  
  
  
  
  useEffect(() => {
    // setColumns(getColumnConfig(idSimpleDictionarySelected));
    getSimpleDictionaryData();
  }, [idSimpleDictionarySelected]);




  //     const [rowsActivity, setRowsActivity]=useState([]);
  //     const {selectedProcessId, setSelectedProcessId, processData, setProcessData} = useProcessContext();  

    const getSimpleDictionaryData= async()  => {
      loadDictKpi().then((z) => {

     console.log(z.map((item : SimpleDictionaryKpiType) => (item.kpi)))
      const rows: SimpleDictionaryKpiType[] =z.map((item : SimpleDictionaryKpiType ) => ({idKpi: item.idKpi, kpi: item.kpi} ))
      setRowsSimpleDictionaryData(rows);

    console.log("rowsSimpleDictionaryData"); 
    console.log(rowsSimpleDictionaryData); 
    });
    }



  const rows = [
    { idKpi: 1, kpi: 'Snow'},
    { idKpi: 3, kpi: 'Snow2'},

  ];




  return (
    <div style={{ height: 400, width: '100%' }}>
      <StyledDataGrid
         rows={rowsSimpleDictionaryData}

        columns={getColumnConfig(idSimpleDictionarySelected)}
        getRowId={(row) => row.idKpi}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}