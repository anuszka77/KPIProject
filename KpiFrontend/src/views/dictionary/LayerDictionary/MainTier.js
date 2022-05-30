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
import { operationEnum } from '../SimpleDictionary/SimpleDictionaryEnum';
import { loadDimensions, loadTierList, saveLayers, loadDictSystem } from '../../../services/dictionaryService';
import { useEffect, useState } from 'react';
import MainTierGrid from './MainTierGrid'
import { useSimpleDictionaryContext } from '../SimpleDictionary/SimpleDictionaryContext';
import AlertDialogButton from '../../../utils/AlertDialogButton';
import AlertInformationPopup from '../../../utils/AlertInformationPopup';

const MainTier = () => {
    const { idSimpleDictionarySelected, setIdSimpleDictionarySelected, idSelectedRow, setIdSelectedRow } = useSimpleDictionaryContext();
    const [dimension, setDimension] = useState([]);
    const [dimensionValue, setDimensionValue] = React.useState('');
    const [tierList, setTierList] = useState([]);
    const [tierValue, setTierValue] = React.useState('');
    const [layerName, setLayerName] = useState("");
    const [dictSystem, setDictSystem] = useState([]);
    const [systemValue, setSystemValue] = useState('');
    const [isButtonDisable, setIsButtonDisable] = useState(true);
    const [buttonName, setButtonName] = useState("Zapisz");
    const [oparation, setOperation] = useState(operationEnum.Add);
    const [listOfSelectedRow, setListOfSelectedRow]=useState("")


    useEffect(() => {
        getDimensions();
        getDictSystem();
    }, []);

    let text = "";
    
    useEffect(() => {
        nameButtonSelect();

        if (idSelectedRow.length === 1) {
            console.log(idSelectedRow[0].id)
            setListOfSelectedRow(idSelectedRow[0].id)

        } else if (idSelectedRow.length === 0) {
            setListOfSelectedRow("");
        } else {
            idSelectedRow.forEach((element) => { text += element.id + ";" })
            setListOfSelectedRow(text)
        }
    }, [idSelectedRow,layerName]);


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
        saveLayers(list, systemValue).then(x => alert(x.returnMessage + x.isSuccess + x.returnStatus));
    }


    const onLayerNameChanged = (e) => {
        setLayerName(e.target.value);
    }

    const onSystemChanged = (e) => {
        setSystemValue(e.target.value);
    }

    const nameButtonSelect = () => {
        if (idSelectedRow.length === 0) {
            setOperation(operationEnum.Add);
            setButtonName("Zapisz");
        } else if (idSelectedRow.length === 1 && layerName.length > 0) {
            setOperation(operationEnum.Update);
            setButtonName("Aktualizuj");
        } else if (idSelectedRow.length > 0) {
            setOperation(operationEnum.Delete);
            let newButtonName = "Usuń:"+ listOfSelectedRow;
            setButtonName(newButtonName);
        }
    }

    const onAgree = () => {
        // switch (oparation) {
        //     case operationEnum.Add
        
       
        //         :  var list = [{ dimensionId: dimensionValue, tierId: tierValue, name: layerName }];
        // saveLayers(list, systemValue).then(x => { setInformationFromDb(x); setShowPopup(true); setIdSimpleDictionarySelected(""); });
        //         break;
        //     case operationEnum.Update
        //         : modifySpecificDictionary(idSimpleDictionarySelected, idNewDictionarySelected, nameNewDictionarySelected).then(x => { setInformationFromDb(x); setShowPopup(true) });
        //         break;
        //     case operationEnum.Delete
        //         : deleteSpecificDictionary(idSimpleDictionarySelected, idNewDictionarySelected).then(x => { setInformationFromDb(x); setShowPopup(true) });
        //         break;
        // }

        // clearFields();
    }

    const onDisagree = () => {
        // clearFields();
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

                                    <AlertDialogButton
                                        buttonName={buttonName }
                                        isDisabled={isButtonDisable}
                                        onDisagree={onDisagree}
                                        onAgree={onAgree} />
                                    {/* {showPopup && <AlertInformationPopup information={informationFromDb} isOpen={showPopup} onClosePopup={onClosePopup} />} */}
                             
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {"Lista zaznaczonych wierszy" +listOfSelectedRow}
            <MainTierGrid idSystem={systemValue} idDimension={dimensionValue} idTier={tierValue} />
        </MainCard>
        
    );
};
export default MainTier;
