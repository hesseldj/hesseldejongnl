import { Lato, Dosis } from 'next/font/google';

export const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const dosis = Dosis({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-dosis',
}); 