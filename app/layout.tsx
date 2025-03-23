// /app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from './components/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Skip Hire App',
  description: 'Book a skip in a few easy steps',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}