import React from 'react';
import { Group, Box, Text } from '@mantine/core';
import classes from './SectionAfterHero.module.css';

export function SectionAfterHero() {
  return (
    <Box className={classes.section}>
      <Group position="center" spacing="xl" className={classes.cards}>
        <div className={classes.card}>
          <img src="path/to/your/image1.jpg" alt="Description 1" className={classes.image} />
        </div>
        <div className={classes.card}>
          <img src="path/to/your/image2.jpg" alt="Description 2" className={classes.image} />
        </div>
        <div className={classes.card}>
          <img src="path/to/your/image3.jpg" alt="Description 3" className={classes.image} />
        </div>
      </Group>
      <Text align="center" className={classes.trustText}>
        76% of Fortune 500 companies trust VEED
      </Text>
    </Box>
  );
}
