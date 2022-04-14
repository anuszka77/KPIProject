import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadDetails, loadColumnToShow , loadListOfProcessBookActivity} from '../../services/processBookService';
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { styled } from '@mui/material/styles';
import MasterDetail from '@sakit-sa/react-master-detail';
import '@sakit-sa/react-master-detail/dist/index.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
import ProcessDetails from './ProcessDetails';
import { useHistory } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import ListItemButton from '@mui/material/ListItemButton';
import { Construction } from '@mui/icons-material';
import ListItem from "@material-ui/core/ListItem";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


// ==============================|| SAMPLE PAGE ||============================== //
const capitalize = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
  }

  const createData = (name, value) => {
    return { name, value};
  }

const ProcessBook = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [columnToShow, setColumnToShow] = useState([]);

    const [value, setValue] = useState('1');

    const [processDetails, setProcessDetails] = useState([]);
    const [rows, setRows]=useState([]);

    const [flag, setFlag] = useState(false);

    const [activity, setActvity] = useState([]);

    const [rowsActivity, setRowsActivity]=useState([]);

    const [filterProcessValue, setFilterProcessValue] = useState();




    //loadListOfProcessBookActivity
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const getData = async => {
        loadDetails().then((x) => {
            setData(x);
            setFilteredData(x);
                 
        });
    }

    const getListOfColumnToShow = async => {
      loadColumnToShow(1,1).then((y) => {
        setColumnToShow(y);
      });
  }

  
  const getListOfProcessActivity = async => {
    loadListOfProcessBookActivity().then((z) => {
      setActvity(z);
    });
}

    useEffect(() => {
        getData();
        getListOfColumnToShow();
        getListOfProcessActivity();
    }, []);

    const columns = columnToShow.map((row) => ({
      field: capitalize(row.columnToGridName),
      headerName: row.columnToGridNamePl,
      id: row.idColumnsToGrid
    }));
    
    
 
    const columnsActivity =[
      {field: "stepId", headerName: "Nr kroku", width: 80},
      {field: "activityVin", headerName: "Nr Vin", width: 100},
      {field: "activityTierName", headerName: "Nazwa Tier", width: 150},
      {field: "activityLayerName", headerName: "Nazwa warstwy", width: 150},
      {field: "actionStepName", headerName: "Nazwa kroku", width: 500},
      {field: "activityHierarchyName", headerName: "Hierarchia",  width: 150}
    ]

 
    useEffect(() => {
      navigate( { state: { rows, columns }})
  }, []);
    

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

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (e) => {
      setSelectedIndex(e.currentTarget.id);
      setFlag(true);
     const selectedProcessId = e.currentTarget.id;
     
     const filter = data
     .filter(x => x.idProcess=== parseInt(selectedProcessId));


      setProcessDetails(filter);

      const y=[
        {id: 1, name: filter[0].idProcess},
        {id: 2, name: filter[0].processName},
        {id: 9, name: filter[0].areaLayerName},
        {id: 13, name: filter[0].subAreaLayerName},
        {id: 21, name: filter[0].subjectLayerName},
        {id: 29, name: filter[0].attributeLayerName}
      ];
      
      setRows(y);
      
      
      
      const rows = activity.filter(x => x.processId=== parseInt(selectedProcessId)).map((row) => ({
        processId: row.processId,
        activityVin: row.activityVin,
        activityTierName: row.activityTierName,
        activityLayerName: row.activityLayerName,
        activityTierName: row.activityTierName,
        actionStepName: row.actionStepName,
        activityHierarchyName: row.activityHierarchyName,        
        stepId: row.stepId
    }));

            
      setRowsActivity(rows?.sort((x1,x2)=>x1.stepId-x2.stepId));
    };
  
    const processLabels=data.map((row) => ({
      label: row.processName,
      idLabel: row.idProcess
    }));
    

    const onFiltersChanged =(e, newValue) => {
      if(newValue !=null)
      {
        setFilterProcessValue(newValue.idLabel);
        setFilteredData(data.filter(x => x.idProcess === newValue.idLabel));
        setProcessDetails(newValue.idLabel);
      }
      else
      {
        setFilterProcessValue(null);
        setFilteredData(data);
        setProcessDetails(null);

      }
    }

    return (
      <div style={{height: 900, width:"100%"}}>
      <Grid container spacing={1} columns={1}>
      <Grid item xs={12}>
      <MainCard> 
        <Grid container spacing={30}>
              <Grid item xs={2}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={processLabels}
                  renderInput={(params) => <TextField {...params} label="Nazwa procesu" />}
                  //onChange={onFiltersChanged}
                  key={56}
                  size="small"
                  sx={{width: "260px"}}
                  onChange={onFiltersChanged}
                />
                                                 
              </Grid>
              <Grid item xs={3}>
              <Autocomplete
                  disablePortal
                  id="combo-box-demo-2"
                  options={processLabels}
                  renderInput={(params) => <TextField {...params} label="Nazwa obszaru" />}
                  size="small"
                  sx={{width: "260px"}}
                  //onChange={processFilters}
                />
              </Grid>
              <Grid item md={4}  xs={2}>
              <Button  variant="contained">Nowy proces</Button>
              </Grid>

              </Grid>
              
              
              
              </MainCard>
      </Grid>

      <Grid item xs={12}>

      <MasterDetail 
      canClose={false}
      defaultMasterWidth="50px"
      masterWidth="300px"
      adjustable={false}
      
      >
 
          <div>
            <div>
              Księga procesów</div>
            <div>
             
            <List sx={{width: '100%', maxWidth: 360 }} >
            <nav aria-label="main mailbox folders">
                {filteredData.map((row) => (
                 <ListItemButton  
                 divider={false} 
                 selected={parseInt(selectedIndex) === row.idProcess}
                 id={row.idProcess}
                 onClick={handleListItemClick} >    
                <ListItemAvatar>
                   <Avatar>
                     <Construction />
                   </Avatar>
                 </ListItemAvatar>   
                 <ListItemText 
                 primary={row.processName} 
                 secondary={"identyfikator: " + row.idProcess}
                  />
                 
                 </ListItemButton>

                ))}     
                </nav>            
                </List>  
                 
            </div>   
          </div>

<div>
          <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                              <TabList onChange={handleChange} >
                                  <Tab label="Szczegóły procesu" value="1" />
                                  <Tab label="Czynności" value="2" />
                                  <Tab label="Diagram" value="3" />

                              </TabList>
                          </Box>
                          <TabPanel value="1" style={{height: `inherit`}} >
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">                                     
                                      <TableBody>                                     
                                        {columns.map((row) => 
                                        (processDetails != null && processDetails.length != 0) ?
                                        (
                                          <TableRow
                                            key={row.field}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >
                                            <TableCell component="th" scope="row">
                                              {row.headerName}
                                            </TableCell>
                                            <TableCell>{rows.filter(x => x.id === row.id)[0].name}</TableCell>
                                          </TableRow>
                                        )
                                        :
                                        (
                                          <TableRow
                                            key={row.field}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >                                           
                                          <TableCell component="th" scope="row">
                                          {row.headerName}
                                        </TableCell>
                                        </TableRow>
                                        )
                                        )
                                        }
                                      </TableBody>
                                    </Table>
                              </TableContainer>
                          </TabPanel>
                          <TabPanel value="2" style={{height: `inherit`}} >
                              <StyledDataGrid
                                  rows={rowsActivity}
                                  columns={columnsActivity}
                                  //pageSize={100}
                                  //rowsPerPageOptions={[12]}
                                  checkboxSelection={false}
                                  disableSelectionOnClick
                                  getRowId={(row) => row.stepId}
                                  height="100%"
                                  direction="rtl"
                                  /> 
                                
                          </TabPanel>
                          <TabPanel value="3" style={{height: `inherit`}} >Diagramy </TabPanel>
             </TabContext>
             </div>

            </MasterDetail>
            </Grid>
              </Grid>
        </div>

    );
};

export default ProcessBook;

