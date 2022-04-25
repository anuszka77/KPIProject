import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadListOfProcessBookActivity } from '../../services/processBookService';

import { styled } from '@mui/material/styles';

import '@sakit-sa/react-master-detail/dist/index.css';


const ActivityData = ( {selectedIndex, activity} ) => {
  const [rowsActivity, setRowsActivity]=useState([]);
  

  useEffect(() => {
    if(selectedIndex != undefined && selectedIndex != 0 && activity != null && activity.length>0)
    {
        const rows = activity.filter(x => x.processId=== parseInt(selectedIndex)).map((row) => ({
          processId: row.processId,
          activityVin: row.activityVin,
          activityTierName: row.activityTierName,
          activityLayerName: row.activityLayerName,
          activityTierName: row.activityTierName,
          actionStepName: row.actionStepName,
          activityHierarchyName: row.activityHierarchyName,        
          stepId: row.stepId
      }));         
        setRowsActivity(rows?.sort((x1,x2)=>x1.stepId-x2.stepId));
  }
  }, selectedIndex);


const columnsActivity =[
  {field: "stepId", headerName: "Nr kroku", width: 80},
  {field: "activityVin", headerName: "Nr Vin", width: 100},
  {field: "activityTierName", headerName: "Nazwa Tier", width: 150},
  {field: "activityLayerName", headerName: "Nazwa warstwy", width: 150},
  {field: "actionStepName", headerName: "Nazwa kroku", width: 500},
  {field: "activityHierarchyName", headerName: "Hierarchia",  width: 150}
]

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 'none',
  title: 'Procesy',
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  //headerAlign: 'center',
  align: 'center',
  //'& .MuiDataGrid-columnsContainer': {
  //  backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',         
  //},
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
//...customCheckbox(theme),
}));

return(
  <StyledDataGrid
      rows={rowsActivity}
      columns={columnsActivity}
      checkboxSelection={false}
      disableSelectionOnClick
      getRowId={(row) => row.stepId}
      height="100%"
      direction="rtl"
      /> 
);
}

export default ActivityData;