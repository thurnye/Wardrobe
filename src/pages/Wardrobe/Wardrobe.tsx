import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import styles from './Wardrobe.module.scss';

interface WardrobeProps {}

const Wardrobe: FC<WardrobeProps> = () => (
  <div className={styles.Wardrobe} data-testid="Wardrobe">
    <Box className={styles.wardrobeContainer}>
        
        {/* Closet */}
        <Box className={styles.closetContainer}>
          <Card sx={{height: 'inherit'}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                CLOSET
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Infographic */}
        <Box className={styles.infographicContainer}>
          <Card sx={{height: 'inherit', display: 'flex',flexDirection: 'column', p:2 }}>
            {/* <CardContent> */}
              
                <Box className={styles.displayMirror}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     Mirror
                    </Typography>
                </Box>
                <Box className={styles.positions}>
                  <span className={styles.positionSpan}></span>
                  <span className={styles.positions}></span>
                  <span className={styles.positions}></span>
                </Box>
                <Box className={styles.displayInfo}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     item info
                    </Typography>
                </Box>
            {/* </CardContent> */}
          </Card>
        </Box>
      </Box>
  </div>
);

export default Wardrobe;
