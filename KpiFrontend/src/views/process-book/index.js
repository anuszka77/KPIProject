import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid , GridToolbar} from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadDetails, loadColumnToShow , loadListOfProcessBookActivity, loadListOfProcessLayers} from '../../services/processBookService';
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
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddCircle from '@mui/icons-material/AddCircle';
import Edit from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';

import NewProcess from './NewProcess';
import Diagram from './Diagram';
import Link from '@mui/material/Link';
import ProcessDetails from './ProcessDetails';
import ProcessList from './ProcessList';
import ProcessActivity from './ProcessActivity';

import { useProcessContext, ProcessContext } from './ProcessContext';

// ==============================|| SAMPLE PAGE ||============================== //
const capitalize = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
  }

  const createData = (name, value) => {
    return { name, value};
  }

const ProcessBook = () => {
    
    const [selectedProcessId, setSelectedProcessId] = useState(0);
    const [processData, setProcessData] = useState([]);
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <ProcessContext.Provider value={{ selectedProcessId, setSelectedProcessId, processData, setProcessData}}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item lg={2.5} md={4} sm={3} xs={12}>
                <ProcessList/>
              </Grid>
              <Grid item lg={9.5} md={8} sm={9} xs={12}>
                <MainCard>
                <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} >
                                        <Tab label="Szczegóły procesu" value="1" />
                                        <Tab label="Czynności" value="2" />
                                        <Tab label="Diagram" value="3" />

                                    </TabList>
                                </Box>
                                <TabPanel value="1" style={{height: `inherit`}} >
                                  <ProcessDetails/>
                                </TabPanel>
                                <TabPanel value="2" style={{height: `inherit`}} >
                                  <ProcessActivity/>                                  
                                </TabPanel>
                                <TabPanel value="3" style={{height: `inherit`}} >                       
                                  <Diagram/>                         
                                </TabPanel>
                  </TabContext> 
                 </MainCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </ProcessContext.Provider>

    );
};

export default ProcessBook;

