import React, { FC } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import styles from './Closet.module.scss';

interface ClosetProps {}

const Closet: FC<ClosetProps> = () => {
  
  return(
  <div className={styles.Closet} data-testid="Closet">
    <Box className={styles.wardrobeClosetContainer}>
      <Grid container spacing={2} sx={{height: '100%'}}>
        <Grid item xs={12} md={6} 
        sx={{
          height: '100%', 
          stretch:{height: '100%'}
          }} 
          >
            {/* Left Side of Closet */}
          <Box className={styles.leftSideContainer}>
            <Box className={styles.suitContainer}> Suit Box</Box>
            <Box className={styles.shirtContainer}>Shirt Box</Box>
            <Box className={styles.accessoriesContainer}>
            {/* Accessories Drawer */}
            <Grid container spacing={1} sx={{height: '100%'}}>
                <Grid item xs={6} md={6} 
                sx={{
                  height: '100%', 
                  stretch:{height: '100%'}
                  }} 
                  >
                    {/* Left Side Drawer */}
                  <Box className={styles.leftSideContainer}>
                    <Box className={styles.leftSideDrawerContainer}> LD1</Box>
                    <Box className={styles.leftSideDrawerContainer}>LD2</Box>
                    <Box className={styles.leftSideDrawerContainer}>LD3</Box>
                    <Box className={styles.leftSideDrawerContainer}>LD4</Box>
                  </Box>
                </Grid>
                <Grid item xs={6} md={6} 
                sx={{
                  height: '100%', 
                  stretch:{height: '100%'}
                  }} 
                  >
                    {/* Right Side Drawer */}
                  <Box className={styles.rightSideContainer}>
                  <Box className={styles.rightSideDrawerContainer}>RD1</Box>
                    <Box className={styles.rightSideDrawerContainer}>RD2</Box>
                    <Box className={styles.rightSideDrawerContainer}>RD3</Box>
                    <Box className={styles.rightSideDrawerContainer}>RD4</Box>
                  </Box>
                </Grid>
              </Grid>
            
            {/* End of Accessories Drawer */}
            
            </Box>
          </Box>
        </Grid>

        {/* Right Side of Closet */}
        <Grid item xs={12} md={6} 
        sx={{
          height: '100%', 
          stretch:{height: '100%'}
          }} 
          >
          <Box className={styles.RightSideContainer}>
            <Box className={styles.topShelfContainer}> 
            {/* Open Shelf */}
              <Grid container spacing={1} sx={{height: '100%'}}>
                {/* Left side of Open Shelf */}
                <Grid item xs={6} md={6} 
                sx={{
                  height: '100%', 
                  stretch:{height: '100%'}
                  }} 
                  >
                  <Box className={styles.leftSideContainer}>
                    <Box className={styles.suitContainer}> Trouser Box</Box>
                    <Box className={styles.shirtContainer}>Shorts Box</Box>
                    <Box className={styles.shirtContainer}>Denim Box</Box>
                    <Box className={styles.shirtContainer}>Chinos Box</Box>
                  </Box>
                </Grid>
                {/* Right side of Open Shelf */}
                <Grid item xs={6} md={6} 
                sx={{
                  height: '100%', 
                  stretch:{height: '100%'}
                  }} 
                  >
                  <Box className={styles.rightSideContainer}>
                  <Box className={styles.suitContainer}> HeadWear Box</Box>
                    <Box className={styles.shirtContainer}>Free Box</Box>
                    <Box className={styles.shirtContainer}>Free Box</Box>
                    <Box className={styles.shirtContainer}>Free Box</Box>
                  </Box>
                </Grid>
              </Grid>
              {/* End of Open Shelf */}
            </Box>
            <Box className={styles.shoesContainer}>Shoes Box</Box>
          </Box>
        </Grid>
      </Grid>
      </Box>
  </div>
)
};

export default Closet;
