import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Rohit | Full Stack Developer',
  description:
    'Final-year B.Tech student and Full Stack Developer skilled in MERN stack, backend development, REST APIs, SQL, DSA, system design, and Docker.',
  keywords: [
    'Full Stack Developer',
    'MERN Developer',
    'Backend Developer',
    'React',
    'Node.js',
    'MongoDB',
    'SQL',
    'DSA',
    'System Design',
    'Docker',
  ],
  authors: [{ name: 'Rohit' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
