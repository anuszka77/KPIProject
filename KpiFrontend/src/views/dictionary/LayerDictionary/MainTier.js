// material-ui
import { Typography } from '@mui/material';

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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loadDimensions, loadTierList, saveLayers, loadDictSystem } from '../../../services/dictionaryService';
import { useEffect, useState } from 'react';
import MainTierGrid from './MainTierGrid'

const MainTier = () => {

    const [dimension, setDimension] = useState([]);
    const [dimensionValue, setDimensionValue] = React.useState('');
    const [tierList, setTierList] = useState([]);
    const [tierValue, setTierValue] = React.useState('');
    const [layerName, setLayerName] = useState();
    const [dictSystem, setDictSystem] = useState([]);
    const [systemValue, setSystemValue] = useState();


    useEffect(() => {
        getDimensions();
        getDictSystem();
    }, []);


    const getDimensions = async => {
        loadDimensions().then((x) => {
            setDimension(x);
        });
    }

    const getDictSystem = async => {
        loadDictSystem().then((x) => {
            setDictSystem(x);
        });
    }

    const handleChange = (event) => {
        setDimensionValue(event.target.value);
        setTierValue(null);
        loadTierList(event.target.value).then((x) => {
            setTierList(x);
        })
    };

    const handleChangeTier = (event) => {
        setTierValue(event.target.value);
    };


    const onSaveButtonClick = (e) => {
        var list = [{ dimensionId: dimensionValue, tierId: tierValue, name: layerName }];
        saveLayers(list, systemValue).then(x => alert(x));
    }


    const onLayerNameChanged = (e) => {
        setLayerName(e.target.value);
    }

    const onSystemChanged = (e) => {
        setSystemValue(e.target.value);
    }

    return (
        <MainCard title="Słowniki do księgi procesów">
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
                                        label="System"
                                        onChange={onSystemChanged}
                                        value={systemValue}
                                    >
                                        {dictSystem.map((row) => (
                                            <MenuItem value={row.idSystem} key={row.idSystem}>
                                                {row.systemName}
                                            </MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={6} sm={6} xs={12}>
                            <Box sx={{ minWidth: 12 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Nazwa wymiaru</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Nazwa wymiaru"
                                        onChange={handleChange}
                                        value={dimensionValue}
                                    >
                                        {dimension.map((row) => (
                                            <MenuItem value={row.idDimension} key={row.idDimension}>
                                                {row.dimensionDescription}
                                            </MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6} xs={12}>
                            <Box sx={{ minWidth: 12 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label2"
                                        id="demo-simple-select2"
                                        value={tierValue}
                                        label="Nazwa tier"
                                        onChange={handleChangeTier}
                                    >
                                        {tierList.map((row) => (
                                            <MenuItem value={row.tierId} key={row.tierId}>
                                                {row.tierName}
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
                                    onChange={onLayerNameChanged}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item lg={1} md={6} sm={6} xs={12} alignItems="flex-end">
                            <Box sx={{ minWidth: 12 }}>
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
            <MainTierGrid />
        </MainCard>
    );
};
export default MainTier;
