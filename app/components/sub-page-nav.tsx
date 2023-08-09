'use client';
import { useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

export function SubPageNav({
  routes,
  onChange,
  activeIndex,
}: {
  routes: {
    index: number;
    name: string;
  }[];
  onChange: (index: number) => void;
  activeIndex: number;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const newIndex = (activeIndex + 1) % routes.length;
        onChange(newIndex);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const newIndex = (activeIndex - 1 + routes.length) % routes.length;
        onChange(newIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <ButtonGroup isAttached size='xs'>
      {routes.map((r) => (
        <Button
          key={`sub-page-nav-${r.index}`}
          opacity={activeIndex === r.index ? 1 : 0.4}
          variant={activeIndex === r.index ? 'solid' : 'outline'}
          onClick={() => onChange(r.index)}
        >
          {r.name}
        </Button>
      ))}
    </ButtonGroup>
  );
}
