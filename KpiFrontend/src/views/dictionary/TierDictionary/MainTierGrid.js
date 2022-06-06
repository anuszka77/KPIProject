import { useEffect, useState} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { loadTierList } from '../../../services/dictionaryService'
import { useSimpleDictionaryContext } from '../SimpleDictionary/SimpleDictionaryContext';

const WIDTH_COL1 = 200;
const WIDTH_COL2 = 400;

export default function MainTierGrid(props) {
    const [rowsMainTierData, setrowsMainTierData] = useState([]);

    useEffect(() => {
        if (props.idDimension) {
            getTierData(props.idDimension);
            setrowsMainTierData([]);
        } else {
            setrowsMainTierData([]);
        }
    }, [props.idDimension]);


    const columnsMainTier = [
        { field: "tierId", headerName: "Numer tieru", width: WIDTH_COL1 },
        { field: "tierName", headerName: "Nazwa tieru", width: WIDTH_COL2 }
    ]


    const getTierData = async (idDimension) => {
        loadTierList(idDimension).then((z) => {
            const rows =
                z.map((item) =>
                    ({ id: item.tierId, tierId: item.tierId, tierName: item.tierName }))
            setrowsMainTierData(rows?.sort((x1, x2) => x1.tierId - x2.tierId));
        })
    }

    // const getSelectedRow = (idSel) => {
    //     const selectedIDs = new Set(idSel);
    //     const selectedRows = rowsMainTierData.filter((row) =>
    //         selectedIDs.has(row.id),
    //     );
    //     setIdSelectedRow(selectedRows);
    // };

    return (
        <div style={{ height: 200, width: '100%' }}>
            {"Ilość wierszy w bazie danych: " + rowsMainTierData.length}
            <DataGrid
                rows={rowsMainTierData}
                columns={columnsMainTier}
                getRowId={(row) => row.id}
                // onSelectionModelChange={(idSel) => { getSelectedRow(idSel) ;  }}
                components={{
                    Toolbar: GridToolbar
                }}
            />
        </div>
    );
}