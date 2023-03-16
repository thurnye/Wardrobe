import React, { FC } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from './FittingRoom.module.scss';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

interface FittingRoomProps {}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FittingRoom: FC<FittingRoomProps> = () => (
  <div className={styles.FittingRoom} data-testid="FittingRoom">
     
      <Box className={styles.fittingContainer}>
        
        {/* Wardrobe */}
        <Box className={styles.wardrobeFittingRoom}>
          <Card sx={{height: 'inherit'}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                WARDROBE FILTER
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Silhouette */}
        <Box className={styles.silhouetteFittingRoom}>
          <Card sx={{height: 'inherit'}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                SILHOUETTE DISPLAY
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Custom Design */}
        <Box className={styles.customDesignFittingRoom}>
          <Card sx={{height: 'inherit'}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                CUSTOM DESIGN
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
  </div>
);

export default FittingRoom;
