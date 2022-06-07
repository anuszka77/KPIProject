
// project imports
import * as React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { loadDimensions } from '../../../services/dictionaryService';
import { useEffect, useState } from 'react';
import MainTierGrid from './MainTierGrid'

const MainTier = () => {
    const [dimensionList, setDimensionList] = useState([]);
    const [dimensionValueId, setDimensionValueId] = React.useState(-1);
    useEffect(() => {
        getDimensions();
    }, []);

    const getDimensions = async => {
        loadDimensions().then((x) => {
            setDimensionList(x);
        });
    }


    const onDimensionChanged = (event) => {
        setDimensionValueId(event.target.value);
    };

    return (
        <div>
            <MainCard title="Słowniki tierów"  >
                <Grid container spacing={gridSpacing}  >
                    <Grid item xs={12}  >
                        <Grid container spacing={gridSpacing} >

                            <Grid item lg={2} md={6} sm={6} xs={12} >
                                <Box sx={{ minWidth: 12 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Nazwa wymiaru</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Nazwa wymiaru"
                                            onChange={onDimensionChanged}
                                            value={dimensionValueId}
                                        >
                                            {dimensionList.map((row) => (
                                                <MenuItem value={row.idDimension} key={row.idDimension}>
                                                    {row.dimensionDescription + " (" + row.idDimension +"-"+row.dimensionName + ")"}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </MainCard>
            <MainTierGrid idDimensionInp={dimensionValueId} />
        </div>
    );
};
export default MainTier;
