import { useEffect, useState } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadDetails } from '../../services/processBookService';



// ==============================|| SAMPLE PAGE ||============================== //

const ProcessBook = () => {
    const [data, setData] = useState([]);
    //const [row, setRow] = useState();
    //var rows=[];


    const getData = async => {
        loadDetails().then((x) => {
            console.log(x[0].dimensionDescription);
            setData(x);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = [
    { field: 'idDimension', headerName: 'IdDimension' },
    {
        field: 'dimensionName',
        headerName: 'DimensionName',
        width: 150,
    },
    {
        field: 'dimensionName',
        headerName: 'DimensionName',
        width: 250,
    },
    {
        field: 'dimensionDescription',
        headerName: 'DimensionDescription',
        width: 210,
    },
    {
        field: 'overDimensionsId',
        headerName: 'OverDimensionsId', 
        width: 210    
    }
    ];

    const rows = data.map((row) => ({
        idDimension: row.idDimension,
        dimensionName: row.dimensionName,
        dimensionDescription: row.dimensionDescription,
        overDimensionsId: row.overDimensionsId
    }));
    
    return (
        <MainCard title="Słownik zaciągnięty z bazy">
            <div style={{height: 500, width:"100%"}}>
           <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(row) => row.idDimension}
      /></div>
        </MainCard>
    );
};

export default ProcessBook;
