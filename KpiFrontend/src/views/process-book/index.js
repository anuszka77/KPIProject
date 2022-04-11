import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadDetails, loadColumnToShow } from '../../services/processBookService';

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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



// ==============================|| SAMPLE PAGE ||============================== //
const capitalize = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
  }

  const createData = (name, value) => {
    return { name, value};
  }

const ProcessBook = () => {
    const [data, setData] = useState([]);
    const [columnToShow, setColumnToShow] = useState([]);

    const [value, setValue] = useState('1');

    const [processDetails, setProcessDetails] = useState([]);
    const [rows, setRows]=useState([]);

    const [flag, setFlag] = useState(false);


    
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const getData = async => {
        loadDetails().then((x) => {
            setData(x);
                 
        });
    }

    const getListOfColumnToShow = async => {
      loadColumnToShow(1,1).then((y) => {
        setColumnToShow(y);
      });
  }

    useEffect(() => {
        getData();
        getListOfColumnToShow();
    }, []);

    const columns = columnToShow.map((row) => ({
      field: capitalize(row.columnToGridName),
      headerName: row.columnToGridNamePl,
      id: row.idColumnsToGrid
    }));
    
    
   /* const rows = processDetails.map((row) => ({
        expanded: false,
        idProcess: row.idProcess,
        processVin: row.processVin,
        processName: row.processName,
        areaLayerName: row.areaLayerName,
        subAreaLayerName: row.subAreaLayerName,
        subjectLayerName: row.subjectLayerName,
        attributeLayerName: row.attributeLayerName
    }));*/


    /*const rows = [
      {id: 1, name: processDetails.idProcess},
      {id: 2, name: processDetails.processName},
      {id: 9, name: processDetails.areaLayerName},
      {id: 13, name: processDetails.subAreaLayerName},
      {id: 21, name: processDetails.subjectLayerName},
      {id: 29, name: processDetails.attributeLayerName}
    ];
    */
    


    useEffect(() => {
      navigate( { state: { rows, columns }})
  }, []);
    


    const onProcessClick = (e) =>{
     //navigate( { state: { rows, columns }})
     setFlag(!flag);
     const selectedProcessName = e.target.innerText.toLowerCase();
     
     const filter = data
     .filter(x => x.processName.toLowerCase() === selectedProcessName);


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

      console.log(y.filter(z => z.id == 1)[0].name + " no zoba jest poszłoooooooooooooooo")
     //processDetails.filter

    }


    
    return (
      <div style={{height: 900, width:"100%"}}>
          
      <MasterDetail 
      canClose={false}
      defaultMasterWidth="50px"
      masterWidth="300px"
      adjustable={false}
      >

          <div>
            <div>Księga procesów</div>
            <div>
              <Stack direction="column" spacing={1}>
              <ButtonGroup  variant="contained" orientation="vertical" aria-label="outlined primary button group" spacing={2}>
                {data.map((row) => (
                <Button 
                onClick={onProcessClick}
                //color={flag ? "primary" : "secondary"}
                //key={row.idProcess}
                >
                 {row.processName}
                </Button>
                ))}                 </ButtonGroup>
                </Stack>   
            </div>   
          </div>

<div>
          <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                              <TabList onChange={handleChange} >
                                  <Tab label="Szczegóły procesu" value="1" />
                                  <Tab label="Czynności" value="2" />
                              </TabList>
                          </Box>
                          <TabPanel value="1" style={{height: `inherit`}} >
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">                                     
                                      <TableBody>                                     
                                        {columns.map((row) => 
                                        processDetails.length != 0 ?
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
                          <TabPanel value="2">Item Two</TabPanel>
             </TabContext>
             </div>





            </MasterDetail>
        </div>
    );
};

export default ProcessBook;

