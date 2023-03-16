import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './ColorPallette.module.scss';
import fabricImg from '../../public/images/fabrics/fabric.png'
import Box from '@mui/material/Box';
import Combinations from '../Combinations/Combinations';

interface ColorPalletteProps {}

interface FullSuitProps {
  id: number
  color: string
  suit: string
  pants: string
};
interface SuitProps {
  color: string
  colorCode: string
}
export interface ComboProps {
    suit: string,
    shirt: string,
    pants: string
}
const ColorPallette: FC<ColorPalletteProps> = () => {

  const suitShirtsColors: SuitProps[] = [
    {
      color: 'White',
      colorCode: '#fff'
    }, 
    {
      color: 'Cream',
      colorCode: '#f5e8d6'
    }, 
    {
      color: 'Powder Blue',
      colorCode: '#d3defa'
    }
  ];
  const suitsColors:SuitProps[] = [
    {
      color: 'Black',
      colorCode: '#000000'
    }, 
    {
      color: 'Navy',
      colorCode: '#133d79'
    }, 
    {
      color: 'Grey',
      colorCode: '#a9abad'
    }, 
    {
      color: ' brown',
      colorCode: '#a97461'
    }, 
    {
      color: 'Tan',
      colorCode: '#b69678'
    }];

const fullSuit: FullSuitProps[] = [];
const fullSuitPants: FullSuitProps[] = fullSuit;


suitsColors.forEach((el:SuitProps, i: number) => fullSuit.push({
  id : i + 1,
  color : el.color,
  suit : el.colorCode,
  pants : el.colorCode,
}));

const combo: ComboProps[] = [];

fullSuit.map((el: FullSuitProps) => {
  const {suit} = el;
  const suitColor = suit
  fullSuitPants.forEach((pnts:FullSuitProps) => {
    const {pants} = pnts;
    const pantColor = pants
    suitShirtsColors.forEach((shirt: SuitProps) => {
      const {colorCode} = shirt
      combo.push({
        suit: suitColor,
        shirt: colorCode,
        pants: pantColor
      });
    })
  })
})
console.log(combo)
  
  return (
  <div className={styles.ColorPallette} data-testid="ColorPallette">
    <Box className={styles.colorContainer}>
      <div className={styles.categories}>Suits/Trousers:</div>
    {suitsColors.map(el => 
        <Card sx={{ maxWidth: 200 }} className={styles.cardContainer} key={el.color}>
          
          <CardMedia
            style={{background: el.colorCode}}
            component="img"
            alt="green iguana"
            height="150"
            image={fabricImg}
            
          />
            <Typography gutterBottom variant="h6" component="div">
              {el.color}
            </Typography>
        </Card>
    )}
    </Box>
    <Box className={styles.colorContainer}>
      <div className={styles.categories}>Shirts :</div>
    {suitShirtsColors.map(el => 
        <Card sx={{ maxWidth: 200 }} className={styles.cardContainer} key={el.color}>
          
          <CardMedia
            style={{background: el.colorCode}}
            component="img"
            alt="green iguana"
            height="150"
            image={fabricImg}
            
          />
            <Typography gutterBottom variant="h6" component="div">
              {el.color}
            </Typography>
        </Card>
    )}
    </Box>


    {/* COMBINATIONs */}
    <Typography gutterBottom variant="h6" component="div">
              COMBINATIONS:
    </Typography>

      <Combinations data={combo}/>
  </div>
)};

export default ColorPallette;
