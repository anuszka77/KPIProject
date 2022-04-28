import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadListOfProcessBookActivity , loadProcessDiagramActivity} from '../../services/processBookService';

import { styled } from '@mui/material/styles';

import '@sakit-sa/react-master-detail/dist/index.css';
import { DataSaverOff } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from "@material-ui/core/styles";
import { ArrowForward } from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    border: "solid 1px",
    borderRight: "solid 1px",
    borderColor: "#17202e"
  }
}));

const DiagramRender = ( {params} ) => {

  const classes = useStyles();

return(
  
      <List  className={classes.root}  >
      {params.row.listProcessActivityXml.map((rowData) => (
           <ListItem
           //id={rowData.tierId}
           //onClick={handleListItemClick}               
           >                
           <ListItemText 
           primary={rowData.actionStepName} 
           secondary={"obecny tier: " + rowData.activityTierId}
            />
            <ListItemAvatar style={{marginLeft: "20px"}}>
            <Avatar> <ArrowForward /></Avatar>
           

           </ListItemAvatar>  
           </ListItem>

          ))}     
          </List>   
     );
}

export default DiagramRender;