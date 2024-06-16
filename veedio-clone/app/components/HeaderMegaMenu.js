import React, { useState } from 'react';
import {
  Group,
  Button,
  UnstyledButton,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  useMantineTheme,
  Card,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const theme = useMantineTheme();

  const toggleDropdown = () => {
    setDropdownOpened(!dropdownOpened);
  };

  return (
    <Box>
      <header className={classes.header}>
        <Group position="apart" align="center" className={classes.inner}>
          <a href="#" className={classes.logo}>
            VEED
          </a>

          <Group spacing={5} className={classes.links} sx={{ display: drawerOpened ? 'none' : 'flex' }}>
            <a href="#" className={classes.link}>Products</a>
            <a href="#" className={classes.link}>Use Cases</a>
            <a href="#" className={classes.link}>Resources</a>
            <UnstyledButton onClick={toggleDropdown} className={classes.link}>
              For Business <IconChevronDown size={16} />
            </UnstyledButton>
            <a href="#" className={classes.link}>Pricing</a>
            <a href="#" className={classes.link}>Book a Demo</a>
          </Group>

          <Group spacing={5} sx={{ display: drawerOpened ? 'none' : 'flex' }}>
            <Button variant="outline" className={classes.loginButton}>Login</Button>
            <Button className={classes.signUpButton}>Sign Up</Button>
          </Group>

        </Group>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
        >
          <ScrollArea style={{ height: 'calc(100vh - 80px)' }}>
            <a href="#" className={classes.link}>Products</a>
            <a href="#" className={classes.link}>Use Cases</a>
            <a href="#" className={classes.link}>Resources</a>
            <a href="#" className={classes.link}>For Business</a>
            <a href="#" className={classes.link}>Pricing</a>
            <a href="#" className={classes.link}>Book a Demo</a>

            <Button variant="outline" className={classes.drawerLoginButton}>Login</Button>
            <Button className={classes.drawerSignUpButton}>Sign Up</Button>
          </ScrollArea>
        </Drawer>

        {dropdownOpened && (
          <Box className={classes.dropdown}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>Business Card 1</Text>
              <Text size="sm" color="dimmed">
                Description for business card 1.
              </Text>
            </Card>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>Business Card 2</Text>
              <Text size="sm" color="dimmed">
                Description for business card 2.
              </Text>
            </Card>
          </Box>
        )}
      </header>
    </Box>
  );
}
