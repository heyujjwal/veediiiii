"use client";

import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './components/HeaderMegaMenu';
import { HeroSection } from './components/HeroSection';
import { SectionAfterHero } from './components/SectionAfterHero';
import { TrustSection } from './components/TrustSection';

export default function Home() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Head>
        <title>Veed.io Pricing Page Clone</title>
      </Head>
      <HeaderMegaMenu />
      <HeroSection />
      <SectionAfterHero />
      <TrustSection />
      {/* Add other sections/components here */}
    </MantineProvider>
  );
}
