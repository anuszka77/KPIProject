import { useEffect, useState } from 'react';
import { getColumnConfig } from './SimpleDictionaryColumnsToGrid';
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';
import { DefinedColumnsType } from './SimpleDictionaryColumnsToGrid'
import { StyledDataGrid } from '../../../designed-components/StyledDataGrid';
import { loadDictKpi, loadDictSystem } from 'services/dictionaryService';
import { SimpleDictionaryKpiType, SimpleDictionarySystemType } from './SimpleDictionaryTableInterfaces';

export default function SimpleDictionaryGrid() {

  const { idSimpleDictionarySelected, setIdSimpleDictionarySelected } = useSimpleDictionaryContext();
  const [columns, setColumns] = useState<DefinedColumnsType[]>();
  const [rowsSimpleDictionaryData, setRowsSimpleDictionaryData] = useState<SimpleDictionaryKpiType[] | SimpleDictionarySystemType[]>([]);

  useEffect(() => {
    getSimpleDictionaryData(idSimpleDictionarySelected);;
  }, [idSimpleDictionarySelected]);


  const getSimpleDictionaryData = async (idSimpleDictionarySelected: number) => {
    switch (idSimpleDictionarySelected) {
      case 5:

        loadDictKpi().then((z) => {
          const rows: SimpleDictionaryKpiType[] = z.map((item: SimpleDictionaryKpiType) => ({ id: item.idKpi, idKpi: item.idKpi, kpi: item.kpi }))
          setRowsSimpleDictionaryData(rows);
        })
        break;
      case 6:
        loadDictSystem().then((z) => {
          const rows: SimpleDictionarySystemType[] = z.map((item: SimpleDictionarySystemType) => ({ id: item.idSystem, idSystem: item.idSystem, systemName: item.systemName }))
          setRowsSimpleDictionaryData(rows);
        });
        break;
    }

  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        rows={rowsSimpleDictionaryData}
        columns={getColumnConfig(idSimpleDictionarySelected)}
        getRowId={(row) => row.id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}