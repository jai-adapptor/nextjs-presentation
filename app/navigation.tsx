import { ReactNode } from 'react';
import { PagesVsApp } from './pages/pages-vs-app';
import { Overview } from './pages/overview';
import { ReactServerComponents } from './pages/react-server-components';
import { Controversy } from './pages/controversy';
import { ServerActions } from './pages/server-actions';
import { Conclusion } from './pages/conclusion';

interface NavItem {
  order: number;
  name: string;
  route: string;
  content: ReactNode;
}

export const navItems: NavItem[] = [
  {
    order: 1,
    name: 'Overview',
    route: '/overview',
    content: <Overview />,
  },
  {
    order: 2,
    name: 'Controversy',
    route: '/controversy',
    content: <Controversy />,
  },
  {
    order: 3,
    name: 'Router',
    route: '/router',
    content: <PagesVsApp />,
  },
  {
    order: 4,
    name: 'Server Components',
    route: '/react-server-components',
    content: <ReactServerComponents />,
  },
  {
    order: 5,
    name: 'Server Actions',
    route: '/actions',
    content: <ServerActions />,
  },
  {
    order: 6,
    name: '[REDACATED]',
    route: '/conclusion',
    content: <Conclusion />,
  },
];
