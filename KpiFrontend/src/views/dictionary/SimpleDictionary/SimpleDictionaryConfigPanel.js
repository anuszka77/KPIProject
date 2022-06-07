import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { loadDictListOfSimpleDictionary, modifySpecificDictionary, deleteSpecificDictionary } from '../../../services/dictionaryService';
import MainCard from 'ui-component/cards/MainCard';
import { useDictionaryContext } from '../DictionaryGeneralUtils/DictionaryContext';
import AlertDialogButton from '../../../utils/AlertDialogButton';
import AlertInformationPopup from '../../../utils/AlertInformationPopup';
import { simpleDictionaryAddToDatabase } from './SimpleDictionaryAddToDatabase';
import { operationEnum } from "../DictionaryGeneralUtils/DictionaryEnum";

const SimpleDictionaryConfigPanel = () => {
    const [dictListOfSimpleDictionary, setDictListOfSimpleDictionary] = useState([]);
    const { idSimpleDictionarySelected, setIdSimpleDictionarySelected, idSelectedRow, orderReloadGrid, setOrderReloadGrid } = useDictionaryContext();
    const [idNewDictionarySelected, setIdNewDictionarySelected] = useState(0);
    const [nameNewDictionarySelected, setNameNewDictionarySelected] = useState("");
    const [isButtonDisable, setIsButtonDisable] = useState(true);
    const [buttonName, setButtonName] = useState("Zapisz");
    const [dialogQuestion,setDialogQuestion]=useState("");

    const [statusFromDb, setStatusFromDb] = useState(0);
    const [informationFromDb, setInformationFromDb] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [oparation, setOperation] = useState(operationEnum.Add);

    useEffect(() => {
        loadDictListOfSimpleDictionary().then((x) => {
            setDictListOfSimpleDictionary(x);
        });
    }, []);

    let text = "";

    useEffect(() => {
        nameButtonSelect();

        if (idSelectedRow.length === 1) {
            console.log(idSelectedRow[0].id)
            setIdNewDictionarySelected(idSelectedRow[0].id)

        } else if (idSelectedRow.length === 0) {
            setIdNewDictionarySelected(0);
        } else {
            idSelectedRow.forEach((element) => { text += element.id + ";" })
            setIdNewDictionarySelected(text)
        }
    }, [idSelectedRow, nameNewDictionarySelected]);

    useEffect(() => {
        checkIfSetEnableButton();
    }, [idSimpleDictionarySelected, idNewDictionarySelected, nameNewDictionarySelected, oparation]);


    const checkIfSetEnableButton = () => {
        if ((idSimpleDictionarySelected && idNewDictionarySelected >= 0 && nameNewDictionarySelected) || oparation === 3) {
            setIsButtonDisable(false);
        } else {
            setIsButtonDisable(true);
        }
    }

    const clearFields = () => {
        setIdNewDictionarySelected("");
        setNameNewDictionarySelected("");
    }

    const onClosePopup = (e) => {
        setShowPopup(false);
        return false;
    }

    const onAgree = () => {
        switch (oparation) {
            case operationEnum.Add
                : simpleDictionaryAddToDatabase(idNewDictionarySelected, nameNewDictionarySelected, idSimpleDictionarySelected).then(x => { setInformationFromDb(x.returnMessage); setShowPopup(true); setStatusFromDb(x.returnStatus) });
                setOrderReloadGrid(!orderReloadGrid);
                break;
            case operationEnum.Update
                : modifySpecificDictionary(idSimpleDictionarySelected, idNewDictionarySelected, nameNewDictionarySelected).then(x => { setInformationFromDb(x.returnMessage); setShowPopup(true); setStatusFromDb(x.returnStatus) });
                setOrderReloadGrid(!orderReloadGrid);
                break;
            case operationEnum.Delete
                : deleteSpecificDictionary(idSimpleDictionarySelected, idNewDictionarySelected).then(x => { setInformationFromDb(x.returnMessage); setShowPopup(true); setStatusFromDb(x.returnStatus) });
                setOrderReloadGrid(!orderReloadGrid);
                break;
        }

        clearFields();
    }

    const onDisagree = () => {
        clearFields();
    }

    const onSimpleDictionaryChanged = (e) => {
        setIdSimpleDictionarySelected(e.target.value);
        clearFields();
    }

    const onIdNewDictionaryChanged = (e) => {
        setIdNewDictionarySelected(e.target.value);
    }

    const onNameNewDictionaryChanged = (e) => {
        setNameNewDictionarySelected(e.target.value);
    }

    const nameButtonSelect = () => {
        if (idSelectedRow.length === 0) {
            setOperation(operationEnum.Add);
            setButtonName("Zapisz");
            setDialogQuestion("Czy na pewno chcesz zapisać nowe dane w bazie?")
        } else if (idSelectedRow.length === 1 && nameNewDictionarySelected.length > 0) {
            setOperation(operationEnum.Update);
            setButtonName("Aktualizuj");
            setDialogQuestion("Czy na pewno chcesz zaktualizować dane?")
        } else if (idSelectedRow.length > 0) {
            setOperation(operationEnum.Delete);
            setButtonName("Usuń");
            setDialogQuestion("Czy na pewno chcesz wykasować dane z bazy?")
        }
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

                                    id="textFieldIdNewDictionary"
                                    label="Id wartości (0- automat)"
                                    variant="outlined"
                                    hiddenLabel
                                    // type="number"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    value={idNewDictionarySelected}
                                    onChange={onIdNewDictionaryChanged}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6} xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    autoComplete='off'
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
                                    <AlertDialogButton
                                        buttonName={buttonName}
                                        isDisabled={isButtonDisable}
                                        dialogQuestion={dialogQuestion}
                                        onDisagree={onDisagree}
                                        onAgree={onAgree} />
                                    {showPopup && <AlertInformationPopup information={informationFromDb} isOpen={showPopup} statusFromDb={statusFromDb} onClosePopup={onClosePopup} />}

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


