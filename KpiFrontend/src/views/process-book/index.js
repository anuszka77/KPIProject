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


// ==============================|| SAMPLE PAGE ||============================== //
const capitalize = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
  }

const ProcessBook = () => {
    const [data, setData] = useState([]);
    const [columnToShow, setColumnToShow] = useState([]);

    const [value, setValue] = useState('1');

    
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
      width: 250
    }));
    
    
    const rows = data.map((row) => ({
        expanded: false,
        idProcess: row.idProcess,
        processVin: row.processVin,
        processName: row.processName,
        areaLayerName: row.areaLayerName,
        subAreaLayerName: row.subAreaLayerName,
        subjectLayerName: row.subjectLayerName,
        attributeLayerName: row.attributeLayerName
    }));

    useEffect(() => {
      navigate( { state: { rows, columns }})
  }, []);
    


    const changedColor = (e) =>{
     navigate( { state: { rows, columns }})
     
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
                {data.map((row) => (
                <Button 
                variant="contained"
                onClick={changedColor}>
                  {row.processName}
                </Button>
                ))} </Stack>   
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
                              <ProcessDetails></ProcessDetails>
                          </TabPanel>
                          <TabPanel value="2">Item Two</TabPanel>
             </TabContext>
             </div>





            </MasterDetail>
        </div>
    );
};

export default ProcessBook;

