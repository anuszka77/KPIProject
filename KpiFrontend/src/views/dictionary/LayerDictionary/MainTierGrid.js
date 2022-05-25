import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {loadLayersBySysDimTier} from '../../../services/dictionaryService'
const WIDTH_COL1 = 200;
const WIDTH_COL2 = 400;


export default function MainTierGrid(props) {

    const [rowsMainTierData, setRowsMainTierData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        if (props.idSystem && props.idDimension && props.idTier){ 
        getLayersData(props.idSystem,props.idDimension,props.idTier);;
        }
        console.log(rowsMainTierData.length)
    }, [props.idSystem,props.idDimension,props.idTier]);

    // useEffect(() => {
    //     setIdSelectedRow(selectedRows)
    // }, [selectedRows]);
    const columnsMainTier = [
        { field: "idLayer", headerName: "Numer wartstwy", width: WIDTH_COL1 },
        { field: "layerName", headerName: "Nazwa warstwy", width: WIDTH_COL2 }
    ]


    const getLayersData = async (idSystem,idDimension,idTier) => {

        loadLayersBySysDimTier(idSystem,idDimension,idTier).then((z) => {
            const rows =
                z.map((item) =>
                    ({ id: item.idLayer, idLayer: item.idLayer, layerName: item.layerName }))
                    setRowsMainTierData(rows?.sort((x1, x2) => x1.idLayer - x2.idLayer));
        })
    }

    const getSelectedRow = (idDic) => {
        const selectedIDs = new Set(idDic);
        const selectedRows = rowsMainTierData.filter((row) =>
            selectedIDs.has(row.id),
        );
        setSelectedRows(selectedRows);
    };

    return (
        <div style={{ height: 200, width: '100%' }}>
            {"Ilość wierszy w bazie danych: " + rowsMainTierData.length }
            <DataGrid
                rows={rowsMainTierData}
                columns={columnsMainTier}
                getRowId={(row) => row.id}
                checkboxSelection={true}
                onSelectionModelChange={(idDic) => { getSelectedRow(idDic) }}
                components={{
                    Toolbar: GridToolbar
                }}
            />
        </div>
    );
}