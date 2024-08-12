import type { Metadata } from 'next';

import pageStyles from '../page.module.css';

export const metadata: Metadata = {
  title: "Sebastian Bailey | Work",
  description: "Seb's career progress and experience",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={pageStyles.pageContainer}>
      <h1>Work</h1>
      {children}
    </div>
  );
}