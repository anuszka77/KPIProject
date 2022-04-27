import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddCircle from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MainCard from 'ui-component/cards/MainCard';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import ListItemButton from '@mui/material/ListItemButton';

import Autocomplete from '@mui/material/Autocomplete';
import NewProcess from './NewProcess';

import { loadDetails, loadColumnToShow , loadListOfProcessBookActivity, loadListOfProcessLayers} from '../../services/processBookService';
import { ProcessContext , useProcessContext} from './ProcessContext';


const ProcessList = () => {
    
  const {selectedProcessId, setSelectedProcessId, processData, setProcessData} = useProcessContext();  

  const [areas, setAreas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [processLabels, setProcessLabels]=useState();
  const [areasLabels, setAreasLabels]=useState();



  useEffect(() => {
    getData();
    //getListOfColumnToShow();
    //getListOfProcessActivity();
    getListOfProcessLayers();
}, []);

  const getData = async => {
    loadDetails().then((x) => {
        setProcessData(x);
        setFilteredData(x);
        setProcessLabels(x.map((row) => ({
            label: row.processName,
            idLabel: row.idProcess
          })))
             
    });
}


const getListOfProcessLayers = async => {
    loadListOfProcessLayers().then((k) => {
      var areas = k.filter(x=> x.dimensionId === 1);
      setAreas(areas);
      setAreasLabels(areas.map((row) => ({
        label: row.layerName,
        idLabel: row.layerId
      })))
    
    
    });
  }



  const onProcessFiltersChanged =(e, newValue) => {
    if(newValue !=null)
    {
      const newData = processData.filter(x => x.idProcess === newValue.idLabel);
      setFilteredData(newData);     
    }
    else
    {
      setFilteredData(processData);
    }
  }

  const onAreaFiltersChanged = (e, newValue) => {
    if(newValue !=null)
    {
      const newData = processData.filter(x => x.areaLayerId === newValue.idLabel);
      setFilteredData(newData);     
    }
    else
    {
      setFilteredData(processData);
    }
  }
  
  const handleListItemClick = (e) => {
    setSelectedProcessId(e.currentTarget.id);     
  };

  return (
    <MainCard>
        <Grid container spacing={3}> 
        <Grid item  xs={9}>
        <div style={{marginTop: "10px", fontWeight: "bold", fontSize: "15px"}}>
        Księga procesów
        </div>
        </Grid>             
        <Grid item xs={1}>
        <NewProcess/>
        </Grid>     
        </Grid>

        <Grid container spacing={2} columns={1}> 
        <Grid item  xs={1}>
        <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={processLabels}
                renderInput={(params) => <TextField {...params} label="Nazwa procesu" />}
                //onChange={onFiltersChanged}
                key={56}
                size="small"
                sx={{width: "260px", marginTop: "15px"}}
                onChange={onProcessFiltersChanged}
            />
        </Grid>
        <Grid item  xs={1}>
            <Autocomplete
                disablePortal
                id="combo-box-demo-2"
                options={areasLabels}
                renderInput={(params) => <TextField {...params} label="Nazwa obszaru" />}
                size="small"
                sx={{width: "260px"}}
                onChange={onAreaFiltersChanged}
            />
        </Grid>
        <Grid item  xs={1}>
        <List sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600,
        '& ul': { padding: 0 },
      }}  >
        <nav aria-label="main mailbox folders">
            {filteredData.map((row) => (
            <ListItemButton  
            divider={false} 
            selected={parseInt(selectedProcessId) === row.idProcess}
            id={row.idProcess}
            onClick={handleListItemClick}               
            >            
            <ListItemText 
            primary={row.processName} 
            secondary={"identyfikator: " + row.idProcess}
                />
            
            </ListItemButton>

            ))}     
            </nav>            
            </List>   
            </Grid>
            </Grid>
      </MainCard>
  );
}

export default ProcessList;