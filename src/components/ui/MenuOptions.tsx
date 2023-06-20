import { FC } from 'react';
import { IMenu } from '../../interfaces';

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom';

interface Props{
    options: IMenu[];
}

export const MenuOptions: FC<Props> = ({ options }) => {

    const navigate = useNavigate();

    const handleNavigation = (url: string) => {
        navigate( url );
    }

    return (
        <List>
            {
                options.map( item => (
                    <ListItem key={ item.path } onClick={() => handleNavigation( item.path )}>
                        <ListItemButton
                            sx={{
                                mb:'.5rem',
                                padding:'.75rem 1.5rem',
                                borderRadius:'.75rem',
                                transitionDuration:'.3s',
                                transitionProperty:'background-color',
                                ':hover':{
                                    bgcolor:'primary.main'
                                }
                            }}
                        >
                            <ListItemIcon>
                                { item.icon }
                            </ListItemIcon>
                            <ListItemText primary={ item.name }/>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    )
}
