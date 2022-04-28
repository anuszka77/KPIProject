import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadListOfProcessBookActivity , loadProcessDiagramActivity} from '../../services/processBookService';

import { styled } from '@mui/material/styles';

import '@sakit-sa/react-master-detail/dist/index.css';
import { DataSaverOff, SignalCellularNullOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import DiagramRender from './DiagramRender';
import { StyledDataGrid} from '../../designed-components/StyledDataGrid';


import { ProcessContext , useProcessContext} from './ProcessContext';


const Diagram = () => {
  const [data, setData] = useState();

  const {selectedProcessId, setSelectedProcessId} = useProcessContext();  


  useEffect(() => {
    if(selectedProcessId != undefined && parseInt(selectedProcessId) != 0)
    {
      loadProcessDiagramActivity(selectedProcessId).then(x => setData(x));
    }
    else{
      setData([]);
    }     
  }, [selectedProcessId]);

  const renderDiagram = (params) => {
    return <DiagramRender params={params} />;
  }

const columnsActivity =[
  {field: "tierId", headerName: "Numer tier", width: 100, position: "sticky"},
  {field: "listProcessActivityXml", headerName: "Przepływ procesu", width: 2000,  renderCell:(row) => row !=undefined  && row!=null?  renderDiagram(row) : null}
]

return(
  
 <StyledDataGrid
      rows={data != undefined ? data : []}
      columns={columnsActivity}
      checkboxSelection={false}
      disableSelectionOnClick
      getRowId={(row) => row.tierId}
      height="100%"
      direction="rtl"
      rowHeight={100}
      autoPageSize={false}
      width="100%"
      disableExtendRowFullWidth={true}
      

      
      />
);
}

export default Diagram;