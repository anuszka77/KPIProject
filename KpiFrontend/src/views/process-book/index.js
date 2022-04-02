import { useEffect, useState } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadDetails } from '../../services/processBookService';

import { styled } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

const ProcessBook = () => {
    const [data, setData] = useState([]);
    //const [row, setRow] = useState();
    //var rows=[];


    const getData = async => {
        loadDetails().then((x) => {
            setData(x);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = [
    { field: 'idProcess', headerName: 'Numer procesu', width:150 },
    {
        field: 'processVin',
        headerName: 'Numer Vin',
        width: 300,
    },
    {
        field: 'processName',
        headerName: 'Nazwa procesu',
        width: 1000,
    }
    ];

    const rows = data.map((row) => ({
        idProcess: row.idProcess,
        processVin: row.processVin,
        processName: row.processName
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
      /></div>
        </MainCard>
    );
};

export default ProcessBook;
