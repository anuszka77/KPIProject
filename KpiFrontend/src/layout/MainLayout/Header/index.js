import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';


// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// assets
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();
    const [margin, setMargin] = useState(`250px`)
    const [menuCollapsed, setMenuCollapsed] = useState(true);


    const onMenuClick = (e) =>{
        var newState = menuCollapsed === true ? false: true;
        setMenuCollapsed(newState);

        if(newState === true)
        {
            setMargin(`250px`);
        }
        else
        {
            setMargin(`0px`);
        }
        handleLeftDrawerToggle();
    }

    return (
        <>
            {/* logo & toggler button */}

                <div style={{marginLeft: margin}}>
                    <Avatar 
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={onMenuClick}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                    </div>
          
            {/* notification & profile */}

        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
