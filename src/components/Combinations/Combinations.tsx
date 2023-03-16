import React, { FC } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ComboProps } from '../ColorPallette/ColorPallette';

import styles from './Combinations.module.scss';
import Typography from '@mui/material/Typography';

interface CombinationsProps {
  data: ComboProps[]
} 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Combinations: FC<CombinationsProps> = (props:CombinationsProps) => {
  const {data} = props;

  return(
  <div className={styles.Combinations} data-testid="Combinations">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
        {data.map((el:ComboProps, index:number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
            <Typography gutterBottom variant="h6" component="div">
              {index + 1}.
            </Typography>
              <Box className={styles.outfitContainer}>
                <div className={styles.outfitColor} style={{background: el.suit}}>suit</div>
                <div className={styles.outfitColor} style={{background: el.shirt}}>shirt</div>
                <div className={styles.outfitColor} style={{background: el.pants}}>pants</div>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  </div>
)};

export default Combinations;
