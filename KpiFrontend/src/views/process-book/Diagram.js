import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadListOfProcessBookActivity , loadProcessDiagramActivity} from '../../services/processBookService';

import { styled } from '@mui/material/styles';

import '@sakit-sa/react-master-detail/dist/index.css';
import { DataSaverOff } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import DiagramRender from './DiagramRender';

import { ProcessContext , useProcessContext} from './ProcessContext';


const Diagram = ({selectedIndex}) => {
  const [data, setData] = useState();

  const {selectedProcessId, setSelectedProcessId} = useProcessContext();  


  useEffect(() => {
    if(selectedIndex != undefined && parseInt(selectedIndex) != 0)
    {
      loadProcessDiagramActivity(selectedIndex).then(x => setData(x));
    }
    else{
      setData([]);
    }     
  }, [selectedIndex]);

  const renderDiagram = (params) => {
    return <DiagramRender params={params} />;
  }

const columnsActivity =[
  {field: "tierId", headerName: "Numer tier", width: 100, position: "sticky"},
  {field: "listProcessActivityXml", headerName: "Przepływ procesu", width: 2000,  renderCell:(row) => renderDiagram(row)}
]

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 'none',
  title: 'Procesy',
  position: '-webkit-sticky',
  position: 'sticky', left: 0,
  zIndex: 1,
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
  alignContent: 'center',
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
  '& .MuiDataGrid-columnHeaders': {
    position: "sticky",
    // Replace background colour if necessary
    backgroundColor: theme.palette.background.paper,
    // Display header above grid data, but below any popups
    zIndex: theme.zIndex.mobileStepper - 1,
},
//...customCheckbox(theme),
}));

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