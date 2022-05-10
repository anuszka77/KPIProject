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
import { loadDictListOfSimpleDictionary, addElementToSystemDictionary } from '../../../services/dictionaryService';
import MainCard from 'ui-component/cards/MainCard';
import { getColumnConfig } from './SimpleDictionaryColumnsToGrid';
import { getDataToGrid } from './SimplyDictionaryGetDataBySelectedValue'
import { useSimpleDictionaryContext } from './SimpleDictionaryContext';

const SimpleDictionaryConfigPanel = () => {
    const [dictListOfSimpleDictionary, setDictListOfSimpleDictionary] = useState([]);
    const { idSimpleDictionarySelected, setIdSimpleDictionarySelected } = useSimpleDictionaryContext();
    const [idNewDictionarySelected, setIdNewDictionarySelected] = useState();
    const [nameNewDictionarySelected, setNameNewDictionarySelected] = useState();
    const [isButtonDisable, setIsButtonDisable] = useState(true);

    useEffect(() => {
        loadDictListOfSimpleDictionary().then((x) => {
            setDictListOfSimpleDictionary(x);
        });
    }, []);


    useEffect(() => {
        getDataToGrid();
    }, [idSimpleDictionarySelected]);

    useEffect(() => {
        checkIfSetEnableButton();
    }, [idSimpleDictionarySelected, idNewDictionarySelected, nameNewDictionarySelected]);


    const checkIfSetEnableButton = () => {
        if (idSimpleDictionarySelected === 0 || idNewDictionarySelected === undefined || nameNewDictionarySelected === undefined) {
            setIsButtonDisable(true);
        } else {
            setIsButtonDisable(false);
        }

    }

    const clearFields = () =>{
        setIdNewDictionarySelected("");
        setNameNewDictionarySelected("");

    }

    const onSaveButtonClick = (e) => {
        // var list = [{dimensionId: dimensionValue, tierId: tierValue, name: layerName}];
        // saveLayers(list, systemValue).then(x=>alert(x));
        
        
        if (window.confirm('Czy na pewno chcesz dodać wpis?')) {
            addElementToSystemDictionary(idNewDictionarySelected, nameNewDictionarySelected).then(x => alert(x));
            clearFields();
        }
        else {
            clearFields();
            console.log(idNewDictionarySelected);
            console.log(nameNewDictionarySelected);
        }
    }

    const onSimpleDictionaryChanged = (e) => {
        setIdSimpleDictionarySelected(e.target.value);
    }

    const onIdNewDictionaryChanged = (e) => {
        setIdNewDictionarySelected(e.target.value);
    }

    const onNameNewDictionaryChanged = (e) => {
        setNameNewDictionarySelected(e.target.value);
    }


    return (
        <MainCard title="Słowniki">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={3} md={6} sm={6} xs={12}>
                            <Box sx={{ minWidth: 12 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Wybierz słownik z listy</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Wybierz słownik z listy"
                                        onChange={onSimpleDictionaryChanged}
                                        value={idSimpleDictionarySelected}
                                    >
                                        {dictListOfSimpleDictionary.map((row) => (
                                            <MenuItem value={row.idNameSimpleDictionary} key={row.idNameSimpleDictionary}>
                                                {row.nameSimpleDictionary}
                                            </MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item lg={2} md={6} sm={6} xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    id="outlined-basic"
                                    label="Id wartości (0- automat)"
                                    variant="outlined"
                                    type="number"
                                    value={idNewDictionarySelected}
                                    onChange={onIdNewDictionaryChanged}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6} xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    id="outlined-basic"
                                    label="Nazwa nowej wartości"
                                    variant="outlined"
                                    onChange={onNameNewDictionaryChanged}
                                    value={nameNewDictionarySelected}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item lg={1} md={6} sm={6} xs={12} alignItems="flex-end">
                            <Box sx={{ minWidth: 12 }}>
                                <FormControl fullWidth>
                                    <Button
                                        variant="contained"
                                        onClick={onSaveButtonClick}
                                        disabled={isButtonDisable}
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
export default SimpleDictionaryConfigPanel;


