import { useEffect, useState} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { loadLayersBySysDimTier } from '../../../services/dictionaryService'
import { useDictionaryContext } from '../DictionaryGeneralUtils/DictionaryContext';
import { getColumnConfig } from '../DictionaryGeneralUtils/SimpleDictionaryColumnsToGrid';
import { dictionaryEnum } from "../DictionaryGeneralUtils/DictionaryEnum";

export default function MainLayerGrid(props) {
    const {setIdSelectedRow,orderReloadGrid} = useDictionaryContext();
    const [rowsMainLayerData, setrowsMainLayerData] = useState([]);

    // useEffect(() => {
    //     if (props.idSystem !==null && props.idDimension !==null && props.idTier!==null) {
    //         setrowsMainLayerData([]);
    //         getLayersData(props.idSystem, props.idDimension, props.idTier);      
    //     } else {
    //         setrowsMainLayerData([]);
    //     } 
    // }, [props.idSystem, props.idDimension, props.idTier,orderReloadGrid]);
    useEffect(() => {
        if (!props.idSystem || !props.idDimension || !props.idTier) {
            setrowsMainLayerData([]);
                
        } else {
            setrowsMainLayerData([]);
            getLayersData(props.idSystem, props.idDimension, props.idTier); 
        } 
    }, [props.idSystem, props.idDimension, props.idTier,orderReloadGrid]);



    const getLayersData = async (idSystem, idDimension, idTier) => {
        loadLayersBySysDimTier(idSystem, idDimension, idTier).then((z) => {
            const rows =
                z.map((item) =>
                    ({ id: item.idLayer, idLayer: item.idLayer, layerName: item.layerName }))
            setrowsMainLayerData(rows?.sort((x1, x2) => x1.idLayer - x2.idLayer));
        })
    }

    const getSelectedRow = (idSel) => {
        const selectedIDs = new Set(idSel);
        const selectedRows = rowsMainLayerData.filter((row) =>
            selectedIDs.has(row.id),
        );
        setIdSelectedRow(selectedRows);
    };

    return (
        <div style={{ height: 200, width: '100%' }}>
            {"Ilość wierszy w bazie danych: " + rowsMainLayerData.length}
            <DataGrid
                rows={rowsMainLayerData}
                columns={getColumnConfig(dictionaryEnum.MainLayer)}
                getRowId={(row) => row.id}
                checkboxSelection={true}
                onSelectionModelChange={(idSel) => { getSelectedRow(idSel) ;  }}
                components={{
                    Toolbar: GridToolbar
                }}
            />
        </div>
    );
}