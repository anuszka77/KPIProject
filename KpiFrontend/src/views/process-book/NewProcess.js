import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddCircle from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


import FormControl from '@mui/material/FormControl';
import { ArrowForward } from '@mui/icons-material';

import { loadTierDictionary} from '../../services/processBookService';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  boxShadow: 1,
  height: "85%",
  p: 7,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [tierDict, setTierDict] = useState();
  
  const [mainTier, setMainTier]=useState();
  const [area, setArea]=useState();


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    

  useEffect(() => {
    loadTierDictionary().then(x=>setTierDict(x));
    }, []);



  return (
    <div>
      <IconButton 
      color="primary" 
      aria-label="upload picture" 
      component="span" 
      style={{marginLeft: "20px"}}
      onClick={handleOpen}>
       <AddCircle />
      </IconButton>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={false}
      > 
        <Box sx={style}>
            <Grid container spacing={3} rowSpacing={3}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                      Szczegóły procesu
                    </Typography>


                    {tierDict?.filter(x=>x.dimensionId===0).map((row) => (
                    <Grid item xs={12}>               
                        <Grid container spacing={3} rowSpacing={2}> 
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label2">Główny tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Główny tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          >
                                                            {tierDict?.filter(x=>x.dimensionId===0).map((row) => (
                                                            <MenuItem value={row.tierName} key={row.idTier}>
                                                                {row.tierName}
                                                            </MenuItem>
                                                            ))}  
                                                                                                                         
                                                          </Select>                                     
                                        </FormControl>
                                    </Box>
                                  </Grid>                                                                                                  
                                 
                            </Grid>
                      </Grid> 
                ))}  

                        <IconButton 
                        color="primary" 
                        aria-label="upload picture" 
                        component="span" 
                        >
                         <ArrowForward style={{fontSize:"40px"}}/>
                        </IconButton>


                </Grid>
      
        </Box>
      </Modal>
    </div>
  );
}