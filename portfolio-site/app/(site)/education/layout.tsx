import type { Metadata } from 'next';

import pageStyles from '../page.module.css';

export const metadata: Metadata = {
  title: "Sebastian Bailey | Education",
  description: "Seb's educational background",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={pageStyles.pageContainer}>
      <h1>Education</h1>
      {children}
    </div>
  );
}