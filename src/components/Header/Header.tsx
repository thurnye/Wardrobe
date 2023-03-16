import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './Header.module.scss';

interface HeaderProps {}
interface NavsProps {
  name: string, 
  path: string,
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Header: FC<HeaderProps> = () => {
  const navs: NavsProps[] = [
    // {name: 'Home', path: '/'},
    {name: 'Wardrobe', path: '/wardrobe'},
    {name: 'Custom Combos', path: '/suit-combo'},
    {name: 'Fitting Room', path: '/fitting-room'},
  ]
  
  return (
  <div className={styles.Header} data-testid="Header">
    <h1>Color Combo</h1>
     <Box sx={{ flexGrow: 1, mb: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {navs.map((el, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Link to={el.path} >{el.name}</Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  </div>
)
};

export default Header;
