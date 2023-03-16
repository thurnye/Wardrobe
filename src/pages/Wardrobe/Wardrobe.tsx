import { Card, Typography } from '@mui/material';
import React, { FC } from 'react';
import styles from './Wardrobe.module.scss';

interface WardrobeProps {}

const Wardrobe: FC<WardrobeProps> = () => (
  <div className={styles.Wardrobe} data-testid="Wardrobe">
    <Card sx={{height: 'inherit'}}>
      <Typography sx={{ fontSize: 13, p:1, m:0 }} color="text.secondary" gutterBottom>
        FOOTER
      </Typography>
    </Card>
  </div>
);

export default Wardrobe;
