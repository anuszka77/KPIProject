// project imports
import * as React from 'react';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { loadDictSystem,loadDictKpi } from '../../../services/dictionaryService';
import MainCard from 'ui-component/cards/MainCard';


const KpiAddingPanel = () => {
    const [dictKpi, setDictKpi] = useState([]);
    const [idKpiSelected, setIdKpiSelected] = useState([]);

    useEffect(() => {
        loadDictKpi().then((x) => {
            setDictKpi(x);
            console.log(x);
        });
    }, []);



    const onSaveButtonClick = (e) =>{
        // var list = [{dimensionId: dimensionValue, tierId: tierValue, name: layerName}];
        // saveLayers(list, systemValue).then(x=>alert(x));
    }

    const onKpiChanged = (e) =>{
        setIdKpiSelected(e.target.value);
    }
    


    return (
        <MainCard title="Sownik Kpi">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={3} md={6} sm={6} xs={12}>
                            <Box sx={{ minWidth: 12 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">System</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Kpi"
                                         onChange={onKpiChanged}
                                        value={idKpiSelected}
                                    >
                                        {dictKpi.map((row) => (
                                            <MenuItem value={row.idKpi} key={row.Kpi}>
                                                {row.systemName}
                                            </MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6} xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    id="outlined-basic"
                                    label="Nazwa warstwy"
                                    variant="outlined"
                                // onChange={onLayerNameChanged}        
                                />
                            </FormControl>
                        </Grid>

                        <Grid item lg={1} md={6} sm={6} xs={12} alignItems="flex-end">
                        <Box sx={{ minWidth: 12}}>
                            <FormControl fullWidth>
                            <Button 
                            variant="contained"
                            onClick={onSaveButtonClick}
                            >Zapisz
                            </Button>
                            </FormControl>
                        </Box>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};
export default KpiAddingPanel;


