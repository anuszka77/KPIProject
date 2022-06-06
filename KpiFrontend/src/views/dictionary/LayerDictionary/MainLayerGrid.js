import { useEffect, useState} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { loadLayersBySysDimTier } from '../../../services/dictionaryService'
import { useSimpleDictionaryContext } from '../SimpleDictionary/SimpleDictionaryContext';

const WIDTH_COL1 = 200;
const WIDTH_COL2 = 400;

export default function MainLayerGrid(props) {
    const {setIdSelectedRow} = useSimpleDictionaryContext();
    const [rowsMainLayerData, setrowsMainLayerData] = useState([]);

    useEffect(() => {
        if (props.idSystem && props.idDimension && props.idTier) {
            getLayersData(props.idSystem, props.idDimension, props.idTier);
            setrowsMainLayerData([]);
        } else {
            setrowsMainLayerData([]);
        }
        setIdSelectedRow("")
    }, [props.idSystem, props.idDimension, props.idTier,props.reloadGrid]);


    const columnsMainTier = [
        { field: "idLayer", headerName: "Numer wartstwy", width: WIDTH_COL1 },
        { field: "layerName", headerName: "Nazwa warstwy", width: WIDTH_COL2 }
    ]


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
                columns={columnsMainTier}
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