'use client';
import { usePathname } from 'next/navigation';
import { navItems } from '../navigation';

export default function ContentPage() {
  const pathname = usePathname();
  const activeNavItem = navItems.find((item) => item.route === pathname);
  return activeNavItem ? activeNavItem.content : <div>Not Found</div>;
}
