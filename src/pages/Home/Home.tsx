import React, { FC } from 'react';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
  </div>
);

export default Home;
