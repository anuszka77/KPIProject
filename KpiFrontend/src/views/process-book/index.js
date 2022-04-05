import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadDetails, loadColumnToShow } from '../../services/processBookService';

import { styled } from '@mui/material/styles';


// ==============================|| SAMPLE PAGE ||============================== //
const capitalize = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
  }

const ProcessBook = () => {
    const [data, setData] = useState([]);
    const [columnToShow, setColumnToShow] = useState([]);
    
    const getData = async => {
        loadDetails().then((x) => {
            setData(x);
        });
    }

    const getListOfColumnToShow = async => {
      loadColumnToShow(1,1).then((y) => {
        setColumnToShow(y);
      });
  }

    useEffect(() => {
        getData();
        getListOfColumnToShow();
    }, []);

    const columns = columnToShow.map((row) => ({
      field: capitalize(row.columnToGridName),
      headerName: row.columnToGridNamePl,
      width: 250
    }));
    
    
    const rows = data.map((row) => ({
        type: 'MASTER',
        expanded: false,
        idProcess: row.idProcess,
        processVin: row.processVin,
        processName: row.processName,
        areaLayerName: row.areaLayerName,
        subAreaLayerName: row.subAreaLayerName,
        subjectLayerName: row.subjectLayerName,
        attributeLayerName: row.attributeLayerName
    }));

   

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
    
    return (
        <MainCard title="Księga procesów" height="100%">
            <div style={{height: 680, width:"100%"}}>
           <StyledDataGrid
            rows={rows}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[12]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(row) => row.idProcess}
      />  
      </div>
        </MainCard>
    );
};

export default ProcessBook;
