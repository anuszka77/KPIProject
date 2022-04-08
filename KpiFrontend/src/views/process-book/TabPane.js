import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadDetails, loadColumnToShow } from '../../services/processBookService';

import { styled } from '@mui/material/styles';
import MasterDetail from '@sakit-sa/react-master-detail';
import '@sakit-sa/react-master-detail/dist/index.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
import MainTier from './MainTier';



const ProcessDetails = (rows, columns) => {
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
                              rows={rows}
                              columns={columns}
                              //pageSize={100}
                              //rowsPerPageOptions={[12]}
                              checkboxSelection={false}
                              disableSelectionOnClick
                              getRowId={(row) => row.idProcess}
                              height="100%"
                              /> 
);
}

export default ProcessDetails;