import * as React from 'react';
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


import FormControl from '@mui/material/FormControl';
import { ArrowForward } from '@mui/icons-material';

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                    <Grid item xs={12}>
                            <Grid container spacing={3} rowSpacing={2}>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                      <FormControl fullWidth>
                                          <TextField id="outlined-basic" label="Nazwa procesu" variant="outlined"/>
                                      </FormControl>
                                  </Box>
                                  </Grid>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box sx={{ maxWidth: 350}}>
                                                  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Nazwa tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          ></Select>
                                                  </FormControl>
                                          </Box>
                                    </Grid>
                                  
                            </Grid>
                      </Grid> 
                      <Grid item xs={12}>
                            <Grid container spacing={2} rowSpacing={2}>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                      <FormControl fullWidth>
                                          <TextField id="outlined-basic" label="Nazwa procesu" variant="outlined"/>
                                      </FormControl>
                                  </Box>
                                  </Grid>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box sx={{ maxWidth: 350}}>
                                                  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Nazwa tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          ></Select>
                                                  </FormControl>
                                          </Box>
                                    </Grid>
                                  
                            </Grid>
                      </Grid> 
                      <Grid item xs={12}>
                            <Grid container spacing={2} rowSpacing={2}>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                      <FormControl fullWidth>
                                          <TextField id="outlined-basic" label="Nazwa procesu" variant="outlined"/>
                                      </FormControl>
                                  </Box>
                                  </Grid>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box sx={{ maxWidth: 350}}>
                                                  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Nazwa tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          ></Select>
                                                  </FormControl>
                                          </Box>
                                    </Grid>
                                  
                            </Grid>
                        </Grid> 
                        <Grid item xs={12}>
                            <Grid container spacing={2} rowSpacing={2}>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                      <FormControl fullWidth>
                                          <TextField id="outlined-basic" label="Nazwa procesu" variant="outlined"/>
                                      </FormControl>
                                  </Box>
                                  </Grid>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box sx={{ maxWidth: 350}}>
                                                  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Nazwa tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          ></Select>
                                                  </FormControl>
                                          </Box>
                                    </Grid>
                                  
                            </Grid>
                        </Grid> 
                        <Grid item xs={12}>
                            <Grid container spacing={2} rowSpacing={2}>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                      <FormControl fullWidth>
                                          <TextField id="outlined-basic" label="Nazwa procesu" variant="outlined"/>
                                      </FormControl>
                                  </Box>
                                  </Grid>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box sx={{ maxWidth: 350}}>
                                                  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Nazwa tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          ></Select>
                                                  </FormControl>
                                          </Box>
                                    </Grid>
                                  
                            </Grid>
                        </Grid> 
                        <Grid item xs={12}>
                            <Grid container spacing={2} rowSpacing={2}>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                      <FormControl fullWidth>
                                          <TextField id="outlined-basic" label="Nazwa procesu" variant="outlined"/>
                                      </FormControl>
                                  </Box>
                                  </Grid>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box sx={{ maxWidth: 350}}>
                                                  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Nazwa tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          ></Select>
                                                  </FormControl>
                                          </Box>
                                    </Grid>
                                  
                            </Grid>
                        </Grid> 
                        <Grid item xs={12}>
                            <Grid container spacing={2} rowSpacing={2}>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                      <FormControl fullWidth>
                                          <TextField id="outlined-basic" label="Nazwa procesu" variant="outlined"/>
                                      </FormControl>
                                  </Box>
                                  </Grid>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box sx={{ maxWidth: 350}}>
                                                  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Nazwa tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          ></Select>
                                                  </FormControl>
                                          </Box>
                                    </Grid>
                                  
                            </Grid>
                        </Grid> 
                        <Grid item xs={12}>
                            <Grid container spacing={2} rowSpacing={2}>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box sx={{ maxWidth: 350}}>
                                      <FormControl fullWidth>
                                          <TextField id="outlined-basic" label="Nazwa procesu" variant="outlined"/>
                                      </FormControl>
                                  </Box>
                                  </Grid>
                                  <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box sx={{ maxWidth: 350}}>
                                                  <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label2">Nazwa tier</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label2"
                                                              id="demo-simple-select2"
                                                              value={5}
                                                              label="Nazwa tier"
                                                              width="200px"
                                                              //onChange={handleChangeTier}
                                                          ></Select>
                                                  </FormControl>
                                          </Box>
                                    </Grid>
                                  
                            </Grid>
                        </Grid> 
                
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