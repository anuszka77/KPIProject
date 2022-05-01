import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

export default function SimpleDictionaryGrid2() {

  
    const [activity, setActvity] = useState([]);

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
  
  
  const columnsActivity =[
    {field: "stepId", headerName: "Nr kroku", width: 80},
    {field: "activityVin", headerName: "Nr Vin", width: 100},
    {field: "activityTierName", headerName: "Nazwa Tier", width: 150},
    {field: "activityLayerName", headerName: "Nazwa warstwy", width: 150},
    {field: "actionStepName", headerName: "Nazwa kroku", width: 500},
    {field: "activityHierarchyName", headerName: "Hierarchia",  width: 150}
  ]
  


  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      /> */}
    </div>
  );
}