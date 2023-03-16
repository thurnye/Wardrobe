import { Box } from '@mui/material';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import ColorPallette from './components/ColorPallette/ColorPallette';
import FittingRoom from './components/FittingRoom/FittingRoom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NoMatch from './pages/NoMatch/NoMatch';
import Wardrobe from './pages/Wardrobe/Wardrobe';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';

interface FullSuitProps {
  id: number
  color: string
  suit: string
  pants: string
}

const suitsColors: string[] = ['Black', 'NavyBlue', 'Grey', 'Brown', 'Tan'];
const fullSuit: FullSuitProps[] = [];

suitsColors.forEach((el:string, i: number) => fullSuit.push({
  id : i + 1,
  color : el,
  suit : el,
  pants : el,
}));

function App() {
  return (
    <div className={styles.App}>
      <Box className={styles.appHeader}>
        <Header/>
      </Box>
      <Box sx={{m: 6, mt: 26 }} className={styles.appContents}>
        <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/wardrobe"  element={<Wardrobe/>} />
        <Route path="/suit-combo"  element={<ColorPallette/>} />
        <Route path="/fitting-room"  element={<FittingRoom/>} />
        <Route path="*" element={<NoMatch />} />
        </Routes>
      </Box>
      <Box className={styles.appFooter} sx={{mb:0.5}}>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
