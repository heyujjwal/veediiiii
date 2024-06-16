import React from 'react';
import { Button } from '@mantine/core';
import classes from './HeroSection.module.css';

export function HeroSection() {
  return (
    <div className={classes.heroSection}>
      <h1 className={classes.heroTitle}>
      CREATE PRO-LEVEL VIDEOS WITHOUT PRO-LEVEL SKILLS</h1>
      <p className={classes.heroSubtitle}>
        VEED makes video creation easier for everyone. Get seen with VEED.
      </p>
      <Button className={classes.heroButton} size="lg" component="a" href="#">
        Start for free
      </Button>
    </div>
  );
}
