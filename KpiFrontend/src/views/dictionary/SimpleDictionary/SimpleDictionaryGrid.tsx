
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getColumnConfig } from './SimpleDictionaryColumnsToGrid';
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';
import {DefinedColumnsType} from './SimpleDictionaryColumnsToGrid'

export default function SimpleDictionaryGrid() {

  const { idSimpleDictionarySelected, setIdSimpleDictionarySelected } = useSimpleDictionaryContext();
  const [columns, setColumns] = useState<DefinedColumnsType[]>();

  useEffect(() => {
    console.log("idSimpleDictionarySelected z poziomu SimpleDictionaryGrid");
    console.log(idSimpleDictionarySelected);
    setColumns(getColumnConfig(idSimpleDictionarySelected));
    console.log("rows");
    console.log(rows);
  }, [idSimpleDictionarySelected]);




  //     const [rowsActivity, setRowsActivity]=useState([]);
  //     const {selectedProcessId, setSelectedProcessId, processData, setProcessData} = useProcessContext();  


  //     useEffect(() => {
  //       if(selectedProcessId != undefined && parseInt(selectedProcessId) != 0)
  //       {
  //       getListOfProcessActivity();
  //       }
  //   }, [selectedProcessId]);

  //   const getListOfProcessActivity = async => {
  //     loadListOfProcessBookActivity().then((z) => {
  //       setActvity(z);
  //       const rows = z.filter(x => x.processId=== parseInt(selectedProcessId)).map((row) => ({
  //         processId: row.processId,
  //         activityVin: row.activityVin,
  //         activityTierName: row.activityTierName,
  //         activityLayerName: row.activityLayerName,
  //         activityTierName: row.activityTierName,
  //         actionStepName: row.actionStepName,
  //         activityHierarchyName: row.activityHierarchyName,        
  //         stepId: row.stepId
  //     }));         
  //       setRowsActivity(rows?.sort((x1,x2)=>x1.stepId-x2.stepId));
  //     });
  //   }


  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  const columns2 = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: any) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
         rows={rows}
        columns={getColumnConfig(idSimpleDictionarySelected)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}