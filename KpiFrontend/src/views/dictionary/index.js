// material-ui
import { useState } from 'react';
// project imports
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';

import MainTier from './LayerDictionary/MainTier';
import SimpleDictionaryConfigPanel from './SimpleDictionary/SimpleDictionaryConfigPanel';
import SimpleDictionaryGrid from './SimpleDictionary/SimpleDictionaryGrid';
import { SimpleDictionaryContext, useSimpleDictionaryContext } from './SimpleDictionary/SimpleDictionaryContext';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



// ==============================|| SAMPLE PAGE ||============================== //

const Dictionary = () => {
    const [idSimpleDictionarySelected, setIdSimpleDictionarySelected] = useState(0);
    const [idSelectedRow, setIdSelectedRow] = useState([]);
    const [orderReloadGrid, setOrderReloadGrid] = useState(false);
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <SimpleDictionaryContext.Provider value={{ idSimpleDictionarySelected, setIdSimpleDictionarySelected, idSelectedRow, setIdSelectedRow,orderReloadGrid,setOrderReloadGrid }}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={12} md={6} sm={6} xs={12}>

                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} >
                                        <Tab label="Słowniki layerów" value="1" />
                                        <Tab label="Słowniki proste" value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1" style={{ height: `inherit` }} >
                                    <MainTier />
                                </TabPanel>
                                <TabPanel value="2" style={{ height: `inherit` }} >
                                    <SimpleDictionaryConfigPanel />
                                    {idSimpleDictionarySelected != 0 && <SimpleDictionaryGrid />}
                                </TabPanel>
                            </TabContext>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SimpleDictionaryContext.Provider>
    );
}
export default Dictionary;