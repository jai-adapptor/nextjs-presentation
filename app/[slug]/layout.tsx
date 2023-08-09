'use client';
import { Grid } from '@chakra-ui/react';
import { Sidebar } from '../components/sidebar';
import { Content } from '../components/content';

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid as='main' height='100vh' templateColumns='auto 1fr'>
      <Sidebar />
      <Content>{children}</Content>
    </Grid>
  );
}
