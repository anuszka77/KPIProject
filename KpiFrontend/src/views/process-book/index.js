import { useEffect, useState } from 'react';

// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { loadDetails } from '../../services/processBookService';

// ==============================|| SAMPLE PAGE ||============================== //

const ProcessBook = () => {
    const [data, setData] = useState();
   /* useEffect(() => {
        loadDetails().then((x) => {
            setData(x);
            console.log(x[0].dimensionDescription);
        });
    }, []);*/
    return (
        <MainCard title="Słownik zaciągnięty z bazy">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut
            </Typography>
        </MainCard>
    );
};

export default ProcessBook;
