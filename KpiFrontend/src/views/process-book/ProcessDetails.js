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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import { loadDetails, loadColumnToShow , loadListOfProcessBookActivity, loadListOfProcessLayers} from '../../services/processBookService';
import { ProcessContext , useProcessContext} from './ProcessContext';

const capitalize = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
  }

const ProcessDetails = () => {
    
  const {selectedProcessId, setSelectedProcessId, processData, setProcessData} = useProcessContext();  
  const [columnToShow, setColumnToShow] = useState([]);
  const [processDetails, setProcessDetails] = useState([]);
  const [rows, setRows]=useState([]);



  useEffect(() => {
    if(selectedProcessId != undefined && parseInt(selectedProcessId) != 0)
    {
    getListOfColumnToShow();
    const filter = processData.filter(x => x.idProcess=== parseInt(selectedProcessId));
    setProcessDetails(filter);
    const y=[
      {id: 1, name: filter[0].idProcess},
      {id: 2, name: filter[0].processName},
      {id: 9, name: filter[0].areaLayerName},
      {id: 13, name: filter[0].subAreaLayerName},
      {id: 21, name: filter[0].subjectLayerName},
      {id: 29, name: filter[0].attributeLayerName},
      {id: 54, name: filter[0].objectTierName} 
    ];     
    setRows(y); 
  } 
}, [selectedProcessId]);

  const getListOfColumnToShow = async => {
    loadColumnToShow(1,1).then((y) => {
      setColumnToShow(y);
    });
}


  const columns = columnToShow.map((row) => ({
    field: capitalize(row.columnToGridName),
    headerName: row.columnToGridNamePl,
    id: row.idColumnsToGrid
  }));
  
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">                                     
      <TableBody>                                     
        {columns.map((row) => 
        (processDetails != null && processDetails.length != 0) ?
        (
          <TableRow
            key={row.field}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.headerName}
            </TableCell>
            <TableCell>{rows.filter(x => x.id === row.id)[0].name}</TableCell>
          </TableRow>
        )
        :
        (
          <TableRow
            key={row.field}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >                                           
          <TableCell component="th" scope="row">
          {row.headerName}
        </TableCell>
        </TableRow>
        )
        )
        }
      </TableBody>
    </Table>
</TableContainer>
  );
}

export default ProcessDetails;