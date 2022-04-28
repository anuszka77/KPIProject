// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';

import MainTier from './MainTier';
import KpiAddingPanel from './kpiDictionary/KpiAddingPanel';
import KpiGrid from './kpiDictionary/KpiGrid';




// ==============================|| SAMPLE PAGE ||============================== //

const Dictionary = () => (
         <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                    <MainTier/>
                    <KpiAddingPanel/>
                    <KpiGrid/>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
      
);

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