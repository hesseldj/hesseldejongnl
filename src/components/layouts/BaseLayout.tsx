import { ReactNode } from 'react';
import { lato, dosis } from '@/config/fonts';
import '@/app/globals.css';

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <html lang="nl">
      <body className={`${dosis.variable} ${lato.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
} 