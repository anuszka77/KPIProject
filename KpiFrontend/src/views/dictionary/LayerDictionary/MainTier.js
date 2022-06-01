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
import { loadDimensions, loadTierList, saveLayers, loadDictSystem, deleteSpecificLayer } from '../../../services/dictionaryService';
import { useEffect, useState } from 'react';
import MainTierGrid from './MainTierGrid'
import { useSimpleDictionaryContext } from '../SimpleDictionary/SimpleDictionaryContext';
import AlertDialogButton from '../../../utils/AlertDialogButton';
import AlertInformationPopup from '../../../utils/AlertInformationPopup';
import { withStyles} from '@material-ui/core/styles';


const MainTier = () => {
    const {idSelectedRow, orderReloadGrid,setOrderReloadGrid } = useSimpleDictionaryContext();
    const [dimensionList, setDimensionList] = useState([]);
    const [tierList, setTierList] = useState([]);
    const [dictSystemList, setDictSystemList] = useState([]);

    const [systemValueId, setSystemValueId] = useState('');
    const [dimensionValueId, setDimensionValueId] = React.useState('');
    const [tierValueId, setTierValueId] = React.useState('');
    const [layerName, setLayerName] = useState("");

    const [isButtonDisable, setIsButtonDisable] = useState(true);
    const [buttonName, setButtonName] = useState("Zapisz");
    const [oparation, setOperation] = useState(operationEnum.Add);
    const [listOfSelectedRowToRemove, setListOfSelectedRowToRemove] = useState("")
    const [isVisibleTextFieldWithIdToRemove, setIsVisibleTextFieldWithIdToRemove] = useState(false)

    const [informationFromDb, setInformationFromDb] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const styles = theme => ({
        buttonPadding: {    
          padding: '30px',   
        },
      });
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
    }, [systemValueId, dimensionValueId, tierValueId,layerName,listOfSelectedRowToRemove,oparation]);

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
        if (idSelectedRow.length === 0 ) {
            setOperation(operationEnum.Add);
            setButtonName("Zapisz");
            setIsVisibleTextFieldWithIdToRemove(false);
        } else if (idSelectedRow.length === 1 && layerName.length > 0) {
            setOperation(operationEnum.Update);
            setButtonName("Aktualizuj");
            setIsVisibleTextFieldWithIdToRemove(false);
        } else if (idSelectedRow.length > 0) {
            setOperation(operationEnum.Delete);
            setButtonName("Usuń");
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

    const onDimensionChange = (event) => {
        setDimensionValueId(event.target.value);
        setTierValueId(null);
        loadTierList(event.target.value).then((x) => {
            setTierList(x);
        })
    };

    const onSystemChanged = (e) => {
        setSystemValueId(e.target.value);
    }

    const handleChangeTier = (event) => {
        setTierValueId(event.target.value);
    };

    const onLayerNameChanged = (e) => {
        setLayerName(e.target.value);
    }



    const onAgree = () => {
        switch (oparation) {
            case operationEnum.Add
                : var list = [{ dimensionId: dimensionValueId, tierId: tierValueId, name: layerName }];
                saveLayers(list, systemValueId).then(x => { setInformationFromDb(x.returnMessage); setShowPopup(true) });
                setOrderReloadGrid(!orderReloadGrid);
                break;
            // case operationEnum.Update
            //     : modifySpecificDictionary(idSimpleDictionarySelected, idNewDictionarySelected, nameNewDictionarySelected).then(x => { setInformationFromDb(x); setShowPopup(true) });
            //     break;
            case operationEnum.Delete
                : deleteSpecificLayer(systemValueId, dimensionValueId, tierValueId, listOfSelectedRowToRemove).then(x => { setInformationFromDb(x.returnMessage); setShowPopup(true) });
                setOrderReloadGrid(!orderReloadGrid);
                break;
        }
        // clearFields();
    }

    const onDisagree = () => {
        // clearFields();
    }

    const onClosePopup = (e) => {
        setShowPopup(false);
        return false;
    }

    return (
        <MainCard  title="Słowniki do księgi procesów"  >
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
                        <Grid item lg={3} md={6} sm={6} xs={12} >
                            <Box sx={{ minWidth: 12 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Nazwa wymiaru</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Nazwa wymiaru"
                                        onChange={onDimensionChange}
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
                                        onChange={handleChangeTier}>
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
                                        onDisagree={onDisagree}
                                        onAgree={onAgree} />
                                    {showPopup && <AlertInformationPopup information={informationFromDb} isOpen={showPopup} onClosePopup={onClosePopup} />}
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
            <MainTierGrid idSystem={systemValueId} idDimension={dimensionValueId} idTier={tierValueId} reloadGrid = {orderReloadGrid}/>      
        </MainCard>
    );
};
export default MainTier;
