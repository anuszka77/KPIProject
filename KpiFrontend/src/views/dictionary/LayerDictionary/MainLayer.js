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
import { operationEnum } from '../DictionaryGeneralUtils/DictionaryEnum';
import { loadDimensions, loadTierList, saveLayers, loadDictSystem, deleteSpecificLayer, layerModify } from '../../../services/dictionaryService';
import { useEffect, useState } from 'react';
import MainLayerGrid from './MainLayerGrid'
import { useDictionaryContext } from '../DictionaryGeneralUtils/DictionaryContext';
import AlertDialogButton from '../../../utils/AlertDialogButton';
import AlertInformationPopup from '../../../utils/AlertInformationPopup';


const MainLayer = () => {
    const { idSelectedRow, orderReloadGrid, setOrderReloadGrid } = useDictionaryContext();
    const [dimensionList, setDimensionList] = useState([]);
    const [tierList, setTierList] = useState([]);
    const [dictSystemList, setDictSystemList] = useState([]);

    const [systemValueId, setSystemValueId] = useState('');
    const [dimensionValueId, setDimensionValueId] = React.useState('');
    const [tierValueId, setTierValueId] = React.useState('');
    const [layerName, setLayerName] = useState("");

    const [isButtonDisable, setIsButtonDisable] = useState(true);
    const [buttonName, setButtonName] = useState("Zapisz");
    const [dialogQuestion, setDialogQuestion] = useState("");
    const [oparation, setOperation] = useState(operationEnum.Add);
    const [listOfSelectedRowToRemove, setListOfSelectedRowToRemove] = useState("")
    const [isVisibleTextFieldWithIdToRemove, setIsVisibleTextFieldWithIdToRemove] = useState(false)

    const [informationFromDb, setInformationFromDb] = useState("");
    const [statusFromDb, setStatusFromDb] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        getDictSystem();
        getDimensions();
    }, []);


    let text = "";

    useEffect(() => {
        nameButtonSelect();

        if (idSelectedRow.length === 1) {
            setListOfSelectedRowToRemove(idSelectedRow[0].id)
        } else if (idSelectedRow.length === 0) {
            setListOfSelectedRowToRemove("");
        } else {
            idSelectedRow.forEach((element) => { text += element.id + ";" })
            setListOfSelectedRowToRemove(text)
        }
    }, [idSelectedRow, layerName]);

    useEffect(() => {
        checkIfSetEnableButton();
    }, [systemValueId, dimensionValueId, tierValueId, layerName, listOfSelectedRowToRemove, oparation]);


    const getDimensions = async => {
        loadDimensions().then((x) => {
            setDimensionList(x);
        });
    }


    const getDictSystem = async => {
        loadDictSystem().then((x) => {
            setDictSystemList(x);
        });
    }

    const nameButtonSelect = () => {
        if (idSelectedRow.length === 0) {
            setOperation(operationEnum.Add);
            setButtonName("Zapisz");
            setDialogQuestion("Czy na pewno chcesz zapisać nowe dane w bazie?")
            setIsVisibleTextFieldWithIdToRemove(false);
        } else if (idSelectedRow.length === 1 && layerName.length > 0) {
            setOperation(operationEnum.Update);
            setButtonName("Aktualizuj");
            setDialogQuestion("Czy na pewno chcesz zaktualizować dane?")
            setIsVisibleTextFieldWithIdToRemove(false);
        } else if (idSelectedRow.length > 0) {
            setOperation(operationEnum.Delete);
            setButtonName("Usuń");
            setDialogQuestion("Czy na pewno chcesz wykasować dane z bazy?")
            setIsVisibleTextFieldWithIdToRemove(true);
        }
    }

    const checkIfSetEnableButton = () => {
        if ((systemValueId && dimensionValueId && tierValueId && layerName) || oparation === 3) {
            setIsButtonDisable(false);
        } else {
            setIsButtonDisable(true);
        }
    }

    const onDimensionChanged = (event) => {
        setDimensionValueId(event.target.value);
        setTierValueId(null);
        setLayerName("");
        loadTierList(event.target.value).then((x) => {
            setTierList(x);
        })
        console.log(layerName);
    };

    const onSystemChanged = (e) => {
        setTierValueId(null);
        setDimensionValueId(null);
        setLayerName("");
        setSystemValueId(e.target.value);
    }

    const onTierChanged = (event) => {
        setTierValueId(event.target.value);
        setLayerName("");
    };

    const onLayerNameChanged = (e) => {
        setLayerName(e.target.value);
    }




    const onAgree = () => {
        switch (oparation) {
            case operationEnum.Add
                : var list = [{ dimensionId: dimensionValueId, tierId: tierValueId, name: layerName }];
                saveLayers(list, systemValueId).then(x => { setInformationFromDb(x.returnMessage); setShowPopup(true); setStatusFromDb(x.returnStatus) });
                setOrderReloadGrid(!orderReloadGrid);
                setLayerName("");
                break;
            case operationEnum.Update
                : layerModify(systemValueId, dimensionValueId, tierValueId, listOfSelectedRowToRemove, layerName).then(x => { setInformationFromDb(x.returnMessage); setShowPopup(true); setStatusFromDb(x.returnStatus) });
                setOrderReloadGrid(!orderReloadGrid);
                setLayerName("");
                break;
            case operationEnum.Delete
                : deleteSpecificLayer(systemValueId, dimensionValueId, tierValueId, listOfSelectedRowToRemove).then(x => { setInformationFromDb(x.returnMessage); setShowPopup(true); setStatusFromDb(x.returnStatus) });
                setOrderReloadGrid(!orderReloadGrid);
                setLayerName("");
                break;
        }
        setLayerName("");
    }

    const onDisagree = () => {
        setLayerName("");
    }

    const onClosePopup = (e) => {
        setShowPopup(false);
        return false;
    }

    return (
        <div>
            <MainCard title="Słowniki do księgi procesów"  >
                <Grid container spacing={gridSpacing}  >
                    <Grid item xs={12}  >
                        <Grid container spacing={gridSpacing} >
                            <Grid item lg={3} md={6} sm={6} xs={12} >
                                <Box sx={{ minWidth: 12 }} >
                                    <FormControl fullWidth >
                                        <InputLabel id="demo-simple-select-label">System</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="System"
                                            onChange={onSystemChanged}
                                            value={systemValueId}
                                        >
                                            {dictSystemList.map((row) => (
                                                <MenuItem value={row.idSystem} key={row.idSystem}>
                                                    {row.systemName + " (" + row.idSystem + ")"}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
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
                                                    {row.dimensionDescription + " (" + row.idDimension + ")"}
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
                                            value={tierValueId}
                                            label="Nazwa tier"
                                            onChange={onTierChanged}>
                                            {tierList.map((row) => (
                                                <MenuItem value={row.tierId} key={row.tierId}>
                                                    {row.tierName + " (" + row.tierId + ")"}
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
                                        value={layerName}
                                        onChange={onLayerNameChanged}
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
                            <Grid item lg={3} md={6} sm={6} xs={12}>
                                <FormControl fullWidth>
                                    {isVisibleTextFieldWithIdToRemove && <TextField
                                        id="outlined-basic"
                                        label="Id do usunięcia"
                                        variant="outlined"
                                        disabled
                                        value={listOfSelectedRowToRemove}
                                    />}
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </MainCard>
            <MainLayerGrid idSystem={systemValueId} idDimension={dimensionValueId} idTier={tierValueId} reloadGrid={orderReloadGrid} />
        </div>
    );
};
export default MainLayer;
