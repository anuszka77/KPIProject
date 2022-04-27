import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { DataGrid , GridToolbar} from '@mui/x-data-grid';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddCircle from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';


import { loadDetails, loadColumnToShow , loadListOfProcessBookActivity, loadListOfProcessLayers} from '../../services/processBookService';
import { ProcessContext , useProcessContext} from './ProcessContext';


const ProcessActivity = () => {
    
  const [activity, setActvity] = useState([]);

  const [rowsActivity, setRowsActivity]=useState([]);
  const {selectedProcessId, setSelectedProcessId, processData, setProcessData} = useProcessContext();  


  useEffect(() => {
    if(selectedProcessId != undefined && parseInt(selectedProcessId) != 0)
    {
    getListOfProcessActivity();
    }
}, [selectedProcessId]);

const getListOfProcessActivity = async => {
  loadListOfProcessBookActivity().then((z) => {
    setActvity(z);
    const rows = z.filter(x => x.processId=== parseInt(selectedProcessId)).map((row) => ({
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
  });
}


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
  }
//...customCheckbox(theme),
}));



  return (
    <StyledDataGrid
    rows={rowsActivity}
    columns={columnsActivity}
    //pageSize={100}
    //rowsPerPageOptions={[12]}
    checkboxSelection={false}
    disableSelectionOnClick
    getRowId={(row) => row.stepId}
    height="600px"
    direction="rtl"
    components={{
      Toolbar: GridToolbar
    }}
    /> 
  );
}

export default ProcessActivity;