import { Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    <Card sx={{height: 'inherit'}}>
      <Typography sx={{ fontSize: 13, p:1, m:0 }} color="text.secondary" gutterBottom>
        FOOTER
      </Typography>
    </Card>
  </div>
);

export default Footer;
