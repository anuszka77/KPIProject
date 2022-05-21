// material-ui
import { useState } from 'react';
// project imports
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';

import MainTier from './MainTier';
import SimpleDictionaryConfigPanel from './SimpleDictionary/SimpleDictionaryConfigPanel';
import SimpleDictionaryGrid from './SimpleDictionary/SimpleDictionaryGrid';
import { SimpleDictionaryContext, useSimpleDictionaryContext } from './SimpleDictionary/SimpleDictionaryContext';




// ==============================|| SAMPLE PAGE ||============================== //

const Dictionary = () => {
    const [idSimpleDictionarySelected, setIdSimpleDictionarySelected] = useState(0);
    const [idSelectedRow, setIdSelectedRow] = useState([]);
    return (
        <SimpleDictionaryContext.Provider value={{ idSimpleDictionarySelected, setIdSimpleDictionarySelected,idSelectedRow,setIdSelectedRow }}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={12} md={6} sm={6} xs={12}>
                            <MainTier />
                            <SimpleDictionaryConfigPanel />
                            {idSimpleDictionarySelected != 0 && <SimpleDictionaryGrid />}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SimpleDictionaryContext.Provider>
    );
}
export default Dictionary;

/*

 <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                    <MainTier/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <MainTier/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                    <MainTier/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <MainTier/>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
      



*/