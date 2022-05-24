import { useEffect, useState } from 'react';
import { getColumnConfig } from './SimpleDictionaryColumnsToGrid';
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';
import { StyledDataGrid } from '../../../designed-components/StyledDataGrid';
import { loadDictKpi, loadDictSystem, loadDictActivityHierarchy, loadDictBussinesValueAdded, loadDictDepartment, loadDictCriticalTo } from 'services/dictionaryService';
import { SimpleDictionaryActivityHierarchyType, SimpleDictionaryBussinesValueAddedType, SimpleDictionaryCriticalToType, SimpleDictionaryDepartmentType, SimpleDictionaryKpiType, SimpleDictionarySystemType } from './SimpleDictionaryTableInterfaces';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const WIDTH_COL1 = 200;
const WIDTH_COL2 = 400;


export default function MainTierGrid(props) {

    const [rowsMainTierData, setRowsMainTierData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        getLayersData(props.idSystem,props.idDimension,props.idTier);;
    }, [idSimpleDictionarySelected]);

    useEffect(() => {
        setIdSelectedRow(selectedRows)
    }, [selectedRows]);


    const columnsMainTier = [
        { field: "idLayer", headerName: "Numer wartstwy", width: WIDTH_COL1 },
        { field: "layerName", headerName: "Nazwa warstwy", width: WIDTH_COL2 }
    ]


    const getLayersData = async (idSystem,idDimension,idTier) => {

        loadDictActivityHierarchy().then((z) => {
            const rows =
                z.map((item) =>
                    ({ id: item.IdLayer, idLayer: item.IdLayer, layerName: item.LayerName }))
                    setRowsMainTierData(rows);
        })
    }

    const getSelectedRow = (idDic) => {
        const selectedIDs = new Set(idDic);
        const selectedRows = rowsSimpleDictionaryData.filter((row) =>
            selectedIDs.has(row.id),
        );
        setSelectedRows(selectedRows);
    };

    return (
        <div style={{ height: 200, width: '100%' }}>
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