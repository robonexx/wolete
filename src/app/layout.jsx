import { Fira_Sans, Playfair_Display } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header';
import Sidebar from '@/components/sidebar/Sidebar';

const fira = Fira_Sans({
  weight: ['300', '400', '500', '600', '700', '800', '900'], // your chosen weights
  style: ['normal', 'italic'], // omit if you don’t need italics
  subsets: ['latin'],
  variable: '--font-fira-sans', // optional: if you want CSS variable usage
  display: 'swap', // optional display value
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'], // choose whichever you need
  style: ['normal', 'italic'], // omit if you don’t need italics
  subsets: ['latin'],
  variable: '--font-playfair', // optional: if you want CSS variable usage
  display: 'swap',
});

export const metadata = {
  title: 'Wolete Official',
  description:
    'Rebecca Wolete is a Dance artist, Educator, Organizer and Cultural Ambassador, a dynamic force of movement and expression, a dancer whose artistry flows seamlessly between the modern and the ancestral. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={` ${fira.variable} ${playfair.variable}`}>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
